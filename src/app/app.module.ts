import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BienComponent } from './bien/bien.component';
import { AddBienComponent } from './bien/add-bien/add-bien.component';
import { ListBienComponent } from './bien/list-bien/list-bien.component';
import { DetailBienComponent } from './bien/detail-bien/detail-bien.component';
import { ItemComponent } from './bien/list-bien/item/item.component';
import { JumbotronComponent } from './bien/jumbotron/jumbotron.component';
import { SeparatorPipe } from './pipes/separator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BienComponent,
    AddBienComponent,
    ListBienComponent,
    DetailBienComponent,
    ItemComponent,
    JumbotronComponent,
    SeparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
