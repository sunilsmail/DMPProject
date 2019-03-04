import { FormGroup, FormBuilder, Validators, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormValidateAndSubmit } from '../shared/validate.form';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FormComponent, multi: true }
  ]
})
export class FormComponent extends FormValidateAndSubmit {

  formGroup: FormGroup;

  submitForm(): void {
    throw new Error("Method not implemented.");
  }


  items: any = [{ "id": 1, "name": "Role Mapping", "link": "admin-rolemap" }, { "id": 2, "name": "Skill", "link": "admin_add" }, { "id": 3, "name": "Project", "link": "admin-projects" }, { "id": 4, "name": "Location", "link": "admin-location" }, { "id": 5, "name": "Stream", "link": "admin-stream" }, { "id": 6, "name": "Domain", "link": "admin-domain" }, { "id": 7, "name": "Roles", "link": "admin-role" }, { "id": 8, "name": "OpCo", "link": "admin-opco" }, { "id": 9, "name": "Demand Type", "link": "admin-demandtype" }]
  constructor(private fb: FormBuilder) {
    super();
  }

  onClick(page: string) {
    // console.log(page);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      'name': ['', Validators.required]
    })
  }

  validateAndSubmit() {
    super.validateAndSubmit();
  }
}