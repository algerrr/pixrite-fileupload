import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pixrite';
 user: User;

 constructor(private authenticationService: AuthenticationService) {
   this.authenticationService.user.subscribe(x => this.user = x);
}

ngOnInit() {
}


  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }

}
