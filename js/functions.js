'use strict';

const newRowBtn = document.getElementById('newRowBtn');
const rowCountDisplay = document.getElementById('rowCount');
const jokeriTable = document.getElementById('jokeriTable');

let rowCount = 0;

const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
};

newRowBtn.addEventListener('click', () => {
    const newRow = jokeriTable.insertRow();
    
    for (let i = 0; i < 7; i++) {
        const newCell = newRow.insertCell();
        newCell.textContent = getRandomNumber();
    }

    rowCount++;
    rowCountDisplay.textContent = rowCount;
});