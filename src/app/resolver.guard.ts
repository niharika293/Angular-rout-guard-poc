import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {
  objCampaign = {
      campaignID : '123',
      campaignName : 'Super Diwali Sale'
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //  Assume that we're getting an object from our service, we'll use this data to be passed with the route.
    return this.objCampaign;
  }
  
}
