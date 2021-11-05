import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSharedIconShellModule } from '@jscutlery-example/ng-shared/icon/shell';
import { NgSharedTableShellModule } from '@jscutlery-example/ng-shared/table/shell';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSharedIconShellModule,
    NgSharedTableShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
