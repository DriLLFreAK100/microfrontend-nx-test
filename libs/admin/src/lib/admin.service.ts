import { inject, Injectable } from '@angular/core';
import { AuthServiceService } from '@mfe/auth-util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public isLoggedIn = inject(AuthServiceService).isLoggedIn();

  public isAdmin(): boolean {
    return this.isLoggedIn && true;
  }
}
