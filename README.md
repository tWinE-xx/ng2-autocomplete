
# ng2-autocomplete-component

# Installation
```js
npm install ng2-autocomplete-component
```

## Install & run the sample application (usage demo) 
    
    cd examples/systemjs
    npm install
    npm start
    
Then access [http://localhost:3000](http://localhost:3000)

## Usage

### import AutoComplete components and AutoCompleteConfig class

```js
import {AutoComplete, AutoCompleteConfig} from 'ng2-autocomplete-component/components';
```

### initalize AutoCompleteConfig class
<p>
for autocomplete data from rest api (GET) 
</p>
```js
let apiUrl = 'http://localhost:3000/data/api-response.json';
let minCharsForSearch = 1;
let placeholder = 'search..';//min amount of chars before autocomplete mayches results
let responseApiKey = 'id';//a reference to the key for example api response [{"id":1,"name":"USA"}, {..}]
let responseApiText = 'name';//a reference to the text for example api response [{"id":1,"name":"USA"}, {..}]
//init config class
this.autocompleteConfigAPISource = new AutoCompleteConfig(apiUrl, minCharsForSearch, placeholder, responseApiKey, responseApiText); 
```

<p>
for autocomplete data from Array
</p>
```js
let dataArray = [{"id":1,"name":"USA"}, {"id":1,"name":"UK"}, {"id":1,"name":"Italy"}];
let minCharsForSearch = 1;
let placeholder = 'search..';//min amount of chars before autocomplete mayches results
let responseApiKey = 'id';//a reference to the key for example api response [{"id":1,"name":"USA"}, {..}]
let responseApiText = 'name';//a reference to the text for example api response [{"id":1,"name":"USA"}, {..}]
//init config class
this.autocompleteConfigAPISource = new AutoCompleteConfig(dataArray, minCharsForSearch, placeholder, responseApiKey, responseApiText); 
```

### put component in template
```js
template: `
        <hr>
        <h1>ng2-autocomplete - data source form rest API (GET)</h1>
        <!-- *** you must put #id on component to get the result back --> 
        <autocomplete #myAutoCompleteId [config]="autocompleteConfigAPISource"></autocomplete>
        <h4>* you need to leave field to see which term selected</h4>
        <!-- use selected value using component id -->
        <h2>RESULT SELECTED: </h2>{{myAutoCompleteId.term.value}}
    `
```