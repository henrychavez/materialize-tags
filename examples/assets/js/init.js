/**
 * Create a citynames Bloodhound
 *
 * @type {Bloodhound}
 */
var citynames = new Bloodhound({
    datumTokenizer : Bloodhound.tokenizers.obj.whitespace('name'),
    queryTokenizer : Bloodhound.tokenizers.whitespace,
    prefetch       : {
        url    : 'assets/data/citynames.json',
        filter : function (list)
        {
            return $.map(list, function (cityname)
            {
                return {name : cityname};
            });
        }
    }
});
citynames.initialize();

/**
 * Create a cities Bloodhound
 *
 * @type {Bloodhound}
 */
var cities = new Bloodhound({
    datumTokenizer : Bloodhound.tokenizers.obj.whitespace('text'),
    queryTokenizer : Bloodhound.tokenizers.whitespace,
    prefetch       : 'assets/data/cities.json'
});
cities.initialize();

/**
 * Typeahead
 */
var elt = $('#example-typeahead input.typehead-input');
elt.materialtags({
    freeInput:false,
    typeaheadjs : {
        name       : 'citynames',
        displayKey : 'name',
        valueKey   : 'name',
        source     : citynames.ttAdapter()
    }
});

/**
 * Objects as tags
 */
elt = $('#example_objects input.object-tag-input');
elt.materialtags({
    itemValue   : 'value',
    itemText    : 'text',
    typeaheadjs : {
        name       : 'cities',
        displayKey : 'text',
        source     : cities.ttAdapter()
    }
});

elt.materialtags('add', {"value" : 1, "text" : "Amsterdam", "continent" : "Europe"});
elt.materialtags('add', {"value" : 4, "text" : "Washington", "continent" : "America"});
elt.materialtags('add', {"value" : 7, "text" : "Sydney", "continent" : "Australia"});
elt.materialtags('add', {"value" : 10, "text" : "Beijing", "continent" : "Asia"});
elt.materialtags('add', {"value" : 13, "text" : "Cairo", "continent" : "Africa"});