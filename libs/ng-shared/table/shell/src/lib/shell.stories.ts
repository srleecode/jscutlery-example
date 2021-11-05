import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ShellComponent, NgSharedTableShellModule } from './shell.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: ShellComponent,
  title: 'NgShared/Table/Shell',
} as Meta;

const Template: Story<ShellComponent> = () => ({
  component: ShellComponent,
  decorators: [
    moduleMetadata({
      imports: [NgSharedTableShellModule, ...GLOBAL_MOUNT_OPTIONS.imports],
    }),
  ],
});

export const Default = Template.bind({});
