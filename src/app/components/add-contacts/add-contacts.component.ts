import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cities } from 'src/environments/environment';
import { ICity } from 'src/app/models/cities';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css'],
})
export class AddContactsComponent implements OnInit {
  contactForm: FormGroup;

  cities: Array<ICity> = [];

  isValid = false;
  emptyFields = false;
  invalidEmail = false;
  invalidPhone = false;
  invalidZipCode = false;

  constructor() {
    this.cities = cities;
  }

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
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[0-9]{5}'),
      ]),
    });
  }

  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get zipCode() {
    return this.contactForm.get('zipCode');
  }

  formatPhoneNumber() {
    const demo = '2487335384';
    const a = this.phone.value.substring(0, 3);
    const b = this.phone.value.substring(3, 6);
    const c = this.phone.value.substring(6);
    const phone = `+1 (${a})-${b}-${c}`;
    Object.assign(this.contactForm.value, { phone });
  }

  checkEmptyFields() {
    const formValues: Array<string> = Object.values(this.contactForm.value);
    for (const value of formValues) {
      if (value === '') {
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

      this.formatPhoneNumber();
      console.log(this.contactForm.value);

      this.contactForm.reset();
      return;
    }

    this.isValid = false;
    this.invalidEmail = this.email.errors?.email || false;
    this.invalidPhone =
      this.phone.errors?.minlength || this.phone.errors?.pattern ? true : false;
    this.invalidZipCode =
      this.zipCode.errors?.minlength || this.zipCode.errors?.pattern
        ? true
        : false;
  }
}
