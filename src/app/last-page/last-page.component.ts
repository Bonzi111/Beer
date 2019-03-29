import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';


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
  constructor(private new_obj:DataDetailService) {
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
  }

}
