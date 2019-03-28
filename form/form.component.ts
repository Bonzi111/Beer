import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]),
    SRM_max: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    SRM_min: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    FG_max: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    FG_min: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    AV_max: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    AV_min: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),

    beer_style: new FormControl('', Validators.required),
    beer_company: new FormControl('', Validators.required),
    features: new FormControl('', Validators.required),
    IBUS: new FormControl('', Validators.required),
    BN: new FormControl('', Validators.required),
   
  });
  ngOnInit() {
  }
  get f() {
    return this.reactiveForm.controls;
  }
  onSubmit() {
    alert("Submitted")
    console.warn(this.reactiveForm.value);
  }

}
