import { Component, Input, OnInit} from '@angular/core';

/* SVG formula for funnel descender

Origin X (Ox) = 0				← X coordinate for starting point
Origin Y (Oy) = 0				← Y coordinate for starting point
Parent width (p0) = 630		← value of step 0
Vertical line (V) = 36			← height of descenders (constant)
drop (d0) = 0.7				← percentage of p0 for step 1
p0 * d0 = bW0 = 441					← bottom width of next step (630*0.7)
p0 - d0 = diff0 = 189		← difference of p0 and d0 (630-441)
diff0 / 2  = diff0x = 94.5		← X coordinate change (189/2)
p0 - diff0x = bRx = 535.5			← bottom right X coordinate (630-94.5)
Ox + diff0x = bLx=  94.5				← bottom left X coordinate (0 + 94.5)

For example:
630 * 0.7 = 441
630 - 441 = 189
189 / 2 = 94.5
630 - 94.5 = 535.5
0 + 94.5 = 94.5

<path d=‘M0 0 H 630 L 535.5 36 L 94.5 36 Z'><path>

*/

@Component({
  selector: 'storybook-funnel-descender',
  templateUrl: './funnel-descender.svg',
  styleUrls: ['./funnel-descender.css'],
  inputs: ['data-drop']
})

export class sbFunnelDescender implements OnInit{

math = Math;

readonly Ox: number = 0;
readonly Oy: number = 0;

readonly V: number = 36; //height

@Input()
p0: number; //width

bW0: number
diff0: number;
diff0x: number;
bRx: number;
bLx: number

@Input()
d0: number;

details: string;

ngOnInit(): void {
  this.bW0 = this.p0*this.d0; 189
  this.diff0 = this.p0-this.bW0; 441
  this.diff0x = this.diff0/2; 220.5
  this.bRx = this.p0 - this.diff0x; 409.5
  this.bLx = this.Ox + this.diff0x; 220.5
  this.details = 'M '+ this.Ox + ' ' + this.Oy + ' H ' + this.p0 + ' L ' + this.bRx + ' ' + this.V + ' L ' + this.bLx + ' ' + this.V + ' Z';
}
}