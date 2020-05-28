import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent implements OnInit {
  title = 'pixrite';
  SERVER_URL = "https://www.3dintegrationgroup.com/secure-file-upload/upload.php";
  // SERVER_URL = "https://www.3dintegrationgroup.com/secure-file-upload/upload.php";

  public files: NgxFileDropEntry[] = [];
  model: any = {};
  uploadForm: FormGroup;
  submitMode: boolean = true;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      fileToUpload: ['']
    });
  }

  toggleConfirm(){
    if(this.submitMode)
      this.submitMode = false;
    else
      this.submitMode = true;
  }

  onSubmit() {
    
    for (const droppedFile of this.model.filesToUpload) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          console.log(droppedFile.relativePath, file);
          this.uploadForm.get('fileToUpload').setValue(file);
          
          const formData = new FormData()
          // formData.append('fileToUpload', file, droppedFile.relativePath)
          formData.append('fileToUpload', this.uploadForm.get('fileToUpload').value);
          formData.append('projectType', this.model.projectType)
          formData.append('customerName', this.model.customerName)
          formData.append('zipcode', this.model.zipcode)
          formData.append('email', this.model.email)
          formData.append('phone', this.model.phone)
          formData.append('company', this.model.company)
          formData.append('notes', this.model.notes)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post(this.SERVER_URL, formData, { headers: headers, responseType: 'blob' })
          .subscribe(
            (res) => console.log(res),
            (err) => console.log(err)
          )
          console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 3));
          
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    this.model.filesToUpload = files;
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
