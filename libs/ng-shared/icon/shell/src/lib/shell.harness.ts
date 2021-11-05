import { ComponentHarness } from '@angular/cdk/testing';

export class NgSharedIconShellHarness extends ComponentHarness {
  static hostSelector = 'ng-shared-icon-shell';

  MatIconHarness;
}
