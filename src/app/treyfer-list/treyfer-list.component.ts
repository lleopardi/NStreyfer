import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { DataCypher, TreyferService } from "../core/treyfer.service";

@Component({
    selector: "List",
    templateUrl: "./treyfer-list.component.html"
})
export class TreyferListComponent implements OnInit {

    listItems: Array<DataCypher> = [];

    constructor(private treyferService: TreyferService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.listItems = this.treyferService.findAll();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
