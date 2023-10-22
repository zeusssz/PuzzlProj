let inputField = document.getElementById('input');
let combination = '';
let correctCombination = '91226676';

function addToInput(value) {
    combination += value;
    inputField.value = combination;
}

function checkCombination() {
    if (combination === correctCombination) {
        alert('Congratulations! You Solved The "Puzzl"');
        window.location.href = 'welivewelovewelie.html';
    } else {
        alert('Incorrect combination.');
        combination = '';
        inputField.value = '';
    }
}
