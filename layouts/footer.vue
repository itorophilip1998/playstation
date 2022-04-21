<template>
  <div>
   <!-- ======= Footer ======= -->
  <footer id="footer">
     <ul class="ul pl-1  text-center w-100 m-0 border-top bg-white ">
       <li  v-for="(list,index) in list1" :key="index" @click="$router.push(list.url) "
       :class="`${list.url==$route.path ? 'li-hover':''}`">
         <i :class="`i  text-${list.url==$route.path ? 'primary i-hover':'muted'} ${list.icon} `"></i>
         </li>
     </ul>
  </footer>
  <!-- End Footer -->
  </div>
</template>
<script>
export default {
  data() {
    return {
        list1: [
          {
           name:'Home',
           url:'/',
           icon:'fa fa-home',

         },
         {
           name:'Dashboard',
           url:'/dashboard',
           icon:'fa fa-dashboard',

         },
        
           {
           name:'Logout',
           url:'/login',
           icon:'fa fa-sign-out ',
         },

      ]
    }
  },
   

}
</script>
<style >
footer{
  position:fixed;
   bottom:0px !important;
  z-index:2 !important;
  width: 100% !important;
}
.ul{
  display:flex;
  z-index: 2;
  /* position:absolute !important; */
}

.ul>li{
  display:inline-block;
  margin:auto !important;
  /* font-size: 20px !important; */
  color:grey !important;
  padding:8px 20px !important;

}
ul>li:hover,.li-hover{
  border-top:2px solid var(--success);
  border-radius: 4px;
  color:var(--success) !important;

}
ul>li:hover .i,.i:hover,.i-hover{
  animation:rotator .7s  ease-in-out;
 }
@keyframes rotator{
 from{
  transform:rotate(0deg);
 }
 to{
  transform:rotate(360deg);
 }

}

.i{
  font-size: 26px !important;

 }

</style>

