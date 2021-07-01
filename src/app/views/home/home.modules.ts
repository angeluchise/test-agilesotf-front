import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxCarouselModule } from  'ngx-light-carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderModule } from '@components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgxCarouselModule,
    InfiniteScrollModule,
    HeaderModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }
