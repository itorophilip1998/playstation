<template>
  <div class="bg-light">
    <Header :info="info" />
    <Loader v-if="loader" />

    <div class="name shadow w-75 p-2 text-center bg-white">
      <span
        ><input
          type="text"
          class="w-100 border-none"
          placeholder="🍳 Dashboard Search"
        />
      </span>
    </div>

    <div class="dashboard-header mt-5">
      <!-- Applied -->
      <h6 class="font-weight-bold pl-1">
        Electronics/Clothes
        <i class="fa fa-tag text-danger" aria-hidden="true"></i>
      </h6>

      <div class="recomended p-2 pb-5" id="load">
        <div
          class="card shadow mr-3 rounded-x"
          v-for="(data, index) in electronics"
          :key="index"
        >
          <img class="card-img-top rounded-x" :src="data.url" alt="" />
          <div class="card-body p-1 py-2">
            <h6 class="card-title m-0">{{ data.name }}</h6>

            <h5 class="card-text d-block">
              ₦{{ formatCurrency(data.price) }}
              <i
                v-if="data.price"
                class="fa fa-check-circle text-primary"
                aria-hidden="true"
              ></i>
            </h5>
            <small class="card-text d-block"> {{ data.desscription }}</small>
          </div>
          <div
            class="btn btn-sm btn-outline-warning p-1 shadow w-100"
            @click="addItem(data)"
          >
            Add to Cart <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/auth-header'
import Loader from './Loader'
import electronics from './electronics.json'
export default {
  middleware: 'auth',
  components: {
    Header,
    Loader,
  },
  data() {
    return {
      passwordCheckData: false,
      info: {
        name: 'Dashboard',
        short_name: 'Mr. Tester',
        details: 'Tester@gmail.com, Computer Science, Applied Science',
        icon: 'fa-pencil',
        dashboard: true,
      },
      amount: '',
      loader: false,
      appliedfirm: {},
      firms: {},
      electronics: electronics,
    }
  },
  created() {
    const wallet = localStorage.getItem('wallet')
    const email = localStorage.getItem('email')
    const dept = localStorage.getItem('dept')
    const sch = localStorage.getItem('sch')
    this.info.short_name = `₦${this.formatCurrency(wallet) || 0}.00`
    this.info.details = `${email}, ${dept ? dept + ',' : ''} ${
      sch ? sch + ',' : ''
    }`
  },
  mounted() {
    this.getAll()
  },
  methods: {
    formatCurrency(price) {
      let dollarUSLocale = Intl.NumberFormat('en-US')
      let newCash = dollarUSLocale.format(price)
      return newCash
    },
    getAll() {
      const token = localStorage.getItem('token')
      const user_id = localStorage.getItem('user_id')

      this.loader = true
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      this.$axios
        .get('/siwesfirm', config)
        .then((result) => {
          this.loader = false
          this.firms = result.data.result
        })
        .catch((err) => {
          this.loader = false
        })
      this.$axios
        .get(`/appliedfirm/${user_id}`, config)
        .then((result) => {
          this.loader = false
          this.appliedfirm = result.data.result
        })
        .catch((err) => {
          this.loader = false
        })
    },

    apply(data) {
      const token = localStorage.getItem('token')
      const user_id = localStorage.getItem('user_id')
      const details = {
        siwes_firm_id: data._id,
        user_id,
        ...data,
      }
      this.loader = true
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      this.$axios
        .post('/appliedfirm', details, config)
        .then((result) => {
          this.loader = false
          this.appliedfirm = result.data.result
        })
        .catch((err) => {
          this.loader = false
        })
      this.getAll()
    },
    addItem(data) {
      const items = localStorage.setItem(`${data.name}`, `${data.price}`)
      location.reload()
    },
    passwordCheck(data) {
      if (data == 'show') {
        this.passwordCheckData = !this.passwordCheckData
        this.$refs.password.type = 'text'
      } else {
        this.passwordCheckData = !this.passwordCheckData
        this.$refs.password.type = 'password'
      }
    },
  },
}
</script>
<style>
.card-img,
.card-img-top,
.card-img-bottom {
  height: 100px;
}
.recomended,
.applied {
  display: flex;
  overflow-x: scroll !important;
  width: 100%;
}

.card {
  display: inline-block;
  min-width: 50% !important;
}

.btn-outline-warning {
  color: var(--orange) !important;
  border-color: var(--orange) !important;
  background: white !important;
}
.btn-outline-warning:hover,
.btn-outline-warning:focus {
  color: var(--white) !important;
  border-color: var(--orange) !important;
  background: var(--orange) !important;
}
</style>
