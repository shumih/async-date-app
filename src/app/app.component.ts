import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CURRENT_LOCALE } from './current-locale.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public currentDate = new Date();
  public localesMap = {
    'en-US': '🇺🇸',
    ru: '🇷🇺',
    fr: '🇫🇷',
  };
  public get locales(): string[] {
    return Object.keys(this.localesMap);
  }

  constructor(
    public translateService: TranslateService,
    @Inject(CURRENT_LOCALE) public currentLocale$: Observable<string>
  ) {}
}
