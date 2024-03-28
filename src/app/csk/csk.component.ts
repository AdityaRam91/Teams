import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-csk',
  templateUrl: './csk.component.html',
  styleUrl: './csk.component.css'
})
export class CskComponent {
  cskcheckboxvalue:boolean=false;
  constructor(public service:ShareService){}
  // checkboxmethodcsk(){
  //   this.service.update_canDeActivate_csk(this.cskcheckboxvalue);
  // }

}
