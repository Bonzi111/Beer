import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=[];


  constructor(private fb: FormBuilder, private SignupService:SignupService) { }
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
    password:['',Validators.required]  
  });
  
  get values(){
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.SignupService.getUsers().subscribe((data) => {
      Object.keys(data).forEach((key) => {
      this.user.push(data[key])
    });
    });
    
  }

  onSubmit()
  {
    console.log(this.loginForm.value)
    this.user.forEach((key) => 
    {
      if(this.loginForm.value.email === key.email && this.loginForm.value.password === key.password)
      {
        console.log("LogIn Successful");
      }

    });

  }

  showPassword()
  {
    console.log("eye")
  }

}
