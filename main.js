'use strict'

//get items
let resultDetails = document.getElementsByClassName('resultItem');
let resultSummary = document.getElementsByClassName('resultItemSummary');
let resultBtn = document.getElementsByClassName('div-btn');
console.log(resultBtn);

//create a new div
let virtualDiv;



let mainLoop = function () {
    for (let i = 0; i < resultDetails.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('div-btn');
        newDiv.innerHTML = 'Click..';
        resultDetails[i].after(newDiv);
    };

    for (let b = 0; b < resultBtn.length; b++) {
        resultBtn[b].addEventListener('click', function (e) {
            let thisBtnParent = this.parentNode;
            let thisBtnNextSibling = thisBtnParent.lastElementChild;
            thisBtnNextSibling.classList.toggle('hide');
            if (thisBtnNextSibling.classList.contains('hide')) {
                this.innerText = 'Show'
            } else {
                this.innerText = 'Hide'
            }
        });
    };
}

mainLoop();
