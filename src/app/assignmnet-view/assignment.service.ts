import { Injectable } from "@angular/core";
import { Assignment } from "./assignment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AssignmentService {
  private usersUrl = "https://funmath-backend.appspot.com/user/assignment"; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getAssignments(classNumber: number): Observable<Assignment[]> {
    return this.http
      .get<Assignment[]>(`${this.usersUrl}/getAssignments/${classNumber}`)
      .pipe(
        tap(_ => console.log("asignmentList fecthed")),
        catchError(this.handleError<Assignment[]>("getAssignments", []))
      );
  }
  submitAssignment(assignment: any): Observable<any> {
    return this.http.post(`${this.usersUrl}/submitAssignment`, assignment).pipe(
      tap(_ => console.log("Assignment Submitted")),
      catchError(this.handleError<Boolean>("getAssignments", true))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
  private handleEmptyError() {}
}
