const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 
    113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100,
    102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109,
    44, 46, 47, 92, 32];

let newDiv = document.createElement('div');
newDiv.className = "wrapper";

let newDiv1 = document.createElement('textarea');
newDiv1.className = "textarea";
newDiv.appendChild(newDiv1);

let newDiv2 = document.createElement('div');
newDiv2.className = "keyboard";
newDiv.appendChild(newDiv2);

document.body.appendChild(newDiv);

console.log(newDiv);

function init() {

    let out = '';
    for (i = 0; i < keyboard.length; i++) {
        if (i == 14 || i == 27 || i == 39 || i == 50) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="k-key" data="'+ keyboard[i] +'">' + String.fromCharCode(keyboard[i]) + '</div>';
    }
    
    document.querySelector ('.keyboard').innerHTML = out;

}

init();

document.onkeypress = function(events) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.keyboard .k-key').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector('.keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');

}

document.onkeydown = function(event) {
    console.log(event.code);
    console.log(event.keyCode);
    document.querySelectorAll('.keyboard .k-key').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector('.keyboard .k-key[data="'+ event.keyCode +'"]').classList.add('active');
}

document.querySelectorAll('.keyboard .k-key').forEach(function(element) {
    element.onclick = function (event) {
        document.querySelectorAll('.keyboard .k-key').forEach(function(element) {
            element.classList.remove('active');
        });

        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
});
