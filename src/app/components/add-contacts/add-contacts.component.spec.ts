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
    component.invalidEmail = false;
    component.ngOnInit();

    component.contactForm.setValue({
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
    component.invalidPhone = false;
    component.ngOnInit();

    component.contactForm.setValue({
      firstName: 'Brad',
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
    component.invalidZipCode = false;
    component.ngOnInit();

    component.contactForm.setValue({
      firstName: 'Brad',
      lastName: 'Floyd',
      company: 'Acme',
      email: 'john@example',
      phone: '1234567afads',
      city: 'Detroit',
      state: 'MI',
      zipCode: 'afdsf'
    });

    component.onSubmit();
    expect(component.invalidZipCode).toBeTruthy();
  });

  it('should display "invalid characters" error when special characters are entered in either firstname or lastname', () => {
    component.invalidChars = false;
    component.ngOnInit();

    component.contactForm.setValue({
      firstName: 'Brad#$#@',
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
    component.isValid = false;
    component.ngOnInit();

    component.contactForm.setValue({
      firstName: 'Brad',
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
