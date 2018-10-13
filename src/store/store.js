import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    googlePlaceKey: 'AIzaSyDyDOCDIZzgW5PWBbJjP2J-N4waZusJanU',
    activityChoice: '',
    accessToken: '',
    user: {
      userEmail: '',
      userFirstName: '',
      userLastName: '',
      userPicture: '',
      userGender: ''
    },
    place: {
      currentPlaceID: '',
      placeDetails: {},
      placePhotos: [],
      placeReviews: [],
      openClose: ''
    },
    chatBG: '',
    placeName: ''
  },
  actions: {
    setUser ({ commit }, profile) {
      commit('setUser', profile)
    }
  },
  mutations: {
    setUser (state, profile) {
      console.log(profile)
      state.user.userEmail = profile.email
      state.user.userFirstName = profile.firstName
      state.user.userLastName = profile.lastName
      state.user.userPicture = profile.picture
      state.user.userGender = profile.gender
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
})
