<template>
  <div  class=" pb-3">
  <Header v-if="$route.path=='/'" class="d-none"/>
   <Nuxt/> 
  </div>
</template>

<script>
import Footer from "./footer";
import Header from "./header";
export default {
  components:{
    Footer,
    Header,
  },
data() {
  return {
    sidebar:false,

  }
},
methods: {

}
}
</script>

<style >
a,a:hover,a:focus{
  text-decoration: none !important;
}
.fa-arrow-left:before {
font-size: 18px !important;
}


 #sidebar{
  animation-name: myanimation;
  animation-duration: 0.4s !important;
  animation-fill-mode:backwards ;
  animation-timing-function: ease;
  animation-iteration-count: 1;
}
@keyframes myanimation{

  0%{
      left: -300px;
   }
  100%{
      left: 0px;
      }

}
.fa-bars{
  font-size:20px !important;
  color:rgb(43, 42, 42) !important;
}
#sidebar{
  z-index:4;
  width:265px;
  background: var(--primary);
  position:fixed;
  height:100vh;
  left:0;
  top:0;
  /* display: none; */
}
.overlay{
  background: rgba(0,0,0,0.7);
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:100vh;
  position:fixed;
  z-index:2;


}
.logo{
width:100px;
height:100px;
border-radius:50%;
border:3px solid rgba(241, 236, 236, 0.856);
}

</style>
