import { mount } from '@jscutlery/cypress-angular/mount';
import { getHarness } from '@jscutlery/cypress-harness';
import { MatTableHarness } from '@angular/material/table/testing';
import { GLOBAL_MOUNT_OPTIONS } from '@cypress/component-testing';
import { NgSharedTableShellModule, ShellComponent } from './shell.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShellComponent', () => {
  const harness = getHarness(MatTableHarness);

  beforeEach(() => {
    mount(ShellComponent, {
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgSharedTableShellModule,
        ...GLOBAL_MOUNT_OPTIONS.imports,
      ],
    });
  });

  it('should have correct values in table', () => {
    const rows = harness.getCellTextByIndex();
    rows.should('deep.equal', [
      ['1', 'Hydrogen', '1.0079', 'H'],
      ['2', 'Helium', '4.0026', 'He'],
      ['3', 'Lithium', '6.941', 'Li'],
      ['4', 'Beryllium', '9.0122', 'Be'],
      ['5', 'Boron', '10.811', 'B'],
      ['6', 'Carbon', '12.0107', 'C'],
      ['7', 'Nitrogen', '14.0067', 'N'],
      ['8', 'Oxygen', '15.9994', 'O'],
      ['9', 'Fluorine', '18.9984', 'F'],
      ['10', 'Neon', '20.1797', 'Ne'],
    ]);
  });
});
