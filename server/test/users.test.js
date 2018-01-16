import { UsersApi} from '../app';

describe('Test the root path', () => {

    test('It should response the GET method', (done) => {

        UsersApi.TestApiPost.request()
        .send({ email: 'Manny', password: 'cat' })     
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



describe('Test the root path', () => {

    test('It should response the GET method', (done) => {

        UsersApi.Login.request()
        .send({ email: 'Manny', password: 'cat' })     
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



describe('Test the root path', () => {

    test('It should response the GET method', (done) => {

        UsersApi.TestApiGet.request()
        .query({ email: 'Manny', password: 'cat' })     
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

