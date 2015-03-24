var Phish = {};

Phish.Phishin = function (settings) {
    if (!(this instanceof Phish.Phishin)) {
        return new Phish.Phishin(settings);
    }

    var baseUrl = 'http://phish.in/api/v1/';

    ['Eras', 'Years', 'Songs', 'Tours', 'Shows', 'Tracks'].forEach(function (value) {
        this['get'+value] = function (id, params) {
            return this._get(value.toLowerCase(), id, params);
        };
    }.bind(this));

    this._get = function (type, id, params) {

        var url = baseUrl + type + (id ? '/' + id + '/' : '/');
        return Phish.fetch(url);
    };

    return this;
};
