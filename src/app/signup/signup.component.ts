import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  
  constructor(private fb: FormBuilder, private SignupService:SignupService){}

  registrationForm = this.fb.group({
    userName:['shivani',Validators.required],
    email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]   
  });
  
  get values(){
    return this.registrationForm.controls;
  }
  
  onSubmit()
  {
    console.log(this.registrationForm.value)
    this.SignupService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success',response),
      error => console.log('Error',error)
    );
  }


}
