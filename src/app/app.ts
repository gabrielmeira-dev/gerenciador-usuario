import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersList } from './features/list/components/users-list/users-list';
import { SearchInput } from './features/list/components/search-input/search-input';
import { Users } from './shared/services/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet]
})
export class App  {
 

}
