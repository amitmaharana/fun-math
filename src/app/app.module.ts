import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./auth/auth.guard";

import { AppComponent } from "./app.component";

//Angular Material Components
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import {
  AdminDashboardComponent,
  AdminApprovalDialog
} from "./admin-dashboard/admin-dashboard.component";
import {
  StudentDashboardComponent,
  PrivilegeRequestDialog
} from "./student-dashboard/student-dashboard.component";
import { TeacherDashboardComponent } from "./teacher-dashboard/teacher-dashboard.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { AssignmnetViewComponent } from "./assignmnet-view/assignmnet-view.component";
import {
  UserSearchComponent,
  ConfirmDeleteDialog
} from "./user-search/user-search.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { HttpClientModule } from "@angular/common/http";
import { StudentCanvasComponent } from "./student-canvas/student-canvas.component";
import { StudentFirstGradeComponent } from "./student-first-grade/student-first-grade.component";
import { StudentGradesComponent } from "./student-grades/student-grades.component";
import { TeacherAssignmentAreaComponent } from "./teacher-assignment-area/teacher-assignment-area.component";
import { Class1Component } from "./teacher-assignment-area/questiontemplates/class1/class1.component";
import { Class3Component } from "./teacher-assignment-area/questiontemplates/class3/class3.component";
import { AssignmentSubmitComponent } from './assignment-submit/assignment-submit.component';
import {
  Class5Component,
  ConfirmationDialog
} from "./teacher-assignment-area/questiontemplates/class5/class5.component";
import { TeacherGradesComponent } from './teacher-grades/teacher-grades.component';
import { StudentFifthGradeComponent } from './student-fifth-grade/student-fifth-grade.component';
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    AdminDashboardComponent,
    AdminApprovalDialog,
    StudentDashboardComponent,
    PrivilegeRequestDialog,
    TeacherDashboardComponent,
    LandingPageComponent,
    UserLoginComponent,
    AssignmnetViewComponent,
    StudentGradesComponent,
    UserSearchComponent,
    ConfirmDeleteDialog,
    UserDetailsComponent,
    StudentCanvasComponent,
    TeacherAssignmentAreaComponent,
    Class1Component,
    Class3Component,
    AssignmentSubmitComponent,
    StudentFirstGradeComponent,
    StudentFifthGradeComponent,
    Class5Component,
    ConfirmationDialog,
    TeacherGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [],
  providers: [MatDatepickerModule, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    AdminApprovalDialog,
    ConfirmDeleteDialog,
    ConfirmationDialog,
    PrivilegeRequestDialog
  ]
})
export class AppModule {}
