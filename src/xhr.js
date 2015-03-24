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
