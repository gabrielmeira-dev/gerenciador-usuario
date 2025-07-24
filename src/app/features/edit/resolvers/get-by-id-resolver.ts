import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Users } from '../../../shared/services/users';
import { User } from '../../../shared/interfaces/user';

export const getByIdResolver: ResolveFn<User> = (route, state) => {
  const usersService = inject(Users);
  const id = route.paramMap.get('id')!;

  return usersService.getById(id);
};
