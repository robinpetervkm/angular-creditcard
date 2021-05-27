import { FormControl } from '@angular/forms';
export class DateFromControl extends FormControl {
  setValue(value: String, options: any) {
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
