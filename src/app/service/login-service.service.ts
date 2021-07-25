import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private data: { email: string, valid: boolean } = {
    email: "",
    valid: false
  }

  public set email(e: string) {
    this.data.email = e;
  }

  public set valid(v: boolean) {
    this.data.valid = v;
  }

  public get user() {
    return this.data;
  }

}
