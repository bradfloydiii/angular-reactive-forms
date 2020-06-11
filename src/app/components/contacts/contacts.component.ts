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
  name = 'Browning Graham';
  company = 'MELABACOR';
  email = 'browninggraham@melabacor.com';
  phone = '+1 (906) 585-2525';
  address = '920 Hastings Street, Roosevelt, Puerto Rico, 5573';

  contacts: IContact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // TODO add error case
    this.contactService.getContacts().subscribe(
      (contacts) => (this.contacts = contacts),
      () => console.error(`Error retrieving contacts from ${baseUrl}`),
      () => console.log(`Retrieved contacts from ${baseUrl}`)
    );
  }
}
