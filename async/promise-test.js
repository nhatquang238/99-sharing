/* 
Task: 
- request all files asynchronously
- print them out in order of file1 > file2 > file3
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
  /* body of getFile? */  
}
