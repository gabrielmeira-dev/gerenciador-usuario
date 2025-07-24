import { Component, input, output } from '@angular/core';
import { User } from '../../../../shared/interfaces/user';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ErrorBtn } from './directives/error-btn/error-btn';
import { TitleCasePipe } from '@angular/common';
import { TruncatePipe } from './pipes/truncate/truncate-pipe';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
  imports: [MatCardModule, MatButtonModule, ErrorBtn, TitleCasePipe, TruncatePipe]
})
export class UsersList {
  users = input.required<User[]>();

  removeUser = output<User>({alias: 'remove'});
  editUser = output<User>({alias: 'edit'});

  remove(user: User){
    this.removeUser.emit(user);
  }

  edit(user: User){
    this.editUser.emit(user)
  }
}
