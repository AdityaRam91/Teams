import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrhComponent } from './srh/srh.component';
import { CskComponent } from './csk/csk.component';
import { KkrComponent } from './kkr/kkr.component';
import { RcbComponent } from './rcb/rcb.component';
import { ShareService } from './share.service';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'rcb',component:RcbComponent,canActivate:[ShareService]},
  {path:'kkr',component:KkrComponent,canActivate:[ShareService],canActivateChild:[ShareService],children:[{path:'list',component:ListComponent}]},
  {path:'srh',component:SrhComponent,},
  {path:'csk',component:CskComponent,canDeactivate:[ShareService]},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
