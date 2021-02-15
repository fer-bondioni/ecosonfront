import { Component, OnInit } from '@angular/core';
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

  constructor(private _service: UsersService) {}

  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject);
  }

  async registro() {
    // this.swal.normalMessage({html: 'Te enviamos un correo para que confirmes tu registro'});
    const result: any = await this._service.create(this.form.value);
    console.log(result);
  }
}
