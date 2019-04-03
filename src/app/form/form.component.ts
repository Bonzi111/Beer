import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { DataDetailService } from '../data-detail.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

public length:number;
public db_data;
public new_details;
public new_category;
public key_value;
public values;
public object={"AV":'',"About":'',"BN":'',"FG":'',"IBUS":'',"SRM":'',"cat_id":'',"company":'',"company_id":'',"established":'',"features":'',"image":'',"website":''}

  rForm: FormGroup;
  dbData;

  constructor(fb: FormBuilder,private SignupService:SignupService, private data_obj:DataDetailService){
    this.rForm = fb.group({
      'cat_id': [null, Validators.required],
      'company': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'IBUS': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'features': [null,[Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'AV': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'FG': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'SRM': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'BN': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'about': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'website': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'established': [null, [Validators.required,Validators.pattern("^[A-Za-z]+$")]],
      'image':('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYCLRKfnjfA81AO0Bo3hBeeyDBRXHM_lC7ebmvo6APIoEEElU8w'),
    });


  }

  ngOnInit() {
    this.data_obj.getData().subscribe((data)=>{
      this.db_data=data;
      this.key_value=Object.keys(this.db_data);
      this.values=Object.values(this.db_data);
      this.new_category = this.values[0];
      this.new_details = this.values[1];

      console.log("length of new details",this.new_details.length);
      this.length=this.new_details.length;
      console.log("length",this.length);

      window.addEventListener('online', (event) => {
        alert("get LocalS")
        this.dbData = JSON.parse(localStorage.getItem('db_data'));
        this.onSubmit();
      })

    
  });

  }

  get f() {
    return this.rForm.controls;
  }

  onSubmit() {

    if(this.rForm.value.cat_id === 'Classic English-Style Pale Ale')
    {
      this.rForm.value.cat_id= 1;
    }
    else if(this.rForm.value.cat_id === 'Ordinary Bitter')
    {
      this.rForm.value.cat_id= 2;
    }
    else if(this.rForm.value.cat_id === 'Scotch Ale')
    {
      this.rForm.value.cat_id= 3;
    }

    this.rForm.value.company_id=this.length + 1;

    this.object["AV"]=this.rForm.value.AV;
    this.object["BN"]=this.rForm.value.BN;
    this.object["FG"]=this.rForm.value.FG;
    this.object["IBUS"]=this.rForm.value.IBUS;
    this.object["SRM"]=this.rForm.value.SRM;
    this.object["About"]=this.rForm.value.about;
    this.object["cat_id"]=this.rForm.value.cat_id;
    this.object["company"]=this.rForm.value.company;

    this.object["company_id"]=this.rForm.value.company_id;
    
    this.object["established"]=this.rForm.value.established;
    this.object["features"]=this.rForm.value.features;
    this.object["image"]=this.rForm.value.image;
    this.object["website"]=this.rForm.value.website;
    this.db_data['company_details'].push(this.object);

    //console.log(this.db_data);
    if(navigator.onLine) {

    this.SignupService.addPost(this.db_data || this.dbData)
    .subscribe(

      response => alert("submit in response"),
      error => console.log('Error',error)

    );
    console.log(this.rForm.value); 
    }
     else {

      localStorage.setItem('db_data', JSON.stringify(this.db_data));
      alert('set LocalS!');

    }
    
  }
}


