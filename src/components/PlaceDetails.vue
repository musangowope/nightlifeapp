<template lang="html">
  <q-layout ref="layout">
    <div class="place-details-page fullscreen" v-bind:style='{ backgroundImage: "url(" + placePhotos[0] + ")", }'>
      <div class="shadow-background-overlay fullscreen">
        <div class="layout-padding">

          <div class="row">
            <div class="col-xs-12 animated fadeInRight">
              <br/>
              <h4 class="text-white horizontal-line uppercase one-hundred-weight text-center">{{placeDetails.name}}</h4>
              <div class="col-xs-12">
                <h5 class="night-life-primary-yellow uppercase">Vote Metrics</h5>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-6">
              <q-list inset-separator>
                <q-collapsible label="<span class='gender'>Males</span> <span class='vote-number'>12 Votes</span>" class="border-line-bottom">
                  <div class="row text-white uppercase">
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-up night-life-primary-yellow" class="vote-icon" /> 12
                    </div>
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-down night-life-primary-yellow" class="vote-icon"/> 12
                    </div>
                  </div>
                </q-collapsible>
                <q-collapsible label="<span class='gender'>Females</span> <span class='vote-number'>12 Votes</span>" class="border-line-bottom">
                  <div class="row text-white uppercase">
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-up night-life-primary-yellow" class="vote-icon" /> 12
                    </div>
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-down night-life-primary-yellow" class="vote-icon"/> 12
                    </div>
                  </div>
                </q-collapsible>
                <q-collapsible label="<span class='gender'>Other</span> <span class='vote-number'>12 Votes</span>" class="border-line-bottom">
                  <div class="row text-white uppercase">
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-up night-life-primary-yellow" class="vote-icon" /> 12
                    </div>
                    <div class="col-xs-6">
                      <q-icon name="fa-thumbs-o-down night-life-primary-yellow" class="vote-icon"/> 12
                    </div>
                  </div>
                </q-collapsible>
              </q-list>
            </div>

            <div class="col-xs-6 text-center">
              <div class="occupancy-container">
                <q-knob
                  v-model="occupancy.occupancyModel"
                  :min="occupancy.occupancyMin"
                  :max="occupancy.occupancyMax"
                  color="amber"
                  track-color="white"
                  size="100%"
                ></q-knob>
              </div>
                <h5 class="text-white uppercase">Present Occupancy</h5>

            </div>
          </div>

          <q-tabs inverted color="amber" align="justify">
            <q-tab default name="address" slot="title"  label="Information" />
            <q-tab name="review" slot="title" label="Reviews" />
            <q-tab name="gallery" slot="title" label="Gallery" />

            <q-tab-pane name="address" class="text-white">
              <div class="row border-line-bottom non-collapsible">
                <div class="col-xs-6">
                  <p class="uppercase text-white">Google Rating</p>
                </div>
                <div class="col-xs-6 text-right">
                  <p>{{placeDetails.rating}}</p>
                </div>
              </div>

              <div class="row border-line-bottom non-collapsible">
                <div class="col-xs-6">
                  <p class="uppercase text-white">Telephone</p>
                </div>
                <div class="col-xs-6 text-right">
                <p>{{placeDetails.international_phone_number}}</p>
                </div>
              </div>
              <q-collapsible :label="openClose"
                             class="border-line-bottom">
                <p v-for="weekday in placeDetails.opening_hours.weekday_text">{{weekday}}</p>
              </q-collapsible>
              <q-collapsible label="Address" class="border-line-bottom">
                <p>{{placeDetails.formatted_address}}</p>
                <gmap-map
                  :center="{lat:10, lng:10}"
                  :zoom="7"
                  :map-type-id="terrain"
                  style="width: 100%; height: 200px"
                ></gmap-map>
              </q-collapsible>



            </q-tab-pane>
            <q-tab-pane name="review" class="text-white">
              <div v-for="placeReview in placeReviews" v-model="placeReviews">
                <div class="row">
                    <div class="col-xs-4">
                      <div class="review-profile" v-bind:style='{ backgroundImage: "url(" + placeReview.profile_photo_url + ")", }'></div>
                      <p style="font-size: smaller">{{placeReview.relative_time_description}}</p>
                    </div>
                    <div class="col-xs-8">
                      <p>{{placeReview.author_name}}</p>
                      <p>{{placeReview.text}}</p>
                    </div>
                </div>
              </div>
            </q-tab-pane>
            <q-tab-pane name="gallery" class="text-white">
              <q-carousel arrows dots fullscreen class="text-white">
                  <div slot="slide"
                       v-for="placePhotoIndex in 5"
                       class="image-carousel"
                       v-bind:style='{ backgroundImage: "url(" + placePhotos[placePhotoIndex] + ")", }'
                        style="height: 100%;
                               width: 100%;
                               background-color: #E2B81D;
                               background-size: cover;
                               background-position: center;">
                </div>

              </q-carousel>
            </q-tab-pane>
          </q-tabs>
        </div>

        <q-fixed-position corner="top-right" :offset="[18, 18]">
          <q-btn class="text-black relative-position chit-chat-btn" @click="goToChat(chatImage,currentPlaceID)">
            <span class="text-white">Chit Chat</span>
            <q-chip floating color="black">1</q-chip>
          </q-btn>
        </q-fixed-position>

      </div>


    </div>
  </q-layout>
</template>

<script>
  export default {
    name: 'auth',
    data () {
      return {
        apiKey: '',
        occupancy: {
          occupancyModel: 30,
          occupancyMin: 0,
          occupancyMax: 100
        },
        currentPlaceID: this.$store.state.place.currentPlaceID,
        placeDetails: this.$store.state.place.placeDetails,
        placePhotos: this.$store.state.place.placePhotos,
        placeReviews: this.$store.state.place.placeReviews,
        openClose: this.$store.state.place.openClose,
        center: '',
        zoom: '',
        'map-type-id': '',
        chatImage: ''
      }
    },
    created () {
      this.apiKey = this.$store.state.googlePlaceKey
      this.currentPlaceID = this.$store.state.place.currentPlaceID
      this.$http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + this.currentPlaceID + '&key=' + this.apiKey).then((response) => {
        console.log(response.data.result)
        this.$store.state.place.placeDetails = response.data.result
        let placePhotoRef = []
        for (let placeIndex = 0; placeIndex < response.data.result.photos.length; ++placeIndex) {
          placePhotoRef[placeIndex] = response.data.result.photos[placeIndex].photo_reference
          this.$store.state.place.placePhotos[placeIndex] = 'https://maps.googleapis.com/maps/api/place/photo?photoreference=' + placePhotoRef[placeIndex] + '&key=' + this.apiKey + '&maxheight=200'
        }
        for (let reviewIndex = 0; reviewIndex < response.data.result.reviews.length; ++reviewIndex) {
          this.$store.state.place.placeReviews[reviewIndex] = response.data.result.reviews[reviewIndex]
          console.log('reviews ' + response.data.result.reviews[reviewIndex])
          console.log(this.$store.state.place.placeDetails.opening_hours.open_now)
          if (this.$store.state.place.placeDetails.opening_hours.open_now === true) {
            this.$store.state.place.openClose = "Trading Hours <span class='show-hide'>Open Now</span>"
          }
          else {
            this.$store.state.place.openClose = "Trading Hours <span class='show-hide'>Closed</span>"
          }
          // Get coordinates of place
          console.log(this.placeDetails.geometry.location.lat + '' + this.placeDetails.geometry.location.lng)
          // Set coordinates for map
          this.center = {
            lat: this.placeDetails.geometry.location.lat,
            lng: this.placeDetails.geometry.location.lng
          }
        }
        this.chatImage = this.placePhotos[2]
      })
    },
    methods: {
      goToChat: function (chatBG) {
        this.$store.state.chatBG = chatBG
        this.$router.push('/chat')
      }
    }
  }
</script>

<style>
  .place-details-page {
    background-image: url("../statics/images/social-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: auto;
    width: 100%;
    background-position: center;
    height: 100vh;
  }

  .place-details-page .horizontal-line {
    position: relative;
    z-index: 3;
    overflow: hidden;
  }

  .place-details-page .horizontal-line:before, .place-details-page .horizontal-line:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: '\a0';
    background-color: #ffffff;
    margin-left: 2%;
  }

  .place-details-page .occupancy-container {
    margin-left: 15px;
  }


  .place-details-page .horizontal-line:before {
    margin-left: -50%;
    text-align: right;
    width: 48%;
  }

  .place-details-page .q-knob-label span {
    color: white;
  }

  .place-details-page .q-knob-label span:after {
    content: '%';
  }

  .place-details-page .q-list {
    border: none;
  }

  .place-details-page .q-list-inset-separator > .q-item-division + .q-item-division:after, .place-details-page .q-item-division + .q-item-inset-separator:after {
    background: transparent;
  }

  .place-details-page .border-line-bottom {
    border-bottom: 1px solid #E2B81D;
  }

  .place-details-page .q-item-label {
    text-transform: uppercase;
    color: white;
    margin-left: -5px;
  }

  .place-details-page .gender {
    color: white;
  }

  .place-details-page .vote-number {
    position: absolute;
    right: 22px;
    color: #E2B81D;
  }

  .place-details-page .vote-icon {
    margin-top: -8px;
  }

  .place-details-page .q-item-icon.transition-generic.q-icon.material-icons {
    position: relative;
    left: 35px;
    color: white;
  }
  .place-details-page .q-tab.column.flex-center.relative-position.text-amber .q-tab-label {
    color: white;
  }

  .place-details-page .q-tab.column.flex-center.relative-position.active.text-amber .q-tab-label{
    color: #E2B81D;
  }

  .place-details-page .review-profile {
    background-color: #E2B81D;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #E2B81D;
    background-size: cover;
    background-position: center;
  }

  .place-details-page .show-hide {
    position: absolute;
    right: 25px;
    top: 11px;
    color: #E2B81D;
  }

  .place-details-page .non-collapsible p {
    position: relative;
    top: 9px;
    margin-left: 12px;
  }

  .place-details-page .image-carousel {
    border-radius: 10%;
    border: 1px solid #E2B81D;
  }

  .place-details-page .q-carousel-toolbar i {
    color: #E2B81D;
  }


  .place-details-page .chit-chat-btn {
    background-color: #2C365E;
  }


</style>

