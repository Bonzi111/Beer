import { Component } from '@angular/core';
import {DataDetailService} from '../app/data-detail.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fin';
  public keys;
  public values;
  public emp;
  constructor(private obj:DataDetailService){
    this.obj.getData().subscribe((data)=>{
      this.emp=data;
      this.keys=Object.keys(this.emp);
      this.values=Object.values(this.emp);
      console.log(this.keys);
      console.log(this.values);
      console.log(this.emp);
    });
  }


}
