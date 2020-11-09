import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TreyferItemComponent } from "./treyfer-item/treyfer-item.component";

import { TreyferListRoutingModule } from "./treyfer-list-routing.module";
import { TreyferListComponent } from "./treyfer-list.component";

@NgModule({
    imports: [NativeScriptCommonModule, TreyferListRoutingModule],
    declarations: [TreyferListComponent, TreyferItemComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TreyferListModule {}
