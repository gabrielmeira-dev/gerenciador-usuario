import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Users } from '../../shared/services/users';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../shared/interfaces/user';
import { feedbackService } from '../../shared/feedback/services/feedback';
import { tap } from 'rxjs';

@Component({
  selector: 'app-edit',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit implements OnInit {
  usersService = inject(Users);
  feedbackService = inject(feedbackService);
  router = inject(Router);

  user = input.required<User>()

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  ngOnInit() {
    this.form.controls.name.setValue(this.user().name);
  }

  submit() {
    const user = this.form.controls.name.value;

    this.usersService.put(this.user().id,{ name: user }).pipe(
            tap(() =>
              this.feedbackService.sucess('Usuário alterado com sucesso!')
            )
          ).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
