'use strict';

var _app = require('../app');

describe('Test the root path', function () {

    test('It should response the GET method', function (done) {

        _app.PurchaseOrderApi.getPurchaseOrders.request({ po_id: "5a4f7b177e85213abe489a01" })
        //        .query({ email: 'Manny', password: 'cat' })     
        .set('accept', 'json').then(function (response) {
            expect(response.statusCode).toBe(200);
            done();
        }).catch(function (err) {
            console.log(err);
        });
    });
});