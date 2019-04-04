import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';
import {SignupService} from '../signup.service';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {

  public url;
  public url_list;
  public id;
  public new_details;
  public new_category;
  public key_value;
  public values;
  public db_data;
  public like_data= {email:"", id:""};
  public like_db;
  public like_values;
  public like_keys;
  public flag:boolean;
  constructor(private new_obj:DataDetailService, private SignupService:SignupService) {

    this.new_obj.getData().subscribe((data)=>{
      this.db_data=data;
      this.key_value=Object.keys(this.db_data);
      this.values=Object.values(this.db_data);
      this.new_details = this.values[1];
      
    });
   }

  ngOnInit() {
   
    this.url=window.location.href;
    this.url_list=this.url.split('beer-features/')
    this.id=this.url_list[1];
    console.log(localStorage.getItem('token_value'));
    this.like_data['email']=localStorage.getItem('token_value');
    this.like_data['id']=this.id;

    this.SignupService.get_like().subscribe((data) => {
      this.like_db = data;

      console.log("like_db",this.like_db);
      this.like_values = Object.values(this.like_db);
      console.log(this.like_values);
      this.like_keys = Object.keys(this.like_db);
      console.log(this.like_values, "here");
    });

  }

  like(){
    this.like_values.forEach(element => {
      if(element.email==localStorage.getItem('token_value') && element.id==this.id){
        this.flag=true
      }
      else{
        this.flag=false;
      }
    });
    if(this.flag==false)
    {
      this.SignupService.likePost(this.like_data)
      .subscribe((res)=>{
        this.SignupService.get_like().subscribe((data) => {
          this.like_db = data;
          console.log("like_db",this.like_db);
          this.like_values = Object.values(this.like_db);
          console.log(this.like_values);
          this.like_keys = Object.keys(this.like_db);
          console.log(this.like_values, "here");
        });
      })
      alert('Item added to cart');
      this.flag=true;
    }
    else{
      alert('Item already liked');
    }

  }



}
