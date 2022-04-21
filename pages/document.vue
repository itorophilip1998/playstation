<template>
  <div>
    <Header :info="info" />
    <Loader v-if="loader" />

    <div class="databox pb-3 ">
      <form class="mt-5 py-2 p-3" @submit.prevent="upload()">
        <div class="alert alert-warning text-center" v-if="total > wallet"   role="alert">
          <small>Insufficient Funds</small>
        </div>
 
              <div class="row" v-for="(item,index) in NewList" :key="index">
                  <p class="col-10 mx-auto">{{item.name}}</p>
              </div>
<hr>
                  <h6 class="col-11 mx-auto">Total Amount: ₦{{formatCurrency(total)}}.00</h6>
              
        <button class="btn-success shadow w-100 mt-3 btn rounded-pill p-2" type="button" @click="paid()">
          Pay Now
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '@/components/auth-header';
import EasyCamera from 'easy-vue-camera';
// import { WebCam } from "vue-web-cam";
import Loader from './Loader'

export default {
  middleware:'auth',

  components:{
    Header,
    'v-easy-camera': EasyCamera,

     Loader,
    //  'vue-web-cam': WebCam,
  },
  data() {
    return {
      firms:[
        'Hopital',
        'School',
        'Innovation Hub',
        'Church',
        'Petrolium Company',
        'Ministry(Government)',
        'Private Company',
      ],
      isSnap:false,
    passwordCheckData:false,
    picture:"",
      info:{
          name:"Purchase",
          short_name:"Purchase Items!",
          details:"This are the list of your purchase",
          icon:"fa-book",
          dashboard:false,
      },
       details:{
    department: "Computer Science Department",
    school: "Applied",
    firm_type: "",
    duration: "",
    user_id: "",
  },
      loader: false,
      err:false,
      NewList:[],
      total:"",
wallet:""
    }
  },
   
  created(){ 
    const newValue=[]
    for (let i = 0; i < localStorage.length; i++)   {
      const name=localStorage.key(i);
      const value=localStorage.getItem(localStorage.key(i));
     this.NewList.push({name:name+" : "+value}) 
     newValue.push(parseInt(value))
  } 
  this.total= eval(newValue.join("+"))
  localStorage.setItem("total",this.total)
    const wallet = localStorage.getItem('wallet')
    this.wallet=wallet
    this.info.short_name = `₦${this.formatCurrency(wallet) || 0}.00`

  },
  methods: {
     formatCurrency(price) {
      let dollarUSLocale = Intl.NumberFormat('en-US')
      let newCash = dollarUSLocale.format(price)
      return newCash
    },
    paid(){ 
      const oldWallet= localStorage.getItem(`wallet`) 
      const total= localStorage.getItem(`total`) 
      const newWallet=oldWallet-total
  const items = localStorage.setItem(`wallet`, newWallet) 
  localStorage.clear()
    this.$router.push("/dashboard")
    },
    upload(){ 
          const token = localStorage.getItem('token')
      this.details.user_id = localStorage.getItem('user_id')

      this.loader = true
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
          this.$axios.post('/upload-document',this.details,config).then((result) => {
          this.loader=false
          localStorage.setItem('dept',result.data.result.department)
          localStorage.setItem('sch',result.data.result.school)
            this.$router.push("/dashboard")
          }).catch((err) => {
          this.loader=false
            this.err=!this.err

          setTimeout(()=>{
            this.err=!this.err
          }, 3000)
            this.err=!this.err

          });
        },
    isSnappFuc(){
            this.isSnap=!this.isSnap;
            console.log(`Clicked and set ${this.isSnap}`)
    },
    output(){
            console.log(`Clicked and set ${this.picture}`)

    },
   passwordCheck(data){
             if (data=="show") {
                 this.passwordCheckData=!this.passwordCheckData;
                 this.$refs.password.type="text"
             }
             else{
                this.passwordCheckData=!this.passwordCheckData;
                this.$refs.password.type="password"

             }
        }
},

}
</script>
<style>
.camera {
  border: 2px dashed var(--success);
  border-radius: 5px;
}
.add {
  display: absolute !important;
  margin-top: -32px;
}
i.fa-eye-slash,
i.fa-eye {
  position: absolute;
  right: 30px;
  margin-top: -32px;
}
</style>
