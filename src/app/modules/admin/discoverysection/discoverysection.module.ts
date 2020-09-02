import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverysectionlistComponent, AddDiscovery } from './discoverysectionlist/discoverysectionlist.component';
import { MatIconModule, MatListModule, MatTableModule, MatInputModule, MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [DiscoverysectionlistComponent,AddDiscovery,],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[AddDiscovery]
})
export class DiscoverysectionModule { }
