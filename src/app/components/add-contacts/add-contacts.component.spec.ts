// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactsComponent } from './add-contacts.component';

describe('AddContactsComponent', () => {
  let component: AddContactsComponent;

  beforeEach(() => {
    component = new AddContactsComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form to be initialized onLoad', () => {
    component.ngOnInit();
    expect(component.firstName).toBeTruthy();
    expect(component.lastName).toBeTruthy();
    expect(component.company).toBeTruthy();
    expect(component.phone).toBeTruthy();
    expect(component.city).toBeTruthy();
    expect(component.state).toBeTruthy();
    expect(component.zipCode).toBeTruthy();
  });

  it('should display fields required error is any field is missing', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      mInitial: null,
      firstName: '',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example.com',
      phone: '1234567890',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.emptyFields).toBeTruthy();
  });

  it('should display "invalid email" error on bad email entry', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      mInitial: 'm',
      firstName: 'Brad',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@',
      phone: '1234567890',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.invalidEmail).toBeTruthy();
  });

  it('should display "invalid phone" error on bad phone entry', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      firstName: 'Brad',
      mInitial: '',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example.com',
      phone: 'afsadfdasf',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.invalidPhone).toBeTruthy();
  });

  it('should display "invalid zip" error on bad zipCode entry', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      firstName: 'Brad',
      mInitial: '',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example',
      phone: '1234567afads',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.invalidPhone).toBeTruthy();
  });

  it('should display "invalid characters" error when special characters are entered in either firstname or lastname', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      firstName: 'Brad#$#@',
      mInitial: '',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example.com',
      phone: '1234567890',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.invalidChars).toBeTruthy();
  });

  it('should display "success" message if form is valid', () => {
    component.emptyFields = false;
    component.ngOnInit();

    component.contactForm.setValue({
      badgeId: '1234567890123456',
      firstName: 'Brad',
      mInitial: 'A',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example',
      phone: '1234567890',
      city: 'Detroit',
      state: 'MI',
      zipCode: '48197'
    });

    component.onSubmit();
    expect(component.isValid).toBeTruthy();
  });
});
