import { User } from './user';
import { Users } from '../mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'https://funmath-backend.appspot.com/user';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getUsers(): User[] {
  //   return Users;
  // }

  getUsers(): Observable<User[]> {
    //return of(Users);
    return this.http.get<User[]>(`${this.usersUrl}/getAll/`)
      .pipe(
        tap(_ => console.log('fetched Users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  // getUserById(userid: number): User {
  //   var returnuser: User;
  //   Users.forEach(user => {      
  //     if(user.userid == +userid){
  //       returnuser = user;
  //       return false;    
  //     }
  //   });
  //   return returnuser;
  // }

  /** GET user by id. Will 404 if id not found */
  getUserById(userid: number): Observable<User> {
    const url = `${this.usersUrl}/search/${userid}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user id=${userid}`)),
      catchError(this.handleError<User>(`getUserById id=${userid}`))
    );
  }


  getUsersByNameOrId(nameOrId: string): Observable<User[]> {
    const url = `${this.usersUrl}/searchByNameOrId/${nameOrId}`;
    return this.http.get<User[]>(url).pipe(
      tap(_ => console.log(`fetched user id=${nameOrId}`)),
      catchError(this.handleError<User[]>(`getUserById id=${nameOrId}`))
    );
  }

  // searchUser(nameOrId: string): User[] {
  //   var searchUsers: User[] = [];
  //   if (nameOrId == ""){
  //     searchUsers = Users;
  //   }else{
  //     Users.forEach(user => {
  //       if ((user.userId == +nameOrId) || (user.firstName == nameOrId)) {
  //         searchUsers.push(user);
  //       }
  //     });
  //   }      
  //   return searchUsers;
  // }


  deleteUser(userid: number): Observable<Boolean> {
    const url = `${this.usersUrl}/remove/${userid}`;
    return this.http.delete<Boolean>(url).pipe(
      tap(_ => console.log(`Deleted user id=${userid}`)),
      catchError(this.handleError<Boolean>(`getUserById id=${userid}`))
    );
    // var deleted: boolean = false;
    // var index = 0
    // Users.forEach(user => {

    //   if(user.userid == +userid){
    //     Users.splice(index,1);
    //     deleted = true;        
    //   }      
    //   if (deleted) {
    //     return false;
    //   }
    //   index += 1;
    // });
    // return of(deleted)
  }

  deleteUsers(userids: number[]): Observable<Boolean> {
    const url = `${this.usersUrl}/removeIds/`;
    return this.http.post<Boolean>(url, userids).pipe(
      tap(_ => console.log(`Deleted users id=${userids}`)),
      catchError(this.handleError<Boolean>(`getUserById id=${userids}`))
    );
    // var index = 0;
    // var count = 0;
    // //var userlist = Users;
    // userids.forEach(userid => {

    //   this.deleteUser(userid)
    //       .subscribe(val => {
    //         console.log(val)
    //         //need to update once real api is ready
    //         val = true;
    //         if (val) {
    //           count += 1;
    //         }
    //       });
    //   index += 1;
    // });
    // var returnMessage = count + " out of " + userids.length + " deleted succesfully."
    // return of(returnMessage);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
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
