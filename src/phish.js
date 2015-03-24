var Phish = {};

Phish.Phishin = function (settings) {
    if (!(this instanceof Phish.Phishin)) {
        return new Phish.Phishin(settings);
    }

    var baseUrl = 'http://phish.in/api/v1/';

    ['Eras', 'Years', 'Songs', 'Tours', 'Shows', 'Tracks', 'Venues'].forEach(function (value) {
        this['get'+value] = function (id, params) {
            return this._get(value.toLowerCase(), id, params);
        };
    }.bind(this));

    this._get = function (type, id, params) {

        var urlParamed, url, self = this;

        urlParamed = url = baseUrl + type + (id ? '/' + id + '/' : '/');

        if (params) {
            urlParamed = url + '?' + params.join('&');
        }

        return Phish.fetch(urlParamed).then(function (response) {
            ['next', 'previous'].forEach(function (value) {
                response[value] = (function () {
                    return function () {
                        if (response.page === response.total_pages) {
                            return Promise.resolve(null);
                        }

                        var page = response.page;

                        if (value === 'next') {
                            page++;
                        } else {
                            page--;
                        }

                        if (response.page < 1) {
                            return Promise.resolve(null);
                        }

                        return self._get(type, id, ['page=' + page]);
                    };
                })();
            });

            return response;
        });
    };

    return this;
};
