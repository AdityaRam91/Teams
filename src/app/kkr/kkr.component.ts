import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-kkr',
  templateUrl: './kkr.component.html',
  styleUrl: './kkr.component.css'
})
export class KkrComponent {
  constructor(public sharedserviceobject:ShareService){}
can_child_activate:boolean=false;
radiovalue:string='';
// update()
// {
//   this.can_child_activate=this.radiovalue==='true';
//   this.sharedserviceobject.update_can_activate_child(this.can_child_activate);
// }
}
