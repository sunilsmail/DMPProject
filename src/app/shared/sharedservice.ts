import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private _title: string = null;

    constructor() {}

    public get title(): string {
        return this._title;
    }
    
    public set title(value: string) {
        this._title = value;
    }

}