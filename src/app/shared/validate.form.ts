import { FormGroup } from '@angular/forms';

export abstract class FormValidateAndSubmit {

    protected abstract formGroup: FormGroup;

    protected abstract submitForm(): void;

    protected validateAndSubmit(): void {
        for (var i in this.formGroup.controls) {
            this.formGroup.controls[i].markAsDirty();
            this.formGroup.controls[i].updateValueAndValidity()
        }

        let isControlsValid = true;

        for (var i in this.formGroup.controls) {
            if (isControlsValid && this.formGroup.controls[i].invalid) {
                isControlsValid = false;
                break;
            }
        }

        if (isControlsValid && !this.formGroup.invalid) {
            this.submitForm();
        }
    }
}
