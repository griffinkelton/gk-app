import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbButtonComponent } from '../button/button.component';
import { NavComponent } from './nav.component';

export default {
  title: 'Navigation',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      declarations: [sbButtonComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    zeplinLink: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d5f29c34e437886e08e1a2',
      },
} as Meta;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  props: args,
});

export const Default = Template.bind({});
  Default.args = {
    link1: 'Link 1',
    link1url: '',
    link2: 'Link 2',
    link2url: '',
    link3: 'Link 3',
    link3url: ''
  };