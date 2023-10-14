import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    //Criando o dataSource

    dataSource$: Observable<Course[]>;
    displayedColumns: string[] = ['_id','name', 'category'] // o nome da propriedades/ colunas

    
    constructor(private coursesService: CoursesService,
      public dialog: MatDialog,
      ){ // injection dependencies
     // this.coursesService = new CoursesService();
     //tratando os erros
      this.dataSource$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.openDialog('Not Found!');
          return of([]) // o of ele cria um obervable quando houver um erro que nesse caso sera um array vazio
        })
      )
    }

    openDialog(erroMsg: string): void{
      this.dialog.open(ErrorDialogComponent, {
        data: erroMsg
      });
    }
}
// pelo fato o service contem o @injectable service podemos fazer a injecao dentro do proprio construtor