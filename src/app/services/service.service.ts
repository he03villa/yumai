import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _router:Router = inject(Router);

  constructor() { }

  url(url:string) {
    this._router.navigate([url]);
  }
}
