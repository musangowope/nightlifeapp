<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view
      :auth="auth"
      :authenticated="authenticated"
    ></router-view>


    <q-btn
      round
      color="primary"
      @click="logout()"
      class="fixed"
      style="left: 18px; bottom: 18px"
      v-if="authenticated"
    >
      <q-icon name="mail" />
    </q-btn>



    <q-ajax-bar/>
  </div>
</template>

<script>
  import AuthService from './auth/AuthService'

  const auth = new AuthService()
  // arent variable for excessing data and methods
  const { login, logout, authenticated, authNotifier } = auth

  export default {
    name: 'app',
    data () {
      authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
      })
      return {
        auth,
        authenticated
      }
    },
    methods: {
      login,
      logout
    }
  }
</script>

<style>
  @font-face {
    font-family: 'interstateregular';
    src: url('statics/fonts/interstate_extralight_cond-webfont.woff2') format('woff2'),
    url('statics/fonts/interstate_extralight_cond-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'interstateregular', sans-serif;
  }

  .flex-vertical-center {
    display: flex;
    align-items: center;
  }

  .flex-left {
    justify-content: flex-start;
  }

  .layout-padding {
    padding: 1.5rem 1.5rem;
  }
  .capitilze {
    text-transform: capitalize !important;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .italics {
    font-style: italic;
  }

  .text-center{
    text-align: center !important;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .white-text {
    color: #ffffff !important;
  }

  .one-hundred-weight {
    font-weight: 100;
  }

  .two-hundred-weight {
    font-weight: 200;
  }

  .four-hundred-weight {
    font-weight: 400;
  }



  .larger-text {
    font-size: larger;
  }

  .x-larger-text {
    font-size: x-large;
  }

  .night-life-primary-yellow {
    color: #E2B81D;
  }

  .block-padding {
    padding:20px;
  }

  .complete-width {
    width: 100%;
  }

  .night-life-bg-light-blue {
    background-color: #475381 !important;
  }

  .shadow-background-overlay {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#040404+0,000000+74,000000+99&0.42+0,1+75,1+100 */
    background: -moz-linear-gradient(top, rgba(4,4,4,0.42) 0%, rgba(0,0,0,0.99) 74%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 99%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(4,4,4,0.42) 0%,rgba(0,0,0,0.99) 74%,rgba(0,0,0,1) 75%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(4,4,4,0.42) 0%,rgba(0,0,0,0.99) 74%,rgba(0,0,0,1) 75%,rgba(0,0,0,1) 99%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6b040404', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
  }

  .text-smaller {
    font-size: larger;
  }

  .absolute-full, .fullscreen {
    overflow: auto;
  }

  .z-index {
    z-index: 10;
  }

  .night-life-field {
    padding: 10px;
    border-radius: 20px;
    background-color: #475381 !important;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.29);
    font-weight: 100;
    /*color: #0c0c0c;*/
  }


</style>
