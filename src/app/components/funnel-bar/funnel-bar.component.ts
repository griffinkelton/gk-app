import { Component, Input} from '@angular/core';

@Component({
  selector: 'storybook-funnel-bar',
  template: `
  <div class="funnel">
    <div class='funnel-title'>{{ title }}</div>
    <div style='width:630px;'>
    <storybook-funnel-descender *ngIf = "percentage < 100" [d0]="percentage/100" [p0]="parentPercentage*0.01*630"></storybook-funnel-descender>
    <div style='width: calc({{percentage}}*0.01*630px);'
      [ngClass]='[cssClass]'
      id="{{ id }}">
        {{amount | number:'1.0'}}
    </div>
    </div>
    <div class='funnel-percentage'>{{percentage | number:'1.2-2'}}% </div>
</div>
  `,
  styleUrls: ['./funnel-bar.css'],
})

export class sbFunnelBar {

  @Input()
  cssClass?: string;

  @Input()
  fillColor?: string;

  @Input()
  title?:string;

  @Input()
  amount?: number;
  
  @Input()
  percentage: number;

  @Input()
  parentPercentage: number;

  @Input()
  id?: string;


}