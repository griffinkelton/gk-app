// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbLineComponent } from './line.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Line',
  component: sbLineComponent,
  parameters: {
    zeplinLink:[
      {
        name: 'list-item',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d880ff31915e75827b7262',
      },
      {
        name: 'header',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61d880ffccb46f7c5fe59983',
      }
    ]
},
} as Meta;

  const Template: Story<sbLineComponent> = (args: sbLineComponent) => ({
    props: args,
  });

  export const Header = Template.bind({});
  Header.args = {
    class: 'header'
  };
  
  export const listItem = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
listItem.args = {
  class: 'line-item',
};
