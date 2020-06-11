import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/models/contact';
import { baseUrl } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: IContact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(
      (contacts) => (this.contacts = contacts),
      () => console.error(`Error retrieving contacts from ${baseUrl}`),
      () => console.log(`Retrieved contacts from ${baseUrl}`)
    );
  }
}
