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

  isEyeClose:boolean=true;
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
      if(this.loginForm.value.email === key.email && this.loginForm.value.password === window.atob(key.password))
      {
        console.log("LogIn Successful");
        // localStorage.setItem('isLoggedIn', "true");
        // localStorage.setItem('token',this.loginForm.value.email)
      }
    

    });

  }

  showPassword(){
    if(this.isEyeClose){
      this.isEyeClose=false;
    }
    else{
      this.isEyeClose=true;
    }
  }

}

