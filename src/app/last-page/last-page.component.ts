import { Component, OnInit } from '@angular/core';
import { DataDetailService } from '../data-detail.service';


@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit {
  public company_data;
  public url;
  public url_list;
  public id;

  constructor(private new_obj:DataDetailService) { }

  ngOnInit() {
    this.company_data=this.new_obj.company_details;
    this.url=window.location.href;
    this.url_list=this.url.split('beer-features/')
    this.id=this.url_list[1];
  }

}
