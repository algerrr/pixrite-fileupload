import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Upload } from './upload';
import { Router, NavigationEnd } from '@angular/router';


@Component(
  {
    selector: 'app-view-uploads',
    templateUrl: './view-uploads.component.html',
    providers: [CountryService, DecimalPipe]
  })
export class ViewUploadsComponent implements OnInit, OnDestroy {
  uploads$: Observable<Upload[]>;
  total$: Observable<number>;
  mySubscription: any;


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService, private router:Router) {
    this.uploads$ = service.uploads$;
    this.total$ = service.total$;

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }
  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
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
}