import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { TranslateModule } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import frLocale from '@angular/common/locales/fr';
import { AsyncDatePipe } from './async-date.pipe';
import { CURRENT_LOCALE_PROVIDER } from './current-locale.provider';

registerLocaleData(ruLocale, 'ru');
registerLocaleData(frLocale, 'fr');

@NgModule({
  declarations: [AppComponent, AsyncDatePipe],
  imports: [BrowserModule, TranslateModule.forRoot()],
  providers: [CURRENT_LOCALE_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
