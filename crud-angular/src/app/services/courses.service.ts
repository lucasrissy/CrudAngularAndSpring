import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { Course } from 'src/app/courses/models/course'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../assets/courses.json'

  constructor( private httpClient: HttpClient) { }
  
  list(): Observable<Course[]> { // returns a list of Courses
    return this.httpClient.get<Course[]>(this.API) //isto retorna um observable do tipo array de cursos[]
    .pipe(
      delay(2000),
      //pipe "Cano em ingles" significa que antes da informacação chegar ela vai passar por esse "cano" e podemos manipular que nesse caso so quero um console.log
      tap( e => console.log(e)) // operador RXJS tap
    ) 
    ;
  }
}
