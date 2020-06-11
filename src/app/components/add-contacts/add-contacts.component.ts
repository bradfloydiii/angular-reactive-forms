import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent implements OnInit {
  contactForm: FormGroup;
  emptyFields = false;
  invalidEmail = false;
  invalidPhone = false;
  invalidZipCode = false;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }
  get lastName() {
    return this.contactForm.get('lastName');
  }
  get company() {
    return this.contactForm.get('company');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get city() {
    return this.contactForm.get('city');
  }
  get state() {
    return this.contactForm.get('state');
  }
  get zipCode() {
    return this.contactForm.get('zipCode');
  }

  checkEmptyFields() {
    const formValues: Array<string> = Object.values(this.contactForm.value);
    for (const value of formValues) {
      if (value === '' || value === '#') {
        return true;
      }
    }
    return false;
  }

  onSubmit() {
    this.emptyFields = this.checkEmptyFields();
    // this.invalidEmail = this.email.errors.email ? this.email.errors.email : false;
    // this.invalidPhone = this.phone.errors.minLength ? this.phone.errors.minLength : false;
    // this.invalidZipCode = this.zipCode.errors.minLength ? this.zipCode.errors.minLength : false;
    console.log(this.checkEmptyFields());
  }
}
