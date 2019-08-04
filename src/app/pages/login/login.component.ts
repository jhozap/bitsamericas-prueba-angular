import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';
  showSpinner = false;
  constructor(private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.showSpinner = true;
    if (this.user === 'pruebas' && this.password === '123') {
      setTimeout(() => this.router.navigate(['/albumes']), 2000);
    } else {
      this.toastr.error('Usuario o Contraseña Incorrectos', 'Datos Invalidos', {
        timeOut: 3000
      });
      this.showSpinner = false;
    }

  }

  cancel() {
    this.user = '';
    this.password = '';
  }

}
