import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from 'src/app/services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    //Criando o dataSource

    dataSource$: Observable<Course[]>;
    displayedColumns: string[] = ['_id','name', 'category'] // o nome da propriedades/ colunas

    
    constructor(private coursesService: CoursesService){ // injection dependencies
     // this.coursesService = new CoursesService();
      this.dataSource$ = this.coursesService.list()
    }
}
// pelo fato o service contem o @injectable service podemos fazer a injecao dentro do proprio construtor