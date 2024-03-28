import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-rcb',
  templateUrl: './rcb.component.html',
  styleUrl: './rcb.component.css'
})
export class RcbComponent  {
  rcbcheckboxvalue:boolean=false;
  constructor(public service:ShareService){}
}
