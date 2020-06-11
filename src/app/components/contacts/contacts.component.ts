import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  name = 'Browning Graham';
  company = 'MELABACOR';
  email = 'browninggraham@melabacor.com';
  phone = '+1 (906) 585-2525';
  address = '920 Hastings Street, Roosevelt, Puerto Rico, 5573'

  constructor() { }

  ngOnInit(): void {
  }

}
