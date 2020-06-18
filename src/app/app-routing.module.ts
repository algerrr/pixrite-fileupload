import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewUploadsComponent } from './view-uploads/view-uploads.component';
// import { LoginComponent } from './login';
// import { AuthGuard } from './_helpers';
// import { Role } from './_models';


const routes: Routes = [
  {
      path: '',
      component: FileUploadComponent,
      // canActivate: [AuthGuard]
  },
  // {
  //     path: 'admin',
  //     component: ViewUploadsComponent,
      // canActivate: [AuthGuard],
      // data: { roles: [Role.Admin] }
  // },
  // {
  //     path: 'login',
  //     component: LoginComponent
  // },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'viewuploads', component: ViewUploadsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
