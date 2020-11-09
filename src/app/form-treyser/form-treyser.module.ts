import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FormTreyserRoutingModule } from "./form-treyser-routing.module";
import { FormTreyserComponent } from "./form-treyser.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FormTreyserRoutingModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        FormTreyserComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FormTreyserModule { }
