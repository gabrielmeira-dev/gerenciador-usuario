import { Component, input, output } from '@angular/core';
import { User } from '../../../../shared/interfaces/user';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss'
})
export class UsersList {
  users = input.required<User[]>();

  removeUser = output<User>({alias: 'remove'});

  remove(user: User){
    this.removeUser.emit(user);
  }
}
