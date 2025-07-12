import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from "@angular/core";
import { Users } from "../../shared/services/users";
import { SearchInput } from "./components/search-input/search-input";
import { UsersList } from "./components/users-list/users-list";
import { User } from "../../shared/interfaces/user";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { take } from "rxjs";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-list',
    template: `
    <div>
    <a routerLink="/create">Criar Usuário</a>
    </div>
   
     <app-search-input  [(search)]="search"/>
      @if (isLoading()) {
          <div>Carregando.....</div>
      } @else {
          <app-users-list [users]="users()" (remove)="remove($event)"/>
      }
    `,
    imports: [SearchInput, UsersList, RouterLink],
})

export class List implements OnInit {
  usersService = inject(Users);
  destroyRef = inject(DestroyRef);

  search = signal('');

  isLoading = signal(true)

  users = signal<User[]>([]);

  constructor(){
    effect(() => {
      this.isLoading.set(true);
      this.getUsers();
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  remove({id}: User){
    this.usersService.delete(id).subscribe(() => {
      this.users.update(users => users.filter(u => u.id !== id));
    })
  }

  private getUsers() {
    this.usersService.getAll(this.search()).pipe(takeUntilDestroyed(this.destroyRef), take(1)).subscribe((users) => {
      this.users.set(users);
      this.isLoading.set(false);
    });
  }
}