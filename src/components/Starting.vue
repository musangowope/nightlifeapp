<template>
  <q-layout ref="layout">
    <!-- root node required -->
    <div class="starting-page fullscreen">
      <div class="starting-overlay fullscreen">
        <div class="col-xs-12 text-center">
          <img src="../statics/images/moon-phase-symbol.svg" class="nightlife-logo animated fadeInLeft"/>
        </div>

        <div class="col-xs-12 text-center">
          <h2 class="white-text logo-text animated fadeInRight">City Vibe</h2>
        </div>

        <div class="col-xs-12">
          <q-btn @click="auth.login()" class ="get-started-btn animated fadeInUp text-white" outline big>Explore the City </q-btn>
        </div>
      </div>
      </div>
  </q-layout>
</template>

<script>
  /*
   * Root component
   */
  export default {
    name: 'starting',
    props: ['auth', 'authenticated'],
    data () {
      return {}
    },
    created () {
      if (this.authenticated) {
        this.$router.push('/getting-started')
      }
    }
  }
</script>

<style>



  .starting-page {
    background-image: url("../statics/images/cover.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /*height: 100vh;*/
  }

  .starting-page .starting-overlay {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,191919+17,141414+36,111111+54,141414+69,000000+100&0+0,0.66+17,0.83+36,1+56,1+100 */
    background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(25,25,25,0.66) 17%, rgba(20,20,20,0.83) 36%, rgba(17,17,17,0.98) 54%, rgba(17,17,17,1) 56%, rgba(20,20,20,1) 69%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(25,25,25,0.66) 17%,rgba(20,20,20,0.83) 36%,rgba(17,17,17,0.98) 54%,rgba(17,17,17,1) 56%,rgba(20,20,20,1) 69%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(25,25,25,0.66) 17%,rgba(20,20,20,0.83) 36%,rgba(17,17,17,0.98) 54%,rgba(17,17,17,1) 56%,rgba(20,20,20,1) 69%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
  }

  .starting-page .nightlife-logo {
    width: 60%;
    margin-top: 30px;
  }

  .starting-page .get-started-btn {
    position: absolute;
    bottom: 5%;
    width:90%;
    margin-left: 5%;
    border-radius: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: x-large;
    font-weight: 400;
    border-color: #2C365E;
    background-color: #1C1C1C !important;
  }





</style>
