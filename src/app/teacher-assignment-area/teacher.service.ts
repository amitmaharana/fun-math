import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { QuestionModel } from "./question-model";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TeacherService {
  private teacherUrl = "https://funmath-backend.appspot.com/user";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  //, "Access-Control-Allow-Origin": "*"

  constructor(private http: HttpClient) {}

  getQuestionByClassCategory(
    classNumber: number,
    category: string
  ): Observable<QuestionModel> {
    const url = `${this.teacherUrl}/question/getByClassCategory`;
    const body = { classNumber: classNumber, category: category };
    return this.http.post<QuestionModel>(url, body).pipe(
      tap(_ => console.log(`questions fetched=`)),
      catchError(this.handleError<QuestionModel>(`getAllQuestions`))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
