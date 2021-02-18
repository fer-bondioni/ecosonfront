import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SwalService } from '../../../../services/swal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //showLogin: boolean;
  showRegistro: boolean = true;
  //showPerfil: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SwalService,
    private router: Router
  ) {}

  login(): boolean {
    let showLogin = true;
    if (localStorage.getItem('JWT')) {
      showLogin = false && this.showRegistro == false;
    } else {
      showLogin = true && this.showRegistro == true;
    }
    return showLogin;
  }
  perfil(): boolean {
    let showPerfil = false;
    if (localStorage.getItem('JWT')) {
      showPerfil = true;
    } else {
      showPerfil = false;
    }
    return showPerfil;
  }
  cerrar(): boolean {
    let showCerrar = false;
    if (localStorage.getItem('JWT')) {
      showCerrar = true;
    } else {
      showCerrar = false;
    }
    return showCerrar;
  }
  subir(): boolean {
    let showSubir = false;
    if (localStorage.getItem('JWT')) {
      showSubir = true;
    } else {
      showSubir = false;
    }
    return showSubir;
  }
  logout() {
    localStorage.removeItem('JWT');
    this.router.navigate(['home']);
    this.service.normalMessage({
      html: '¡Hasta luego!',
      icon: 'success',
      timer: 2000,
    });
  }

  ngOnInit(): void {}
}
