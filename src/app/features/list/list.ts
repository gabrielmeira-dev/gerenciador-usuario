import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { Users } from "../../shared/services/users";
import { SearchInput } from "./components/search-input/search-input";
import { UsersList } from "./components/users-list/users-list";

@Component({
    selector: 'app-list',
    template: `
    @if (isLoading()) {
    <div>Carregando.....</div>
} @else {
    <app-search-input  [(search)]="search"/>
    <app-users-list [users]="filteredUsers()" (remove)="remove($event)"/>
}

    `,
    imports: [SearchInput, UsersList],

})

export class List implements OnInit {
    usersService = inject(Users);

  search = signal('');

  isLoading = signal(true)

  users = signal<string[]>([]);

  searchInLowerCase = computed(() => this.search().toLowerCase())

  filteredUsers = computed(() => {
   return this.users().filter((user) => user.toLowerCase().includes(this.searchInLowerCase()));
  })

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users) =>{
      this.users.set(users);
      this.isLoading.set(false);
    })
  }

  remove(user: string){
    this.users.update(users => users.filter(u => u !== user));
  }
}