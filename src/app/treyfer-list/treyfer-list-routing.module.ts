import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TreyferListComponent } from "./treyfer-list.component";

const routes: Routes = [{ path: "", component: TreyferListComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TreyferListRoutingModule {}
