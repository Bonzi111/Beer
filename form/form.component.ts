import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
private check :boolean;
  constructor() {
  }
  reactiveForm = new FormGroup({
    AV: new FormControl('', [Validators.required,Validators.min(0), Validators.max(100)]),
    about:new FormControl('',Validators.required),
    BN: new FormControl('',Validators.required),
    FG: new FormControl('', [Validators.required,Validators.min(0), Validators.max(100)]),
    IBUS: new FormControl('', [Validators.required,Validators.min(0), Validators.max(100)]),
    SRM:new FormControl('', [Validators.required,Validators.min(0), Validators.max(100)]),
    cat_id: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    established:new FormControl('',Validators.required),
    features: new FormControl('', Validators.required),
    website:new FormControl('',Validators.required),   
  });
  hide(err){
    this.check =true;
    if(){
      
    }
  }
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
