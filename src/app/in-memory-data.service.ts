import { InMemoryDbService } from "angular-in-memory-web-api";
import { Assignment } from "./assignmnet-view/assignment";
import { Injectable } from "@angular/core";
import { User } from "./user-search/user";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, userId: 11, firstName: "Asmi", password: "Asmi", role: 0 },
      {
        id: 12,
        userId: 12,
        firstName: "Dhananjay",
        password: "Dhananjay",
        role: 0
      },
      { id: 13, userId: 13, firstName: "Sharad", password: "Sharad", role: 0 },
      { id: 14, userId: 14, firstName: "Naren", password: "Naren", role: 0 },
      { id: 15, userId: 15, firstName: "Satyen", password: "Satyen", role: 0 }
    ];

    const assignments = [
      {
        id: 11,
        name: "Assignment_1",
        dueDate: "11/03/2019",
        creationDate: "10/25/2019",
        marks: 50
      },
      {
        id: 12,
        name: "Assignment_2",
        dueDate: "11/04/2019",
        creationDate: "10/26/2019",
        marks: 45
      },
      {
        id: 13,
        name: "Assignment_3",
        dueDate: "11/05/2019",
        creationDate: "10/27/2019",
        marks: 40
      },
      {
        id: 14,
        name: "Assignment_4",
        dueDate: "11/06/2019",
        creationDate: "10/28/2019",
        marks: 35
      },
      {
        id: 15,
        name: "Assignment_5",
        dueDate: "11/07/2019",
        creationDate: "10/29/2019",
        marks: 30
      },
      {
        id: 16,
        name: "Assignment_6",
        dueDate: "11/08/2019",
        creationDate: "10/30/2019",
        marks: 20
      }
    ];
    // const heroes = [
    //   { id: 11, name: 'Dr Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
    return { users, assignments };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0
      ? Math.max(...users.map(user => user.userId)) + 1
      : 11;
  }

  // genId(assignmnets: Assignment[]): number {
  //   return assignmnets.length > 0 ? Math.max(...assignmnets.map(assignmnet => assignmnet.id)) + 1 : 11;
  // }
}
