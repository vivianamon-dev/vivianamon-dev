import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    // ... your components ...
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AgGridModule
  ],
  exports: [
    AgGridModule
  ]
})
export class AppModule { }
