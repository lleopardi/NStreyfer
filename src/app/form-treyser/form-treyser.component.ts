import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Subject } from "rxjs";
import * as app from "tns-core-modules/application";
import { alert, AlertOptions } from "tns-core-modules/ui/dialogs";

import { TreyferService } from "../core/treyfer.service";
import { FormRestrictions } from "./form-restrictions";

@Component({
    selector: "FormTreyser",
    templateUrl: "./form-treyser.component.html",
    styleUrls: ["./form-treyser.scss"]

})
export class FormTreyserComponent implements OnInit {

    get validForm() {
        return this.formCypher.valid;
    }

    formCypher: FormGroup;
    isVisible = false;
    alert = {
        text: new FormRestrictions("text", {min: 6, max: 12}),
        key: new FormRestrictions("key", {min: 8, max: 16})
    };

    constructor(
        private fb: FormBuilder,
        private treyferService: TreyferService
        ) {
    }

    ngOnInit(): void {
        this.formCypher = this.createForm();
    }

    createForm(): FormGroup {
        return this.fb.group({
            text: ["", Validators.compose([
                Validators.required,
                Validators.maxLength(this.alert.text.max),
                Validators.minLength(this.alert.text.min)])],
            key: ["", Validators.compose([
                Validators.required,
                Validators.maxLength(this.alert.key.max),
                Validators.minLength(this.alert.key.min)])]
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    showInfo(type: string) {
        const options: AlertOptions = this.alert[type];
        alert(options);
    }

    getError(controlName: string, error: string) {
        return this.formCypher.get(controlName).hasError(error) && this.formCypher.get(controlName).dirty;
    }

    submit() {
        if (this.isVisible) {
            this.clearForm();
        } else {
           this.cypherData();
        }
    }

    private clearForm() {
        this.isVisible = !this.isVisible;
        this.formCypher.reset();
    }

    private cypherData() {
        this.isVisible = !this.isVisible;
        const {text, key} = this.formCypher.value;
        const textEncrypted = this.treyferService.encryp({text, key});
        this.treyferService.addData({text: textEncrypted, key});
    }

}
