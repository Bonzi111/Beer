import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';


@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  public new_cat;
  public new_company_details;
  public keys;
  public url;
  public url_list;
  public id;
  public new_details;
  public new_category;
  constructor(private ser_obj: DataDetailService) { }

  ngOnInit() {
    this.new_cat = this.ser_obj.cat;
    this.keys = Object.keys(this.new_cat[0]);
    this.new_company_details = this.ser_obj.company_details;
    this.url=window.location.href;
    this.url_list=this.url.split('beer-details/')
    this.id=this.url_list[1];
    this.new_details=this.ser_obj.company_details;
    this.new_category=this.ser_obj.cat;

  }


}
