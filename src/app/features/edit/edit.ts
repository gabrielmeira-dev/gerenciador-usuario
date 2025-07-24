import { Component, computed, inject, OnInit, signal } from '@angular/core';
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
  activatedRoute = inject(ActivatedRoute);

  user = signal(this.activatedRoute.snapshot.data['user']);

  router = inject(Router);

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

    this.usersService.put(this.user().id,{ name: user }).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
