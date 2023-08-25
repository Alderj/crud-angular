import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpCliente: HttpClient) { }

  list(): Course[]{
    return [
      { _id: '2', name: 'TypeScript', category: 'frontend'}
    ]
  }
}
