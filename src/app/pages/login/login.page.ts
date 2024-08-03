import { Component, inject, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  _services:ServiceService = inject(ServiceService);

  constructor() { }

  ngOnInit() {
  }

}
