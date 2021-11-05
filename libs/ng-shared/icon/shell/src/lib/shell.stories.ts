import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ShellComponent, NgSharedIconShellModule } from './shell.component';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';

export default {
  component: ShellComponent,
  title: 'NgShared/Icon/Shell',
} as Meta;

const Template: Story<ShellComponent> = () => ({
  component: ShellComponent,
  decorators: [
    moduleMetadata({
      imports: [NgSharedIconShellModule, ...GLOBAL_MOUNT_OPTIONS.imports],
    }),
  ],
});

export const Default = Template.bind({});
