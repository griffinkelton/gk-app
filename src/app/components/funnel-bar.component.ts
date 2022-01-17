import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';

/* SVG formula for funnel descender

Origin X (Ox) = 0				← X coordinate for starting point
Origin Y (Oy) = 0				← Y coordinate for starting point
Parent width (P0) = 630		← value of step 0
Vertical line (V) = 36			← height of descenders (constant)
drop (drop0) = 0.7				← percentage of p0 for step 1
P0 * d0 = 441					← bottom width of next step (630*0.7)
P0 - drop0 = diff0 = 189		← difference of p0 and d0 (630-441)
diff0 / 2  = diff0x = 94.5		← X coordinate change (189/2)
P0 - diff0x = 535.5			← bottom right X coordinate (630-94.5)
Ox + diff0x = 94.5				← bottom left X coordinate (0 + 94.5)

For example:
630 * 0.7 = 441
630 - 441 = 189
189 / 2 = 94.5
630 - 94.5 = 535.5
0 + 94.5 = 94.5

<path d=‘M{Ox Oy} H {P0} L {P0 - diff0x} {V} L {Ox + diff0x} {V} Z><path>

<path d=‘M0 0 H 630 L 535.5 36 L 94.5 36 Z><path>

*/

@Component({
  selector: 'storybook-funnel-bar',
  template: `
  <div class="funnel">
    <div class='funnel-title'>{{ title }}</div>
    <div *ngIf = "id == 'targeted'; else childFunnelBar"
      [ngClass]='[cssClass]'
      id="{{ id }}">
        {{amount | number:'1.0'}}
    </div>
    <ng-template #childFunnelBar>
      <div [ngClass]='[cssClass]' style='width: calc({{percentage}}*0.01*630px);'>
        {{amount | number:'1.0'}}
      </div>
    </ng-template>
    <div class='funnel-percentage'>{{percentage | number:'1.2-2'}}%</div>
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
}