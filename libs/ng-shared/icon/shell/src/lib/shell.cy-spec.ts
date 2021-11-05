import { mountStory } from '@jscutlery/cypress-angular/mount';
import { getHarness } from '@jscutlery/cypress-harness';
import { MatIconHarness } from '@angular/material/icon/testing';
import { GLOBAL_MOUNT_STYLE_OPTIONS } from '@cypress/component-testing';
import { Default } from './shell.stories';

describe('ShellComponent', () => {
  const harness = getHarness(MatIconHarness);

  beforeEach(() => {
    mountStory(Default, { ...GLOBAL_MOUNT_STYLE_OPTIONS });
  });

  it('should have home icon', () => {
    harness.getName().should('eq', 'home');
  });
});
