import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-line',
  template: ` <div
    [ngClass]="{ 'class': class }">
  </div>`,
  styleUrls: ['./line.css'],
})
export class sbLineComponent {
  
  /**
   * Set class
   */
  @Input()
  class?: string;
}