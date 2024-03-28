import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-srh',
  templateUrl: './srh.component.html',
  styleUrl: './srh.component.css'
})
export class SrhComponent {
  constructor(public service:ShareService){}
  srhcheckboxvalue:boolean=false;
}
