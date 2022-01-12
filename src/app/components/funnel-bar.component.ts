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
  `,
  styleUrls: ['./funnel-bar.css']
})

export class sbFunnelBar implements OnInit {
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
 
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  

  ctx: any;

  ngOnInit(): void {
    var canvas: ElementRef<HTMLCanvasElement>;  
    var ctx: CanvasRenderingContext2D;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = this.fillColor;
    this.ctx.fillRect(0, 0, innerWidth, innerHeight);
    var x = innerWidth / 2;
    var y = innerHeight / 2;
    this.ctx.fillStyle = 'white';
    this.ctx.font = '50px serif';
    this.ctx.fillText('Hello', x, y);
  };
}