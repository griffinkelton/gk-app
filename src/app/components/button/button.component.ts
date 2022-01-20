import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: ` <button
    type='button'
    (click)='onClick.emit($event)'
    [ngClass]='classes'>
    <span [ngClass]='[icon]'></span> {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export class sbButtonComponent {
  
  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  @Input()
  icon?: string;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = 'storybook-button'

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
