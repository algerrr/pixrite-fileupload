import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NgxFileDropEntry } from 'ngx-file-drop';

@Injectable()
export class FileUploadService {
    
  // Observable string sources
  private projectTypeSource = new Subject<string>();
  private customerNameSource = new Subject<string>();
  private zipcodeSource = new Subject<string>();
  private emailSource = new Subject<string>();
  private phoneSource = new Subject<string>();
  private companySource = new Subject<string>();
  private notesSource = new Subject<string>();

  // Observable File sources
  private filesToUploadSource = new Subject<NgxFileDropEntry[]>();
}