import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Upload } from './upload';


@Component(
  {
    selector: 'app-view-uploads',
    templateUrl: './view-uploads.component.html',
    providers: [CountryService, DecimalPipe]
  })
export class ViewUploadsComponent implements OnInit, AfterContentInit, AfterViewInit{
  uploads$: Observable<Upload[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.uploads$ = service.uploads$;
    this.total$ = service.total$;

  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
    this.refresh();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.refresh();
  }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  refresh(): void {
    this.service.searchTerm = '';
  }
}