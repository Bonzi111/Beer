import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataDetailService } from '../data-detail.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public new_cat;
  public new_company_details;
  public keys;
  public value;
  constructor(private obj: DataDetailService) { }

  ngOnInit() {
    this.new_cat = this.obj.cat;
    this.keys = Object.keys(this.new_cat[0]);
    this.new_company_details = this.obj.company_details;
  }
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.value = idAttr.nodeValue;
    console.log(this.value);
  }
}
