import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class feedbackService {

  private feedback = inject(MatSnackBar);

  sucess(message: string) {
    this.feedback.open(message, 'OK', {
      panelClass: 'snack-bar-sucess-feedback'
    })
  }

  constructor() { }
}
