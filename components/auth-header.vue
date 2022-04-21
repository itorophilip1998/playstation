<template>
  <div>
    <div class="header bg-primary shadow pt-5 p-2">
      <nuxt-link
        to="/document"
        class="btn btn-outline-light shadow btn-sm l-0"
        v-if="info.dashboard && list"
      >
        <small class="badge badge-danger badge-pill">{{ list }}</small>
        <i class="fa fa-cart-plus" aria-hidden="true"></i
      ></nuxt-link>

      <h2 class="text-white text-center">{{ info.short_name }}</h2>

      <p class="text-white text-center infoText">
        {{ info.details }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  data() {
    return {
      wallet: '',
      list: localStorage.length ? localStorage.length - 1 : '',
    }
  },
  methods: {},
}
</script>
<style>
.l-0 {
  position: absolute;
  right: 3px;
  top: 10px;
}
.header {
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  height: 200px;
}
.navbar-brand > .fa {
  position: absolute;
  top: 5px;
  padding: 4px;
}
.name {
  position: absolute;
  top: 180px;
  align-self: center !important;
  background: #fff;
  border-radius: 10px;
  left: 12.5%;
}
.smT {
  font-size: 12px;
}
.w-25 {
  width: 30% !important;
}
.infoText {
  font-size: 13px;
}
</style>
