/* import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

}
 */
import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
//export class UserComponent {
export class  UserComponent {
  title = 'Get-Rid-Of-It-App';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
