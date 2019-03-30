import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public db_data;
  public key_value;
  public whole_values;
  public new_category;
  public new_details;
  public card1: string[];
  public to_search;
  public keys;
  public values;
  public new_cat;
  public new_company_details;
  public searchResult = [];
  public substring: any;
  public check: boolean;
  array;
 valueEnter:string;

  constructor(private ser_obj: DataDetailService) {

  }

  ngOnInit() {

    this.ser_obj.getData().subscribe((data) => {
      this.db_data=data;
    });
     
    
  }

  onEnter(value: string) 
  {
    console.log("onEnter value",value);
    this.valueEnter=value; 
    this.searching();
  }

  searchString(string, substring) {
    
    return string.includes(substring);
  }
  
  pushValue(array, value) {
    
      array.push(value)
      this.array = array;
            console.log("Searched Array",array);
  }
  searching()
  { 
  
    this.substring=this.valueEnter;
    console.log("searching",this.substring);
    this.db_data.cat.map((element) => 
    {
      if (this.searchString(element.beerstyle, this.substring) || this.searchString(element.category, this.substring)) {
        console.log("searchresult",this.searchResult)
        console.log("element",element);
      
        this.pushValue(this.searchResult, element)
      }
    })

    this.db_data.company_details.map((element) => 
    {
      if (this.searchString(element.AV, this.substring) || this.searchString(element.About, this.substring) || this.searchString(element.BN, this.substring)
        || this.searchString(element.FG, this.substring) || this.searchString(element.SRM, this.substring)
        || this.searchString(element.company, this.substring) || this.searchString(element.features, this.substring)) {
        this.pushValue(this.searchResult, this.db_data.cat[element.cat_id - 1])
      }
    })
}
}
