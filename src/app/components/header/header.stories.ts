import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbButtonComponent } from '../button/button.component';
import { sbHeaderComponent } from './header.component';

export default {
  title: 'Header',
  component: sbHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [sbButtonComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    zeplinLink: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d5f29dcfb7ff78d4246daa',
      },
} as Meta;

const Template: Story<sbHeaderComponent> = (args: sbHeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});
  Default.args = {
    title: 'Title',
    cta: '',
    icon: ''
  };