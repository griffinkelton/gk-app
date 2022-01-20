import { Component, Input, OnInit} from '@angular/core';

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
    <div class='funnel-percentage'>{{percentage | number:'1.2-2'}}%  {{width}}</div>
</div>
  `,
  styleUrls: ['./funnel-bar.css'],
})

export class sbFunnelBar implements OnInit {

  math = Math;

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

  width: number;

  ngOnInit(): void {
    this.width = this.math.round(this.percentage*0.01*630);
  }
    
}