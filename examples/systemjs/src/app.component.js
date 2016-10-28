"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var components_1 = require('ng2-autocomplete-component/components');
var AppComponent = (function () {
    function AppComponent() {
        this.autocompleteConfigAPISource = new components_1.AutoCompleteConfig('http://localhost:3000/data/api-response.json', 1, 'search me..', 'id', 'name');
        this.autocompleteConfigArraySource = new components_1.AutoCompleteConfig([{ "id": 1, "name": "Tel-Aviv" }, { "id": 2, "name": "Haifa" }, { "id": 3, "name": "Ramat-Gan" }, { "id": 4, "name": "Herzlya" }], 1, 'search me..', 'id', 'name');
        this.selected = '';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sample-app',
            template: "\n        <hr>\n        <h1>ng2-autocomplete - data source form rest API (GET)</h1> \n        <autocomplete #apiSource [config]=\"autocompleteConfigAPISource\"></autocomplete>\n        <h4>* you need to leave field to see which term selected</h4>\n        <h2>RESULT SELECTED: </h2>{{apiSource.term.value}}\n        <hr>\n        <h1>ng2-autocomplete - data source from Array</h1> \n        <autocomplete #arraySource [config]=\"autocompleteConfigArraySource\"></autocomplete>\n        <h4>* you need to leave field to see which term selected</h4>\n        <h2>RESULT SELECTED: </h2>{{arraySource.term.value}}\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map