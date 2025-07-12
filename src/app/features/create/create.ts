import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../../shared/services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {

  usersService = inject(Users);
  router = inject(Router);

 form = new FormGroup({
    name: new FormControl('', {validators: [Validators.required], nonNullable: true}),
 });

 submit(){
    const user = this.form.controls.name.value;

    this.usersService.post({name: user}).subscribe(() => {
     this.router.navigateByUrl('')
    })
 }
}
