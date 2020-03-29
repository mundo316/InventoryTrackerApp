import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { PartsComponent } from './parts/parts.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverviewComponent } from './driverview/driverview.component';
import { OnhandviewComponent } from './onhandview/onhandview.component';
import { PartsSheetComponent } from './parts-sheet/parts-sheet.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ 
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    PartsComponent,
    DriversComponent,
    DriverviewComponent,
    OnhandviewComponent,
    PartsSheetComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'driverRoster', component: DriversComponent, canActivate: [AuthorizeGuard] },
        { path: 'parts' , component: PartsComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
