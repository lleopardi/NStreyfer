import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "form", loadChildren: () =>
        import("~/app/form-treyser/form-treyser.module").then((m) => m.FormTreyserModule)
    },
    { path: "list", loadChildren: () =>
        import("~/app/treyfer-list/treyfer-list.module").then((m) => m.TreyferListModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
