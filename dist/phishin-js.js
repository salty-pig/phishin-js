/*! phishin-js -  0.0.1 - 2015-03-24 */
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

Phish.fetch = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();


        xhr.open('GET', url, true);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onload = function () {
            var response = xhr.response;

            if (xhr.status > 399) {
                // Error
                return reject(xhr);
            }

            return resolve(response);
        };

        xhr.onerror = function () {
            return reject(xhr);
        };

        xhr.send();
    });
};
