import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '@mfe/auth-util';
import { AdminService } from '@mfe/admin';
import { ComponentsComponent } from '@mfe/components';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, ComponentsComponent],
  template: `
    <div class="wrapper">
      THE HOST <br />
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
