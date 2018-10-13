<template>
  <div class="container">
    <q-layout ref="layout">
      <h3>Vue js 2 and Firebase Sample Application</h3>
      <h4>List of Books</h4>

      <form v-on:submit.prevent="addBook">
        <label for="bookTitle">Title</label>
        <input id="bookTitle" type="text" v-model="newBook.title">

        <label for="bookAuthor">Book Author</label>
        <input id="bookAuthor" type="text" v-model="newBook.author">

        <label for="bookUrl">URL</label>
        <input id="bookUrl" type="text" v-model="newBook.url">
        <input type="submit" class="button" value="Add Book"/>
      </form>



      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books">
            <td>
              <a v-bind:href="book.url"> {{book.title}}</a>
            </td>
            <td>
              {{book.author}}
            </td>

            <td>
              <span v-on:click="removeBook(book)">Delete</span>
            </td>
          </tr>
        </tbody>

      </table>

    </q-layout>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  let config = {
    apiKey: 'AIzaSyBoyrr2bxfKU4UJsrurBjSAT15dTDA8xKU',
    authDomain: 'night-life-49435.firebaseapp.com',
    databaseURL: 'https://night-life-49435.firebaseio.com',
    projectId: 'night-life-49435',
    storageBucket: 'night-life-49435.appspot.com',
    messagingSenderId: '841592077325'
  }
  // Initialization of app
  let app = Firebase.initializeApp(config)
  // Connecting to Database
  let db = app.database()
  // Connecting to database object books
  let booksRef = db.ref('books')

  let storage = app.storage()
  let storageRef = storage.ref('avatars')

  export default {
    firebase: {
      books: booksRef,
      avatars: storageRef
    },
    data () {
      return {
        avatars: '',
        newBook: {
          title: '',
          author: '',
          url: ''
        }
      }
    },
    methods: {
      addBook: function () {
        booksRef.push(this.newBook)
        this.newBook.title = ''
        this.newBook.author = ''
        this.newBook.url = ''
      },
      removeBook: function (book) {
        booksRef.child(book['.key']).remove()
      }
    },
    created () {
      console.log(storageRef.child('male-avatars/avatar-1.svg').getDownloadURL())
    }
  }
</script>

<style>
</style>
