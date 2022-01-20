// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { sbFunnelBar } from './funnel-bar.component'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Funnel Bar',
  component: sbFunnelBar,
  parameters: {
    zeplinLink:[
      {
        name: 'normal',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61df4092b382be69ee570ac0',
      },
      {
        name: 'hover',
        link: 'https://app.zeplin.io/project/61d5f289ed8d1e79ade68398/styleguide/components?coid=61df409115532232ebf49ddd',
      }
    ]
}
} as Meta;


// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<sbFunnelBar> = (args: sbFunnelBar) => ({
  props: args,
});

export const Default = Template.bind({});
  Default.args = {
    cssClass: 'funnel-bar',
    id:'targeted',
    fillColor: '#cc0000',
    title: 'Targeted',
    amount: 1500,
    percentage: 100,
  };