import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app3';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    var firebaseConfig = {
      apiKey: "AIzaSyBWQJM9vqvW5zgH8l6WxOIH_mrA6ewdNbw",
      authDomain: "carlosdv93-jta-cloneinsta.firebaseapp.com",
      databaseURL: "https://carlosdv93-jta-cloneinsta.firebaseio.com",
      projectId: "carlosdv93-jta-cloneinsta",
      storageBucket: "",
      messagingSenderId: "360076863823",
      appId: "1:360076863823:web:38b23bc3ab438138"
    };

    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    var database = firebase.database();
    console.log("DATABASE INICIADO: ", database);

  }
}
