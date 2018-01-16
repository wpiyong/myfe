import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { HeroesService } from './services/heroes.service';
import { HighlightDirective } from './directives/highlight.directive';
import { SharedmoduleModule } from './sharedmodule/sharedmodule.module';
import { EventService } from './services/event.service';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { ModalComponent } from './modals/modal.component';
import { HoverhighlightDirective } from './directives/hoverhighlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    HighlightDirective,
    ModalComponent,
    HoverhighlightDirective
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    SharedmoduleModule,
    BootstrapModule,
  ],
  providers: [HeroesService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
