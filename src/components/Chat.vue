<template>
  <div class="chat-page" :style='{ backgroundImage: "url(" + this.$store.state.chatBG + ")", }'>
      <!-- Header -->
      <q-toolbar slot="header" class="chat-header">
        <div class="blur-filter"></div>
        <router-link to="/place-details">
          <q-btn flat class="z-index">
            <q-icon name="fa-long-arrow-left" class="z-index" />
          </q-btn>
        </router-link>

        <q-toolbar-title class="z-index">
          Hangspot Chit Chat
        </q-toolbar-title>
      </q-toolbar>

    <div class="shadow-background-overlay fullscreen">
      <div class="layout-padding" style="max-width: 500px;">
      </div>



      <div  v-for="chat in chats" class="chat-container" >
        <q-chat-message
          class="animated fadein"
          :name="chat.firstName + ' ' + chat.lastName"
          :avatar="chat.profileURL"
          :text="[chat.message]"
          stamp="4 minutes ago"
        />


      </div>



      <!--<q-chat-message-->
        <!--v-for="chat in chats"-->
        <!--:key="chat"-->
        <!--:label="chat.date"-->
        <!--:text-color="white"-->
        <!--:bg-color="black"-->
        <!--:name="chat.firstName"-->
        <!--:avatar="chat.profileURL"-->
        <!--:text="chat.message"-->
      <!--/>-->

        <q-spinner-dots size="2rem" />
        </q-chat-message>

        <q-input inverted color="amber" v-model="newChat.message" stack-label="Type a message" class="fixed night-life-field complete-width"
                 style="bottom: 0; left: 0"
                 @keyup.enter = "newMessage()"
        />


      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import { FIREBASE_CONFIG } from '../firebase/FirebaseConfig'
  // Initialization of app
  let app = Firebase.initializeApp(FIREBASE_CONFIG)
  // Connecting to Database
  let db = app.database()
  // Connecting to database object books
  let chatRef = db.ref('chitchat')

  import { QChatMessage, QSpinnerDots } from 'quasar'
  export default {
    props: ['auth', 'authenticated'],
    firebase: {
      chats: chatRef
    },
    components: {
      QChatMessage,
      QSpinnerDots
    },
    created () {
      console.log(this.chats)
    },
    data () {
      return {
        newChat: {
          date: '',
          firstName: this.auth.getUser().given_name,
          lastName: this.auth.getUser().family_name,
          message: '',
          profileURL: this.auth.getUser().picture,
          googlePlaceID: this.$store.state.place.currentPlaceID
        }
      }
    },
    methods: {
      newMessage: function () {
        chatRef.push(this.newChat)
        this.newChat.message = ''
      }
    }
  }
</script>

<style>
  .chat-page {
    background-image: url("../statics/images/social-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    overflow-y: auto;
    width: 100%;
    background-position: center;
    height: 100vh;
  }

  .chat-page .chat-header {
    z-index: 2;
    background-color: transparent;
    background-size: cover;
    position: relative;
  }

  .chat-page .blur-filter {
    position: absolute;
    height: 100%;
    width:100%;
    top: 0;
    right: 0;
    z-index: 1;
    filter: blur(10px);
    background-color: rgba(12, 12, 12, 0.56);
  }

  .chat-page .chat-container .q-message-name{
    color: white !important;
  }

</style>
