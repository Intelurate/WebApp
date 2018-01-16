import { ShopApi  } from '../app';

describe('Test the root path', () => {
    
    test('It should response the GET method', (done) => {

        ShopApi.getVendorItems.request()
//        .query({ email: 'Manny', password: 'cat' })     
        .set('accept', 'json')  
        .then((response) => { 
            expect(response.statusCode).toBe(200);
            done();
        })
        .catch(err=>{
            console.log(err)
        })
            
    });
});


describe('Test Get Vendor Item', () => {
    
    test('It should response the GET method', (done) => {

        ShopApi.getVendorItem.request({ item_id : "5a3fc6c01cddf38cad61e331" })   
        .set('accept', 'json')  
        .then((response) => { 
            expect(response.statusCode).toBe(200);
            done();
        })
        .catch(err=>{
            console.log(err)
        })
            
    });
});

