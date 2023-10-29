import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <nav>
      <div>
        <a [routerLink]="['/']"
          ><img class="logo" src="assets/dog-walker-logo.svg"
        /></a>
        <h1 class="title">Walk My Dog</h1>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px 10px 10px;
      }

      nav div.menu-items {
        display: flex;
        width: 10%;
        justify-content: space-between;
      }
      nav > div {
        display: flex;
      }
      .title {
        font-size: 25pt;
      }
      .logo {
        height: 40px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'walk-my-dog-standalone';
}
