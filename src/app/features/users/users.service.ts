import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  common: string = 'noticias';

  create(obj) {
    this.setEndPoint('registro');
    return this.post(obj);
  }

  auth(obj: any) {
    this.setEndPoint('auth');
    return this.post(obj);
  }

  all() {
    this.setEndPoint('perfil');
    return this.get();
  }

  single(id) {
    this.setEndPoint(`${this.common}/single/${id}`);
    return this.get();
  }

  update(id, obj) {
    this.setEndPoint(`${this.common}/modify/${id}`);
    return this.put(obj);
  }
  del(id, obj) {
    this.setEndPoint(`${this.common}/eliminar/${id}`);
    return this.put(obj);
  }
}
