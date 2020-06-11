import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent implements OnInit {
  contactForm: FormGroup;

  isValid = false;
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
        Validators.minLength(10),
      ]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
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

    if (this.contactForm.valid && !this.emptyFields) {
      this.isValid = true;

      this.invalidEmail = false;
      this.invalidPhone = false;
      this.invalidZipCode = false;

      console.log(this.contactForm.value);
      return;
    }

    this.isValid = false;
    this.invalidEmail = this.email.errors?.email || false;
    this.invalidPhone = this.phone.errors?.minlength ? true : false;
    this.invalidZipCode = this.zipCode.errors?.minlength ? true : false;
  }
}
