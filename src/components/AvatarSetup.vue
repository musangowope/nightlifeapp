<template>
  <q-layout ref="layout" class="avatar-setup-layout">
    <div class="avatar-setup-page">
      <div class="layout-padding">
        <q-stepper color="secondary" class="text-center" ref="stepper" alternative-labels vertical>
          <q-step default name="first" title="Name and Gender">

            <div class="row animated fadeIn">
              <div class="col-xs-12 text-center">
                <h5 class="night-life-primary-yellow two-hundred-weight uppercase">Chat Ipsum</h5>
                <h5 class="text-white one-hundred-weight">
                  Lorem ipsum dolor sit met,
                  consectetur adipiscing elit.
                </h5>
              </div>
            </div>

            <br/>

            <div class="row animated fadeIn">
              <div class="col-xs-12">
                <h5 class="text-white one-hundred-weight text-white text-center horizontal-line uppercase">
                  Choose an alias
                </h5>
                <br/>
                <q-input inverted color="amber" v-model="text" stack-label="Input stack label" class="night-life-field"/>

              </div>
            </div>

            <br/>

            <div class="row animated fadeIn">
              <div class="col-xs-12 text-center">
                <h5 class="text-white one-hundred-weight text-center text-white horizontal-line uppercase">
                  Choose an gender
                </h5>

                <br/>
                <q-radio v-model="genderOption" val="male" color="amber" label="Male" />
                <q-radio v-model="genderOption" val="female" color="amber" label="Female" />
                <q-radio v-model="genderOption" val="other" color="amber" label="Other" />
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn color="secondary" class="complete-width night-life-bg-light-blue avatar-button" big @click="$refs.stepper.next()">
                <span class="two-hundred-weight night-life-primary-yellow">Continue</span>
              </q-btn>
            </q-stepper-navigation>
          </q-step>

          <q-step name="fourth" title="Review and Finalize">
            <div class="row animated fadeIn">
              <div class="col-xs-12">
                <h5 class="text-white one-hundred-weight text-center text-white horizontal-line uppercase">
                  Choose an avatar
                </h5>

                <q-select
                  stack-label="Lorem Ipsum"
                  inverted
                  color="amber"
                  separator
                  v-model="currentAvatarGroupOption"
                  :options="avatarGroupOptions"
                  class="night-life-field"
                />
              </div>
            </div>

            <br/>

            <div class="row animated fadeIn">
              <div class="col-xs-12">
                <h6 class="text-white horizontal-line uppercase one-hundred-weight text-center">Current Chosen Avatar</h6>
              </div>
              <div class="col-xs-4 offset-xs-4">
                <div class="avatar-border current-avatar animated pulse">
                  <img v-bind:src="currentAvatar"/>
                </div>
              </div>
            </div>



            <div class="row">
              <div class="col-xs-12">
                <h6 class="text-white horizontal-line uppercase one-hundred-weight text-center">List of Avatars</h6>
              </div>
            </div>

            <div class="avatar-carousel">
              <q-carousel class="text-white">
                <!--Male Avatar-->
                <!--Slot-1-->
                <div slot="slide" v-if="currentAvatarGroupOption === 'male-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/avatar.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/avatar-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/avatar-2.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/boy.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/boy-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div><div class="col-xs-4 animated fadeIn" >
                    <div class="avatar-border avatar-choice animated pulse">
                      <img src="../statics/images/avatars/male-avatars/boy-2.svg" v-on:click="getImageURL($event)"/>
                    </div>
                  </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/boy-3.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/boy-4.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/boy-5.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Slot 2-->
                <div slot="slide" v-if="currentAvatarGroupOption === 'male-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/hindu.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/man.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/man-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/man-2.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/man-3.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/man-4.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div><div class="col-xs-4 animated fadeIn" >
                    <div class="avatar-border avatar-choice animated pulse">
                      <img src="../statics/images/avatars/male-avatars/man-5.svg" v-on:click="getImageURL($event)"/>
                    </div>
                  </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/male-avatars/punk-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>


                  </div>
                </div>


                <!--Female Avatars-->
                <div slot="slide" v-if="currentAvatarGroupOption === 'female-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/hindu-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/punk.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-1.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-2.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-3.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div><div class="col-xs-4 animated fadeIn" >
                    <div class="avatar-border avatar-choice animated pulse">
                      <img src="../statics/images/avatars/female-avatars/woman-4.svg" v-on:click="getImageURL($event)"/>
                    </div>
                  </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-5.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-15.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>


                  </div>
                </div>
                <div slot="slide" v-if="currentAvatarGroupOption === 'female-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-6.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-7.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-8.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-9.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-10.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-11.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div><div class="col-xs-4 animated fadeIn" >
                    <div class="avatar-border avatar-choice animated pulse">
                      <img src="../statics/images/avatars/female-avatars/woman-13.svg" v-on:click="getImageURL($event)"/>
                    </div>
                  </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-14.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-16.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                  </div>
                </div>



                <div slot="slide" v-if="currentAvatarGroupOption === 'female-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-17.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-18.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/female-avatars/woman-19.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                  </div>
                </div>


                <!--Fun Avatars-->
                <div slot="slide" v-if="currentAvatarGroupOption === 'fun-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/catwoman.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/heisenberg.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/hood.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/japanese.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/knight.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/kung-fu.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/napoleon.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/robocop.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/samurai.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div slot="slide" v-if="currentAvatarGroupOption === 'fun-avatars'">
                  <div class="row">
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/santa-claus.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>
                    <div class="col-xs-4 animated fadeIn" >
                      <div class="avatar-border avatar-choice animated pulse">
                        <img src="../statics/images/avatars/costume-avatars/wood-cutter.svg" v-on:click="getImageURL($event)"/>
                      </div>
                    </div>

                  </div>
                </div>

              </q-carousel>
            </div>



            <q-stepper-navigation>
              <q-btn class="avatar-button text-white two-hundred-weight"
                     @click="$refs.stepper.goToStep('first')"big>Back</q-btn>
              <q-btn class="avatar-button text-white two-hundred-weight" big
                     @click="$refs.stepper.goToStep('first')"
              >
                    <span class="night-life-primary-yellow">
                      Create Avata Ipsum
                    </span>
              </q-btn>
            </q-stepper-navigation>
          </q-step>


        </q-stepper>


      </div>
    </div>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        genderOption: '',
        text: '',
        currentAvatar: '/img/avatar.d6a2b9e.svg',
        src: '',
        currentAvatarGroupOption: 'male-avatars',
        avatarGroupOptions: [
          {
            label: 'Male Avatars',
            value: 'male-avatars',
            icon: 'fa-male'
          },
          {
            label: 'Female Avatars',
            value: 'female-avatars',
            icon: 'fa-female'
          },
          {
            label: 'Fun Avatars',
            value: 'fun-avatars',
            icon: 'fa-user'
          }
        ],
        testMaleAvatars: ''
      }
    },
    methods: {
      getImageURL: function (event) {
        var avatarElement = event.currentTarget
        var avatarURL = avatarElement.getAttribute('src')
        console.log(avatarURL)
        this.currentAvatar = avatarURL
      }
    }
  }
</script>

<style>

  .avatar-setup-layout {
    display: flex;
  }

  .avatar-setup-page {
    background-image: url("../statics/images/night-life.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
    width: 100vw;
    background-attachment: fixed;
    min-height: 100vh;
  }

  .avatar-setup-page .avatar-setup-content {
    position: relative;
    z-index: 2;
  }

  .avatar-setup-page .horizontal-line {
    position: relative;
    z-index: 3;
    overflow: hidden;
  }

  .avatar-setup-page .horizontal-line:before, .avatar-setup-page .horizontal-line:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: '\a0';
    background-color: #ffffff;
    margin-left: 2%;
  }

  .avatar-setup-page .horizontal-line:before {
    margin-left: -50%;
    text-align: right;
    width: 48%;
  }


  .avatar-setup-page .avatar-border {
    border: solid 2px #E2B81D;
    border-radius: 50%;
    padding: 5px;
    background-color: #475381;
    /*margin: 8px;*/
    transition: 0.2s ease-in-out;
    /*width: 100%;*/

  }

  .avatar-setup-page .avatar-border.avatar-choice:hover {
    border: 2px #E2B81D solid;
    box-shadow: rgb(226, 184, 29) 0px 2px 15px;
    background-color: white;
  }

  .avatar-setup-page .avatar-border.avatar-choice img{
    width: 100%;
    min-width: 46px;
    min-height: 46px;
  }

  .avatar-setup-page .avatar-border.current-avatar {
    box-shadow: rgb(226, 184, 29) 0px 2px 15px;
    background-color: white;
    border: 2px #E2B81D solid;
  }

  .avatar-setup-page .avatar-border.current-avatar img{
    width: 100%;
    min-width: 67px;
    min-height: 67px;
  }


  i.q-item-icon.q-icon.fa.fa-male:before, i.q-item-icon.q-icon.fa.fa-female:before, i.q-item-icon.q-icon.fa.fa-user:before {
    min-width: 35px;
    min-height: 35px;
    width: 100%;
    background-color: white;
    border-radius: 50%;
  }

  i.q-item-icon.q-icon.fa.fa-male:before {
    content:url("../statics/images/avatars/male-avatars/avatar.svg");
  }

  i.q-item-icon.q-icon.fa.fa-female:before {
    content:url("../statics/images/avatars/female-avatars/woman-1.svg");
  }

  i.q-item-icon.q-icon.fa.fa-user:before {
    content:url("../statics/images/avatars/costume-avatars/catwoman.svg");
  }

  .q-list-link {
    background-color: #475381;
  }

  .q-item.q-item-division {
    background-color: #475381;
    color: white;
    font-weight: 200;
  }

  .avatar-setup-page .q-option-label {
    color: white;
    font-weight: 200;
  }

  .avatar-setup-page .avatar-button {
    background-color: #475381;
    padding-top: 20px;
    padding-bottom: 20px;
  }


  /*stepper styling*/

  /*.q-stepper-vertical .q-stepper-title {*/
    /*color: white;*/
  /*}*/

  /*.q-stepper-tab.step-active .q-stepper-title, .q-stepper-vertical .q-stepper-title {*/
    /*font-weight: 200;*/
    /*font-size: x-large;*/
  /*}*/


  /*.q-stepper-tab.step-active .q-stepper-title {*/
    /*color: #E2B81D;*/
  /*}*/

  /*temporary*/

  .q-stepper {
    box-shadow: none;
    border-radius: 0;
  }

  .q-stepper-vertical .q-stepper-tab {
    display: none;
  }

  .q-stepper-vertical .q-stepper-step-inner {
    padding-left: 3px;
    padding-right: 3px;
  }





</style>
