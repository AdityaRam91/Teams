import { CanActivate } from '@angular/router';
import { ShareService } from './share.service';

export class ConnectGuard implements CanActivate {
  constructor(public service: ShareService) {}
  
  canActivate(): boolean {
    return true;
    
  }
}
