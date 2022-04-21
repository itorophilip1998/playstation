<template>
  <div>
    <form class="mt-5 pt-5 p-3 bg-white text-center" v-if="path == 'btc'">
      <img
        class="btc mb-3"
        src="data:image/png;base64,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"
      />

      <h5>
        You are funding Via <b class="text-uppercase">{{ path }}</b>
      </h5>
      <input
        type="number"
        v-model="amount"
        class="w-100 mt-4 p-2"
        placeholder="Amount in (₦)" 
      />
      <input
        type="text"
        v-model="wallet"
        class="w-100 mt-4 p-2"
        placeholder="BTC Wallet Address"
      />
      <small v-if="amount">{{ amount * 0.00000001 + ' BTC' }}</small>
      <button
        type="button"
        @click="loadPrice()"
        class="btn-success shadow w-100 mt-4 btn rounded-pill p-2"
      >
        Fund
      </button>
      <div class="alert alert-warning mt-4" role="alert">
        <strong>Note:</strong> The tansaction shall be charged
        <b>₦8000</b> minimium
      </div>
    </form>

    <form class="mt-5 pt-5 p-3 bg-white text-center" v-if="path == 'bank'">
      <img
        class="bank mb-3"
        src="data:image/png;base64,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"
      />

      <h5>
        You are funding Via <b class="text-uppercase">{{ path }}</b>
      </h5>
      <input
        type="text"
        v-model="amount"
        class="w-100 mt-4 p-2"
        placeholder="Amount in (₦)"
      />
      <input
        type="text"
        v-model="wallet"
        class="w-100 mt-4 p-2"
        placeholder="Account Number"
      />
      <button
        type="button"
        @click="loadPrice()"
        class="btn-success shadow w-100 mt-4 btn rounded-pill p-2"
      >
        Fund
      </button>
      <div class="alert alert-warning mt-4" role="alert">
        <strong>Note:</strong> The tansaction shall be charged
        <b>₦100</b> minimium
      </div>
    </form>
  </div>
</template>
<script>
// const Units = require('cryptocurrency-unit-convert')

export default {
  data() {
    return {
      path: 'btc',
      amount: '',
      wallet: '',
    }
  },

  methods: {
    loadPrice() {
      try {
        const wallet = localStorage.getItem('wallet')
        const amount = wallet ? wallet + this.amount : this.amount
        localStorage.setItem('wallet', amount)
        this.$router.push('/dashboard')
        console.log('hello')
      } catch (err) {}
    },
  },
}
</script>
<style>
.btc {
  width: 70px;
}
.bank {
  width: 150px;
}
</style>
