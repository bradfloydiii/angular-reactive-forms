import { ContactsComponent } from './contacts.component';
import { tick } from '@angular/core/testing';

describe('ContactsComponent', () => {
  const contacts = [
    {
      _id: '5de91c00d6b4d04e96ef44da',
      index: 1,
      firstName: 'Mcmahon',
      lastName: 'Fulton',
      company: 'ILLUMITY',
      email: 'mcmahonfulton@illumity.com',
      phone: '+1 (814) 489-3373',
      address: '676 Bainbridge Street, Abrams, Mississippi, 2652',
    },
  ];

  let component: ContactsComponent;
  const mockContactService = jasmine.createSpyObj('ContactService', {
    http: {},
    getContacts: {
      subscribe: () => {
        return contacts;
      },
    },
  });

  beforeEach(() => {
    component = new ContactsComponent(mockContactService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the contactService onLoad of component', () => {
    component.ngOnInit();
    expect(mockContactService.getContacts).toHaveBeenCalled();
  });
});
