import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-header',
  template: `
  <header>
      <h1>
      {{ title }}
      </h1>
      <storybook-button class='cta' label='{{ cta }}' icon='{{icon}}'></storybook-button>
  </header>
  <storybook-line class='header'></storybook-line>`,
  styleUrls: ['./header.css'],
})
export class sbHeaderComponent {
  /**
   * Title
   *
   * @required
   */
   @Input()
   title?: string;

   @Input()
   cta?: string;

   @Input()
   icon?: string;
}
