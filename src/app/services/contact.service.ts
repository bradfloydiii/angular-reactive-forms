import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: IContact[];

  constructor(private http: HttpClient) {}

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${baseUrl}`);
  }

}
