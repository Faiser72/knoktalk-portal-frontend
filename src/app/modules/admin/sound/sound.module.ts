import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundhomeComponent } from './soundhome/soundhome.component';
import { SoundlistComponent } from './soundlist/soundlist.component';
import { MatDividerModule, MatIconModule, MatInputModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { SectionlistComponent, AddSection, EditSection } from './sectionlist/sectionlist.component';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { AddsoundComponent } from './addsound/addsound.component';
import { FormsModule } from '@angular/forms';
import { AddsoundgalleryComponent, PublishSound } from './addsoundgallery/addsoundgallery.component';

@NgModule({
  declarations: [SoundhomeComponent, SoundlistComponent, SectionlistComponent, AddSection,AddsoundComponent,PublishSound,EditSection, AddsoundgalleryComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    DataTablesModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents:[AddSection,PublishSound,EditSection]
})
export class SoundModule { }
