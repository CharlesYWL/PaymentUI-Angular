import { AsyncValidator, FormControl } from '@angular/forms';
import { EnzoicService } from '../services/enzoic.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompromisedPassword implements AsyncValidator {
  constructor(private enzoic: EnzoicService) {}

  validate = (control: FormControl) => {
    return this.enzoic.checkPassword(control.value).pipe(
      map(() => {
        return { compromised: true };
      }),
      catchError((err) => {
        console.log(err);

        return of(null);
      })
    );
  };
}
