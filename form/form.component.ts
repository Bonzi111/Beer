import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rForm: FormGroup;
 

  constructor(fb: FormBuilder){
    this.rForm = fb.group({
      'category': [null, Validators.required],
      'comapny': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'IBUS': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'features': [null,[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'AV': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'FG': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'SRM': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'BN': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'about': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'website': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'established': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]]
    });
  }
  ngOnInit(){

  }
}
