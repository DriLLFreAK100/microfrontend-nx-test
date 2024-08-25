import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '@mfe/auth-util';
import { ComponentsComponent } from '@mfe/components';
import { AdminService } from '@mfe/admin';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, ComponentsComponent],
  template: `
    <div class="wrapper">
      Hello Cart <br />
      isLoggedIn :{{isLoggedIn}} <br />
      isAdmin: {{isAdmin}}
      <lib-components />
    </div>
  `,
  styles: [],
})
export class NxWelcomeComponent {
  public isLoggedIn = inject(AuthServiceService).isLoggedIn();
  public isAdmin = inject(AdminService).isAdmin();

}
