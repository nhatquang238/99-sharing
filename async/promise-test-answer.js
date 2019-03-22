/*
Task:
- request all files asynchronously
- print them out in order of file1 response > file2 response > file3 response
- print result as soon as it returns
- after all done, print "Completed!"
- only rely on promise without any promise helper (i.e Promise.all)
*/


function fakeAjax(url,cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    };
    var randomDelay = Math.round(Math.random() * 1E4);

    console.log("Requesting: " + url);

    setTimeout(function(){
        cb(fake_responses[url]);
    },randomDelay);
}

function output(text) {
    console.log(text);
}

function getFile(file) {
  return new Promise(function (resolve) {
    fakeAjax(file, resolve);
  });
}

const p1 = getFile('file1');
const p2 = getFile('file2');
const p3 = getFile('file3');

p1
  .then(output)
  .then(function () {
    return p2;
  })
  .then(output)
  .then(function () {
    return p3;
  })
  .then(output)
  .then(function () {
    output('Completed');
  });
