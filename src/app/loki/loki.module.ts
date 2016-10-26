import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LokiService } from './loki.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LokiService],
  declarations: []
})
export class LokiModule { }
