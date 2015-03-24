[![Build Status](https://travis-ci.org/lholmquist/phishin-js.svg)](https://travis-ci.org/lholmquist/phishin-js)

### A Javascript Library for http://phish.in.

## Pre-Reqs

* Node
* Bower
* grunt-cli

## Building

`npm install`

`bower install`

`grunt`

## Releases

Releases will be in the `dist` folder

## API

Most all of the endpoints listed here, http://phish.in/api-docs,  have corresponding `get` functions that return a Promise

For example,  to get all years:

    var ph = Phish.Phishin();

    ph.getYears().then(function (response) {
        console.log(response);
    });

Or just 1 year:

    ph.getYears('1997').then(function (response) {
        console.log(response);
    });


All functions take an optional `id` and `params`

### params

An Array of Strings

* sort_attr
* sort_dir
* per_page
* page


so for example if you wanted to sort by name:

    params = ['sort_attr=name'];


## Next and Previous

For convenience, there are `next` and `previous` methods on the response object.

Calling `next` will fetch the next page if there is one or `previous` will fetch the previous page if ther is one.

Example:

    var ph = Phish.Phishin();

    ph.getSongs().then(function (response) {
        // Response might return a whole lot
        // And be Paged
        console.log(response); // Page 1 Results

        return response.next();
    }).then(function (response) {
        console.log(response); // Page 2 Results

        return response.previous();
    }).then(function (response) {
        console.log(response); // Page 1 Results
    });

### Resources

http://phish.in/api-docs
