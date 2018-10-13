<template>
  <div class="night-lift-page">
    <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">

      <!-- Navigation -->
      <q-tabs v-model="selectedTab"  slot="navigation" class="navigation-bg">
        <q-tab slot="title" name="user-tab"  icon="fa-user"  @click="$refs.layout.toggleLeft()" />
        <q-tab slot="title" name="party-tab"  icon="fa-moon-o"  replace label="Night Club" />
        <q-tab slot="title" name="pub-tab"  icon="fa-beer"  replace label="Pubs" />
        <q-tab slot="title" name="food-tab" icon="fa-cutlery"  replace label="Restaurants" />
      </q-tabs>

      <!-- sub-routes get injected here: -->
      <div class="search-bg animated fadeIn" v-bind:style='{ backgroundImage: "url(" + backgroundBg + ")", }'>
        <div class="layout-padding">
          <q-search icon="fa-search" class="night-life-search" @keyup.enter="getNightSpots()" v-model="search" v-bind:stack-label="searchStackLabel" v-bind:placeholder="searchPlaceholder"/>
        </div>
      </div>

      <div v-for="(hangSpot, index) in hangSpots" v-model="hangSpots">
        <q-card class="hangspot-card animated fadeIn" v-bind:style='{ backgroundImage: "url(" + hangSpotPhotos[index] + ")", }'>
          <q-card-title class="night-life-primary-yellow">
            <div class="row">
              <div class="col-xs-8">
                <span class="capitalize">{{hangSpot.name}}</span>
              </div>
            </div>
            <p class="capitalize text-white two-hundred-weight">{{hangSpot.formatted_address}}</p>

            <div slot="right" class="row items-center">
              <q-btn color="primary" class="view-information-btn two-hundred-weight" @click="getGoogleID(hangSpot.place_id)">
                View Details
              </q-btn>
            </div>
          </q-card-title>
          <q-card-main>
            <p class="text-white uppercase two-hundred-weight">Occupancy at this hour</p>
            <p class="text-white uppercase two-hundred-weight text-center occupancy-label">{{Math.round((hangSpot.rating/5) * 100)}} %</p>
            <q-progress :percentage="(hangSpot.rating/5) * 100" style="height: 20px; margin-top: -55px" color ="orange-10"/>
            <p class="text-white uppercase two-hundred-weight votes-title text-center">Votes for tonight</p>
          </q-card-main>
          <!--<q-card-separator />-->
          <q-card-actions class="card-actions">
            <router-link to="/avatar-setup">
              <q-btn flat><img src="../statics/images/chat.png" class="hangspot-card-icon"/></q-btn>
            </router-link>
            <div class="voting-group">
              <q-btn flat><span class="text-white x-larger-text two-hundred-weight">12</span></q-btn>
              <q-btn flat><img src="../statics/images/lit-face.png" class="hangspot-card-icon"/></q-btn>
              <q-btn flat><span class="text-white x-larger-text two-hundred-weight">12</span></q-btn>
              <q-btn flat><img src="../statics/images/lame-face.png" class="hangspot-card-icon"/></q-btn>
            </div>


          </q-card-actions>

        </q-card>
      </div>



      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>
            <div class="row">
              <div class="col-xs-4">
                <img class="user-profile complete-width" :src="getProfileData.userPicture "/>
              </div>
              <div class="col-xs-8 flex-vertical-center flex-left">
                <div class="layout-padding">
                  <p>
                    <strong>
                      {{getProfileData.userFirstName}} {{getProfileData.userLastName}}
                    </strong>
                    <br/>
                  Cape Town, South Africa
                  </p>
                </div>
              </div>
            </div>
          </q-list-header>
          <q-side-link item to="/docs">
            <q-item-side icon="school" />
            <q-item-main label="Trending Spots in Cape Town" sublabel="What hang spots are buzzing tonight" />
          </q-side-link>
          <q-side-link item to="/forum">
            <q-item-side icon="record_voice_over" />
            <q-item-main label="Events" sublabel="Upcoming event happening near you" />
          </q-side-link>
          <q-side-link item to="/chat">
            <q-item-side icon="chat" />
            <q-item-main label="Promotional Specials" sublabel="Current pub, club and restuarant specials" />
          </q-side-link>
          <q-side-link item to="#">
            <q-item-side icon="rss feed" />
            <q-item-main label="Logout" sublabel="Log out of your account" @click="auth.logout()"/>
          </q-side-link>
        </q-list>
      </div>
      <!-- Right Side Panel -->
      <div slot="right">
        Right Side of Layout
      </div>

      <router-view />



    </q-layout>
  </div>
</template>

<script>
  /*
   * Root component
   */

  export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
        apiKey: '',
        search: '',
        pageToken: '5',
        searchStackLabel: 'Search for night club',
        searchPlaceholder: 'e.g lorem ipsum',
        backgroundBg: '',
        select: '',
        hangSpots: [],
        currentPhotoReference: '',
        hangSpotPhotos: [],
        selectedTab: '',
        occupancyRates: [],
        selectOptions: [
          {
            label: 'Popular',
            value: 'popular'
          },
          {
            label: 'Trending',
            value: 'trending'
          }
        ]
      }
    },
    created () {
      if (!this.authenticated) {
        this.$router.push('/')
      }
      this.apiKey = this.$store.state.googlePlaceKey
      console.log(this.$store.state.activityChoice)
      var activityChoice = this.$store.state.activityChoice
      if (activityChoice === 'party') {
        this.backgroundBg = require('../statics/images/party.jpg')
        this.selectedTab = 'party-tab'
      }

      if (activityChoice === 'drink-beer') {
        this.backgroundBg = require('../statics/images/beer.jpg')
        this.selectedTab = 'pub-tab'
      }

      if (activityChoice === 'eat-food') {
        this.backgroundBg = require('../statics/images/restaurant.jpg')
        this.selectedTab = 'food-tab'
      }
    },
    computed: {
      getProfileData () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      getGoogleID: function (placeID) {
        this.$store.state.place.currentPlaceID = placeID
        this.$router.push('/place-details')
      },
      getNightSpots: function () {
        let search = this.search
        // Empty Array Values
        this.occupancyRates = []
        this.hangSpots = []
        this.hangSpotPhotos = []

        // Getting hang spot attributes
        this.$http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + search + '&key=' + this.apiKey).then((response) => {
          // console.log(response.data.results)
          var hangSpots = response.data.results
          // console.log(hangSpots.length)
          for (var hangSpotIndex = 0; hangSpotIndex < hangSpots.length; ++hangSpotIndex) {
            this.$set(this.occupancyRates, hangSpotIndex, hangSpots[hangSpotIndex].rating)

            // Get all information
            this.$set(this.hangSpots, hangSpotIndex, hangSpots[hangSpotIndex])
            // console.log(this.hangSpots[hangSpotIndex])
            // Getting photo refs
            // console.log('Photo reference:' + this.hangSpots[hangSpotIndex].photos[0].photo_reference)
            this.currentPhotoReference = this.hangSpots[hangSpotIndex].photos[0].photo_reference

            // Get photos
            this.$set(this.hangSpotPhotos, hangSpotIndex, 'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + this.currentPhotoReference + '&key=' + this.apiKey + '&maxheight=200')
            // console.log('Photo url:' + this.hangSpotPhotos[hangSpotIndex])
          }
        })
      }
    }
  }
</script>

<style>

  .night-lift-page .filter-select {
    border-radius: 20px;
    border: #E2B81D 3px solid;
  }


  .filter-field span {
    color: #E2B81D;
    text-transform: uppercase;
  }


  .night-lift-page .filter-select-header, .night-lift-page .q-tabs-head {
    background-color: transparent;
  }


  .night-lift-page .navigation-bg {
    background-color: #1C1C1C;
    box-shadow: 1px 1px 1px 1.5px rgba(0, 0, 0, 0.48);

  }

  .night-lift-page .search-bg {
    background-color: rgba(44, 54, 94, 0.7);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: multiply;
  }

  .night-lift-page .night-life-search {
    padding: 10px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.29);
  }

  .night-lift-page .q-if:before {
    height: 0;
  }

  .night-lift-page .q-if:after {
    height: 0;
  }


  /*custom bar icons styling start*/


  .night-lift-page .fa-moon-o:before, .night-lift-page .fa-beer:before, .night-lift-page .fa-cutlery:before,
  .night-lift-page .active.icon-and-label .fa-moon-o:before, .night-lift-page .active.icon-and-label .fa-beer:before,
  .night-lift-page .active.icon-and-label .fa-cutlery:before
  {
    height: 35px;
    width: 35px;
  }

  .night-lift-page .fa-moon-o:before {
    content:url("../statics/images/mirror-ballicon.svg");
  }

  .night-lift-page .fa-beer:before {
    content:url("../statics/images/beericon.svg");
  }

  .night-lift-page .fa-cutlery:before {
    content:url("../statics/images/pizzaicon.svg");
  }


  .night-lift-page .router-link-exact-active.router-link-active.active.icon-and-label, .night-lift-page .q-tabs-normal .q-tabs-bar {
    color: #E2B81D;
  }

  .night-lift-page .active.icon-and-label {
    color: #E2B81D;
  }
  .night-lift-page .active.icon-and-label .fa-moon-o:before {
    content: url("../statics/images/mirror-ball-active.svg");
  }

  .night-lift-page .active.icon-and-label .fa-beer:before {
    content: url("../statics/images/beer-active.svg");
  }

  .night-lift-page .active.icon-and-label .fa-cutlery:before {
    content: url("../statics/images/pizza-active.svg");
  }

  /*custom bar icon styling end*/

  .night-lift-page .hangspot-card {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: multiply;
  }

  .night-lift-page .hangspot-card .occupancy-label {
    position: relative;
    top: -17px;
    z-index: 1;
  }



  /*Hang spot styling*/
  .night-lift-page .hangspot-card .view-information-btn {
    margin-right: -16px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #475381 !important;
    position: absolute;
    right: 24px;
    margin-top: -37px;
  }

  .night-lift-page .hangspot-card .hangspot-card-icon {
    width:100%;
    max-width: 35px;
  }

  .night-lift-page .hangspot-card .voting-group {
    position: absolute;
    right: 10px;
  }

  .night-lift-page .hangspot-card .votes-title {
    position: absolute;
    right: 96px;
  }

  .night-lift-page .hangspot-card .card-actions, .night-lift-page .hangspot-card .votes-title {
    margin-top: 20px;
  }

  .user-profile {
    border-radius: 50%;
    border: 5px #E2B81D solid;
  }

</style>


<!--<q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />-->
<!--<q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />-->
<!--<q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />-->
<!--<q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />-->
