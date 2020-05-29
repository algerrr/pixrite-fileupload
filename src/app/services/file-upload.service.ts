import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { NgxFileDropEntry } from 'ngx-file-drop';

@Injectable()
export class FileUploadService {

    private modelSource = new Subject<any>();

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

    // Observable string streams
    model$ = this.modelSource.asObservable();
    projectType$ = this.projectTypeSource.asObservable();
    customerName$ = this.customerNameSource.asObservable();
    zipcode$ = this.zipcodeSource.asObservable();
    email$ = this.emailSource.asObservable();
    phone$ = this.phoneSource.asObservable();
    company$ = this.companySource.asObservable();
    notes$ = this.notesSource.asObservable();
    filesToUpload$ = this.filesToUploadSource.asObservable();

    confirmUpload(custName: string) {
        this.customerNameSource.next(custName);
    }

}