// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbButtonComponent } from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Buttons',
  component: sbButtonComponent,
  parameters: {
    zeplinLink:[
      {
        name: 'normal',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d5f29d49b0f485fecf7dee',
      },
      {
        name: 'hover',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d5f29ee849298ddc4ff7c5',
      }
    ]
}
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<sbButtonComponent> = (args: sbButtonComponent) => ({
  props: args,
});

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};