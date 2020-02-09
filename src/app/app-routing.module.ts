import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";
import { AssignmnetViewComponent } from "./assignmnet-view/assignmnet-view.component";
import { StudentGradesComponent } from "./student-grades/student-grades.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserSearchComponent } from "./user-search/user-search.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { StudentCanvasComponent } from "./student-canvas/student-canvas.component";
import { TeacherAssignmentAreaComponent } from "./teacher-assignment-area/teacher-assignment-area.component";
import { TeacherGradesComponent } from "./teacher-grades/teacher-grades.component";
import { Class5Component } from './teacher-assignment-area/questiontemplates/class5/class5.component';
import { StudentFirstGradeComponent } from './student-first-grade/student-first-grade.component';
import { AssignmentSubmitComponent } from './assignment-submit/assignment-submit.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "register", component: UserRegistrationComponent },
  { path: "login", component: UserLoginComponent },
  { path: "canvas", component: StudentCanvasComponent },
  {
    path: "admindash",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "studentdash", component: StudentDashboardComponent, },
  { path: "teacherdash", component: TeacherDashboardComponent, },
  { path: "assignmentview", component: AssignmnetViewComponent, },
  { path: "studentgradesdash", component: StudentGradesComponent },
  { path: "teachergradesdash", component: TeacherGradesComponent},
  { path: "usersearch", component: UserSearchComponent },
  { path: "userdetails/:id", component: UserDetailsComponent },
  { path: "add-assignment", component: TeacherAssignmentAreaComponent },
  { path: "studentfirstgrade", component: StudentFirstGradeComponent },
  { path: "studentfifthgrade", component: Class5Component },
  { path: "assignmentSubmit", component: AssignmentSubmitComponent },


  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: false,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
