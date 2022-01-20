import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbButtonComponent } from '../button/button.component';
import { NavComponent } from '../nav/nav.component';
import { sbHeaderComponent } from '../header/header.component';
import { sbPageComponent } from './page.component';

export default {
  title: 'Page',
  component: sbPageComponent,
  decorators: [
    moduleMetadata({
      declarations: [sbButtonComponent, sbHeaderComponent, NavComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;