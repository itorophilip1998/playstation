<template>
  <div>
    <header>
      <!-- Header Start -->
      <div class="header-area header-transparrent">
        <div class="headder-top header-sticky">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-2">
                <!-- Logo -->
                <div class="logo">
                  <nuxt-link to="/"
                    ><img src="~assets/images/logo.jpg" class="logo"
                  /></nuxt-link>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="menu-wrapper">
                  <!-- Main-menu -->
                  <div class="main-menu">
                    <nav class="d-none d-lg-block">
                      <ul id="navigation">
                        <li><nuxt-link to="/">Home</nuxt-link></li>
                        <li>
                          <nuxt-link to="/dashboard">Dashboard </nuxt-link>
                        </li>
                        <li><nuxt-link to="/document">Document </nuxt-link></li>
                        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                      </ul>
                    </nav>
                  </div>
                  <!-- Header-btn -->
                  <div class="header-btn d-none f-right d-lg-block">
                    <nuxt-link to="/signup" class="btn head-btn1"
                      >Register</nuxt-link
                    >
                    <nuxt-link to="/login" class="btn head-btn2"
                      >Login</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
    </header>
  </div>
</template>
 


<style>
.logo {
  width: 50px !important;
  height: 50px !important;
}
</style>
