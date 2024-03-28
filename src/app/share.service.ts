import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { SrhComponent } from './srh/srh.component';

@Injectable({
  providedIn: 'root'
})
export class ShareService implements CanActivate,CanDeactivate<SrhComponent>,CanActivateChild{

  constructor() { }
  can_activate:boolean=false;
  can_deactivate:boolean=false;
  can_activate_for_srh:boolean=false;
  can_activate_for_rcb:boolean=false;
  can_deactivate_for_csk:boolean=false;
  can_activate_child:boolean=false;
  // update_canactivate_srh(can_activate_value:boolean)
  // {
  //   this.can_activate = false;
  //   this.can_activate_for_srh=can_activate_value;
  //   this.can_activate=this.can_activate_for_srh
  // }
  // update_canactivate_rcb(rcbFan_value:boolean)
  //  {
  //   this.can_activate = false;
  //   this.can_activate_for_rcb=rcbFan_value;
  //  this.can_activate=this.can_activate_for_rcb
  // }
  // update_canDeActivate_csk(cskFan_value:boolean)
  // {
  //   this.can_deactivate=false;
  //   this.can_deactivate_for_csk=cskFan_value;
  //   this.can_deactivate=this.can_deactivate_for_csk;
    
  // }
  update_can_activate_child(value:boolean)
  {
    this.can_activate_child=value;
  }
  canActivate(): boolean {
    return this.can_activate_for_srh;    
  }
  canDeactivate(component: SrhComponent):boolean{
    return this.can_deactivate_for_csk;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.can_activate_child;
  }
}
