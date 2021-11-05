import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ng-shared-icon-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {}

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ShellComponent],
})
export class NgSharedIconShellModule {}
