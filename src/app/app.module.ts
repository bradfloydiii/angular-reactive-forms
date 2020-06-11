import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactsComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
