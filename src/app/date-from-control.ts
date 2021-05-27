import { FormControl } from '@angular/forms';
export class DateFromControl extends FormControl {
  setValue(value: String, options: any) {
    console.log(value);
    super.setValue(value+'*',options);
  }
}
