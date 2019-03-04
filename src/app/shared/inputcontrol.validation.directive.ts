import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgModel } from '@angular/forms';


@Directive({
    selector: "[ccValidateInput]",
    providers: [NgModel]
})
export class ValidateInputDirective {

    // @Input('form') form: FormGroup;
    // @Input('fieldName') fieldName: string;
    // @Input('displayname') displayname: string;

    @Input("ccValidateInput") config: any = {
        form: null,
        fieldName: null,
        displayname: null
    }


    @HostListener('keyup', ['$event']) onKeyUp(event) {
        let value = this.ngModel.model;
        this.ngModel.update.emit(value);
      }
    constructor(private el: ElementRef, private renderer: Renderer2, private ngModel: NgModel) {
    }


    ngOnInit() {
        const controlState = this.config.form.controls[this.config.fieldName];
        const controlValid = ((controlState.dirty || controlState.touched) && controlState.errors) ? controlState.errors : null;
        if (controlValid) {

        }else{
            // console.log("No Validation")
        }
        // console.log(this.config);
        // console.log(this.el);
        // console.log(controlState);
    }
}