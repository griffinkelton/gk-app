import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-header',
  template: `
  <header>
      <h1>
      {{ title }}
      </h1>
      <storybook-button class='cta' label='{{cta}}'></storybook-button>
  </header>`,
  styleUrls: ['./header.css'],
})
export class sbHeaderComponent {
  /**
   * Title
   *
   * @required
   */
   @Input()
   title = 'Title';

   @Input()
   cta = 'New Campaign';
}
