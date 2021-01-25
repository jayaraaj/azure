import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LeftPanelService {

    private _panelMode = new BehaviorSubject<boolean>(true);

    private _coursePercentage = new BehaviorSubject<any>(null);

    

    constructor(
        private _http: HttpClient
    ) {
        
    }
    
    getMenuList() {
        return this._http.get("assets/json/left-menu.json");
    }

    togglePanel(mode) {
        this._panelMode.next(mode);
    }

    get panelMode () {
        return this._panelMode.asObservable();
    }

    get coursePercentage(){
        return this._coursePercentage.asObservable();
    }

    increaseCourse(value) {
        

        this._coursePercentage.next(value);
    }


    
}