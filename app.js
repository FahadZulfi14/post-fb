
var writePost = document.getElementById('writePost');
var upload = document.getElementById('show');
var clr = document.getElementById('clr');
var time = moment(new Date("Wed May 31 2023 20:38:19 GMT+0500 (Pakistan Standard Time)"), "YYYYMMDD").fromNow();
var timePost = document.getElementById('time');





describ
function f10(e) {
    clr = e.value;
    writePost.style.backgroundColor = clr;
}
function post() {
    timePost.innerText=time
    var writePost = document.getElementById('writePost');
    var describ = document.getElementById('describ');
    describ.innerText = writePost.value;
    upload.innerText = writePost.value;
    upload.style.backgroundColor = clr;
    writePost.value = "";
    writePost.style.backgroundColor = "";



    var list = document.getElementById('list');
    var li = document.createElement('li');
    var item = document.getElementById('container2');

    li.appendChild(item);
    list.appendChild(li);
}

