import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: IContact[];
  contactsUrl = 'http://demo5838836.mockable.io/contact';

  constructor(private http: HttpClient) {}

  // getContacts: Observable<IContact[]> {
  //   return this.http.get<IContact[]>(this.contactsUrl);
  // }

}
