import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';

// services
import { StatsService } from './shared/services/stats.service';
import { AlertService } from './shared/services/alert.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { UserService } from './shared/services/user.service';

// components
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { DisclaimerComponent } from './static/disclaimer/disclaimer.component';
import { PrivacyComponent } from './static/privacy/privacy.component';
import { NotFoundComponent } from './static/not-found/not-found.component';
import { AccessDeniedComponent } from './static/access-denied/access-denied.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// pipes
import { AuthGuard } from './shared/guards/auth.guard';
import { JwtInterceptor } from './shared/helpers/jwt.interceptors';
import { LoginCustomComponent } from './login-custom/login-custom.component';
import { DonationLinkComponent } from './donation-link/donation-link.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'denied', component: AccessDeniedComponent },
  { path: 'disclaimer', component: DisclaimerComponent, canActivate: [AuthGuard] },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] }, <-- Only autheticated users can access this site
  // default route, when nothing match
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    FooterComponent,
    StatsComponent,
    NotFoundComponent,
    PrivacyComponent,
    DisclaimerComponent,
    AlertComponent,
    LoginComponent,
    LoginCustomComponent,
    AccessDeniedComponent,
    DonationLinkComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' },
    StatsService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
