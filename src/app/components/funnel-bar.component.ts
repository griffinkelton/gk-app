import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';

@Component({
  selector: 'storybook-funnel-bar',
  template: `
  <div class="funnel">
    <div class='funnel-title'>{{ title }}</div>
    <div>
      <canvas
        *ngIf="percentage < 100"
        #canvas
        [ngClass]='[cssClass]'
      ></canvas>
      <div
      [ngClass]='[cssClass]'
      id="{{ id }}">
        {{amount | number:'1.0'}}
      </div>
    </div>
    <div class='funnel-percentage'>{{percentage | number:'1.2-2'}}%</div>
  </div>
  <div class='descender'>
<div class='left-half descender-bar' style='width:calc({{drop}}*0.5*630px);'></div>
<span>70%</span>
<div class='right-half descender-bar' style='width:calc({{drop}}*0.5*630px);'></div>
</div>
  `,
  styleUrls: ['./funnel-bar.css']
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
  id?: string;

  @Input()
  drop?: number;
}