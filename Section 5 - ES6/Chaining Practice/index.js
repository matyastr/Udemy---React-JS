/*jshint esversion: 6 */

const postListPromise = new Promise((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        resolve(data);
    }).fail(err => {
        reject(new Error(`Call failed for GET POST List Request with status ${err.status}`));
    });
});

const postDetailsPromise = (data) => new Promise((resolve, reject) => {
    $.get(`https://jsonplaceholder.typicode.com/posts/${data[0].id}`, (data) => {
        resolve(data);
    }).fail(err => {
        reject(`DETAILS CALL FAILED and status ${err.status}`);
    });
});

const commentsPromise = new Promise((resolve, reject) => {
    $.get(`http://jsonplaceholder.typicode.com/comments`, (data) => {
        resolve(data);
    }).fail(err => {
        reject(`COMMENTS CALL FAILED and status ${err.status}`);
    });
});


postListPromise
.then(postDetailsPromise)
.then(response => {
    console.log('POST DETAILS RESPONSE => ', response);
})
.catch((error) => {
    console.log('Call Failed');
    console.log('Catch Error => ', error);
});


commentsPromise
.then(response => {
    console.log('COMMENTS DETAILS RESPONSE => ', response);
})
.catch((error) => {
    console.log('Call Failed');
    console.log('Catch Error => ', error);
});