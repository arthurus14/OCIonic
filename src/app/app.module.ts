import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { BookListPage } from '../pages/book-list/book-list';
import { LendBookPage } from '../pages/lend-book/lend-book';
import { CdListPage } from '../pages/cd-list/cd-list';
import { LendCdPage } from '../pages/lend-cd/lend-cd';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';

import { PretService } from '../services/pret.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    PretService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
