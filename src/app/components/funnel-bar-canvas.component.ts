import { Component, ViewChild, ElementRef, OnInit, Input} from '@angular/core';

@Component({
  selector: 'storybook-funnel-bar-canvas',
  template: `
      <canvas
        #canvas
        [ngClass]='[cssClass]'
      ></canvas>
  `,
})

export class sbFunnelBarCan implements OnInit {
  @Input()
  cssClass?: string;

  @Input()
  fillColor?: string;
 
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  

  ctx: any;

  ngOnInit(): void {
    var canvas: ElementRef<HTMLCanvasElement>;  
    var ctx: CanvasRenderingContext2D;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = this.fillColor;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(630, 0);
    this.ctx.lineTo(0, 57);
    this.ctx.lineTo(0,441);
    this.ctx.fill();
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