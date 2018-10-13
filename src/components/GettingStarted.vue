<template>
  <q-layout ref="layout">
    <div class="getting-started-page fullscreen">
      <div class="shadow-background-overlay fullscreen">
        <div class="layout-padding">
          <h4 class="night-life-primary-yellow">Lets get started</h4>
          <div class="get-started-text">
            <h5 class="white-text one-hundred-weight">Lorem ipsum dolor sit met,
              consectetur adipiscing elit.
            </h5>
          </div>

          <br/><br/>

          <h5 class="white-text one-hundred-weight uppercase">Choose an activity
          </h5>

          <q-carousel infinite dots class="text-white carousel">
            <div slot="slide" class="text-center">
              <q-btn class ="get-started-btn" big v-on:click="partyAtClub()">
                <div class="col-xs-6">
                  <img src="../statics/images/party-activity.svg" class="full-width"/>
                </div>
                <div class="col-xs-6">
                  <h6 class="white-text one-hundred-weight uppercase">
                    Party a night a club.
                  </h6>
                </div>
              </q-btn>
            </div>
            <div slot="slide" class="text-center">
              <q-btn class ="get-started-btn" big v-on:click="drinkBeer()">
                <div class="col-xs-6">
                  <img src="../statics/images/pub-activity.svg" class="full-width"/>
                </div>
                <div class="col-xs-6">
                  <h6 class="white-text one-hundred-weight uppercase">
                    Drink at a bar or pub
                  </h6>
                </div>
              </q-btn>
            </div>
            <div slot="slide" class="text-center">
              <q-btn class ="get-started-btn" big v-on:click="eatFood()">
                <div class="col-xs-6">
                  <img src="../statics/images/restaurant-activity.svg" class="full-width"/>
                </div>
                <div class="col-xs-6">
                  <h6 class="white-text one-hundred-weight uppercase">
                    Eat at a restaurant
                  </h6>
                </div>
              </q-btn>
            </div>
          </q-carousel>
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
    props: ['auth', 'authenticated'],
    data () {
      return {}
    },
    methods: {
      partyAtClub: function () {
        this.$store.state.activityChoice = 'party'
        this.$router.push('/night-life')
      },
      drinkBeer: function () {
        this.$store.state.activityChoice = 'drink-beer'
        this.$router.push('/night-life')
      },
      eatFood: function () {
        this.$store.state.activityChoice = 'eat-food'
        this.$router.push('/avatar-setup')
      }
    },
    created () {
      //      console.log(this.auth.getUser().email)
      //      this.$store.state.user.userEmail = this.auth.getUser().email
      //      this.$store.state.user.userFirstName = this.auth.getUser().given_name
      //      this.$store.state.user.userLastName = this.auth.getUser().family_name
      //      this.$store.state.user.userPicture = this.auth.getUser().picture
      //      this.$store.state.user.userGender = this.auth.getUser().gender
      let userProfile = {
        email: this.auth.getUser().email,
        firstName: this.auth.getUser().given_name,
        lastName: this.auth.getUser().family_name,
        picture: this.auth.getUser().picture,
        gender: this.auth.getUser().gender
      }
      this.$store.dispatch('setUser', userProfile)
    }
  }
</script>

<style>
  .getting-started-page {
    background-image: url("../statics/images/explorer.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: auto;
    width: 100%;
    background-position: center;

  }

  .getting-started-page .get-started-btn {
    padding: 15px;
    border-radius: 25px;
    margin-top: -20px;
    background-color: #1C1C1C;
    border: solid 1px white;
  }




  .getting-started-page .q-carousel-toolbar i{
    color: #E2B81D;
  }










</style>
