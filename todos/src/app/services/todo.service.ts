import { Injectable } from '@angular/core';
import {Todo} from 'src/app/models/todo'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private _httpClient : HttpClient) { }

  getTodos():  Observable<Todo[]> {
    return this._httpClient.get<Todo[]>(this.baseUrl).pipe(map(response => response))
  }

  createTodo(todoData: Todo): Observable<Todo> {
    return this._httpClient.post<Todo>(this.baseUrl,todoData)
  }

  updateTodo(todoData: Todo): Observable<Todo> {
    return this._httpClient.put<Todo>(`${this.baseUrl}/${todoData.id}`,{responseType : Observable})
  }

  deleteTodo(id: number): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/${id}`,{responseType : 'text'})
  }


}
