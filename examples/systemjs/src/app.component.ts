import {Component} from '@angular/core'

import {AutoComplete} from 'ng2-autocomplete-component/components';
import {AutoCompleteConfig} from 'ng2-autocomplete-component/components';

@Component({
    selector: 'sample-app',
    template: `
        <hr>
        <h1>ng2-autocomplete - data source form rest API (GET)</h1> 
        <autocomplete #apiSource [config]="autocompleteConfigAPISource"></autocomplete>
        <h4>* you need to leave field to see which term selected</h4>
        <h2>RESULT SELECTED: </h2>{{apiSource.term.value}}
        <hr>
        <h1>ng2-autocomplete - data source from Array</h1> 
        <autocomplete #arraySource [config]="autocompleteConfigArraySource"></autocomplete>
        <h4>* you need to leave field to see which term selected</h4>
        <h2>RESULT SELECTED: </h2>{{arraySource.term.value}}
    `
})
export class AppComponent {
    autocompleteConfigAPISource: AutoCompleteConfig;
    autocompleteConfigArraySource: AutoCompleteConfig;
    selected: any;
    
    constructor(){
        this.autocompleteConfigAPISource = new AutoCompleteConfig('http://localhost:3000/data/api-response.json', 1, 'search me..', 'id', 'name'); 
        this.autocompleteConfigArraySource = new AutoCompleteConfig([{"id": 1, "name":"Tel-Aviv"},{"id": 2, "name":"Haifa"},{"id": 3, "name":"Ramat-Gan"},{"id": 4, "name":"Herzlya"}], 1, 'search me..', 'id', 'name'); 
        this.selected = '';
    }
}