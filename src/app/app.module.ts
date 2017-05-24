import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
   apiKey: 'AIzaSyCl7qL09rz5pZWO9GzAYhHiT6b4s1wOmfs',
    authDomain: 'angular4test-ba127.firebaseapp.com',
    databaseURL: 'https://angular4test-ba127.firebaseio.com',
    projectId: 'angular4test-ba127',
    storageBucket: 'angular4test-ba127.appspot.com',
    messagingSenderId: '774022518113'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
