'use strict';

var _app = require('../app');

describe('Test the root path', function () {

    test('It should response the GET method', function (done) {

        _app.UsersApi.TestApiPost.request().send({ email: 'Manny', password: 'cat' }).set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});

describe('Test the root path', function () {

    test('It should response the GET method', function (done) {

        _app.UsersApi.Login.request().send({ email: 'Manny', password: 'cat' }).set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});

describe('Test the root path', function () {

    test('It should response the GET method', function (done) {

        _app.UsersApi.TestApiGet.request().query({ email: 'Manny', password: 'cat' }).set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});