import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
   
    ErrorDialogComponent,
        CategoryPipe
  ],
  imports: [
    CommonModule,
    AngularMaterialModule, 
  ],
  exports: [ErrorDialogComponent,
            CategoryPipe]
})
export class SharedModule { }
