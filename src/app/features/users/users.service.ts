import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  create(obj) {
    this.setEndPoint('registro');
    return this.post(obj);
  }

  auth(obj: any) {
    this.setEndPoint('auth');
    return this.post(obj);
  }

  // single(id) {
  //   this.setEndPoint('perfil');
  //   return this.get();
  // }

  all() {
    this.setEndPoint('perfil');
    return this.get();
  }
}
