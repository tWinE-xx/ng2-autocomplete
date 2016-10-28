import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {FormControl} from '@angular/forms'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import {AutoCompleteConfig} from './autocomplete.config';
 
@Component({
    selector: 'autocomplete',
    template:`
        <input type="text" [attr.list]="listUid" placeholder={{config.placeholder}} [formControl]="term"/>
        <datalist [id]="listUid">
            <option *ngFor="let result of filteredResults; let i = index;" value={{result[this.config.dataValue]}}>{{result[this.config.dataValue]}}</option>
        </datalist>
    `
})
export class AutoComplete {
    @Input() config: AutoCompleteConfig;
    term = new FormControl();
    repository: any;
    filteredResults: any;
    listUid: any;

    constructor(private http: Http){
        this.repository = [];
        this.filteredResults = [];
        this.listUid = new Date().getTime();
    }

    ngOnInit() {
        //set defualt suggest from chars to 1 if invalid
        if (this.config.suggestFromCharNumber<1)
            this.config.suggestFromCharNumber = 1;
        //array source
        if (Array.isArray(this.config.dataSource))
            return this.setDataSource.call(this, this.config.dataSource);
        //api url source
        return this.http.get(this.config.dataSource)
            .map((res) => res.json())
            .catch((error:any) => error.json().error)
            .map(this.setDataSource.bind(this))
            .subscribe(done=>{});
        
    }

    setDataSource(data){
        this.repository = data;
        this.reactToUserInput();
    }

    reactToUserInput(){
        this.term
            .valueChanges
            .filter(this.filterByTerm.bind(this))
            .subscribe(
                term=>this.filteredResults=this.repository.filter(item=>item[this.config.dataValue].toLowerCase().indexOf(term)>-1),
                err =>this.term.setValue(err)
            );
    }

    filterByTerm(term){
        if (term.length>this.config.suggestFromCharNumber-1)
            return true;
        this.filteredResults = [];
        return false;
    }
}

