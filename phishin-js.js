(function (window, undefined) {

    function makeRequest(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest(),
                baseUrl = 'http://phish.in/api/v1/';


            xhr.open('GET', (url.indexOf(baseUrl) > -1) ? url : baseUrl + url, true);

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
    }

    var Phishin = function (settings) {
        ['Eras', 'Years', 'Songs', 'Tours', 'Shows', 'Tracks'].forEach(function (value) {
            this['get'+value] = function (id, params) {
                return this._get(value.toLowerCase(), id, params);
            };
        }.bind(this));

        this._get = function (type, id, params) {
            return makeRequest(type + (id ? '/' + id + '/' : '/'));
        };

        return this;
    };

    window.Phishin = Phishin;

})(window);
