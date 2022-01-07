import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-nav',
  template: `
  <nav>
    <div class="nav-nav-header">
      <div class="logo"></div>
      <div class="nav-nav-menu">
        <span class="list-item">
        <a [routerLink]='[link1url]'>{{ link1 }}</a>
        </span>
        <span class="list-item">
        <a [routerLink]='[link2url]'>{{ link2 }}</a>
        </span>
        <span class="list-item">
        <a [routerLink]='[link3url]'>{{ link3 }}</a>
        </span>
      </div>
    </div>
  </nav>
  `,
  styleUrls: ['./nav.css'],
})
export class NavComponent {
  /**
   * Links
   *
   * @required
   */
   @Input()
   link1 = 'Link 1';
   
   @Input()
   link1url = '';

   @Input()
   link2url = '';

   @Input()
   link3url = '';

   @Input()
   link2 = 'Link 2';

   @Input()
   link3 = 'Link 3  ';

}
