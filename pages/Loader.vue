<template>
  <div class="loader">
    <div class="show">
      <div class="spinner-border text-white" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
.loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #4169e1 !important;
  z-index: 10000 !important;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100vh !important;
}

.show {
  flex: auto;
}
.spinner-border {
  width: 3.5rem !important;
  height: 3.5rem !important;
}
</style>
