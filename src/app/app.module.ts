import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Modulo personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// camair el local de la app
import localEs from '@angular/common/locales/es-MX'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    VentasModule,
    SharedModule
  ],
  providers: [
    // cambiar el idioma a español es-Mx
    {provide: LOCALE_ID, useValue: 'es-Mx'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
