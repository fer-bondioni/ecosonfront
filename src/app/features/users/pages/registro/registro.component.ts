import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from '../../../../services/swal.service';
import { UsersService } from '../../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  FormObject: any = {
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    mail: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
  };

  verifyField(field: string): string {
    const element = this.form.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es obligatorio`)
      : '';
    return message;
  }

  constructor(
    private _service: UsersService,
    private service: SwalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }

  async registro() {
    this.service.normalMessage({
      html: 'Te enviamos un correo para que confirmes tu registro',
      icon: 'success',
      timer: 3000,
    });
    const result: any = await this._service.create(this.form.value);
    this.router.navigate(['home']);
    console.log(result);
  }
}
