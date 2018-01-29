'use strict';

var _app = require('../app');

describe('Test the root path', function () {

    test('It should response the GET method', function (done) {

        _app.ShopApi.getVendorItems.request()
        //        .query({ email: 'Manny', password: 'cat' })     
        .set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});

describe('Test Get Vendor Item', function () {

    test('It should response the GET method', function (done) {

        _app.ShopApi.getVendorItem.request({ item_id: "5a3fc6c01cddf38cad61e331" }).set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});