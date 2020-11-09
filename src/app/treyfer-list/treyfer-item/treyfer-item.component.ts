import { Component, Input, OnInit } from "@angular/core";
import { DataCypher, TreyferService } from "../../core/treyfer.service";

@Component({
  selector: "ns-treyfer-item",
  templateUrl: "./treyfer-item.component.html",
  styleUrls: ["./treyfer-item.component.scss"]
})
export class TreyferItemComponent implements OnInit {
    @Input()
    item: DataCypher;
    isVisible = false;
    constructor(private treyferService: TreyferService) {
    }

    // tslint:disable-next-line: no-empty
    ngOnInit(): void {
    }

    toggle() {
        if (this.isVisible) {
            const text = this.treyferService.encryp(this.item);

            this.item = {... this.item, text};
        } else {
            const text = this.treyferService.decryp(this.item);
            this.item.text = text;
        }
        this.isVisible = !this.isVisible;
    }
}
