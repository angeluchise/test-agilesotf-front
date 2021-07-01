import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { NgxCarouselModule } from  'ngx-light-carousel';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderModule } from '@components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DetailsRoutingModule,
    NgxCarouselModule,
    InfiniteScrollModule,
    HeaderModule
  ],
  declarations: [DetailsComponent],
})
export class DetailsModule { }
