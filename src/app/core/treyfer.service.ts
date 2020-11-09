import { Injectable } from "@angular/core";
import { Couchbase } from "nativescript-couchbase-plugin";
const database = new Couchbase("treyfer");

const treyferLib = require("nativescript-tryfer");

export interface DataCypher {
    text: string;
    key: string;
}

@Injectable({
  providedIn: "root"
})
export class TreyferService {

    encryp(data: DataCypher): string {
        const { text, key} = data;

        return treyferLib.encrypt(text, key);
    }

    decryp(data: DataCypher): string {
        const { text, key} = data;

        return treyferLib.decrypt(text, key);
    }

    addData(item: DataCypher) {
        database.createDocument({...item});
    }

    findAll(): Array<DataCypher> {
        return database.query({
            select: []
        });
    }

}
