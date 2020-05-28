import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ViewUploadsComponent } from './view-uploads/view-uploads.component';


const routes: Routes = [
  // { path: '', redirectTo: '/viewuploads', pathMatch: 'full' },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'viewuploads', component: ViewUploadsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
