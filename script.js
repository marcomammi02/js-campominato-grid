const eleBtnPlay = document.querySelector('.btn-play');
const eleTable = document.querySelector('.table');

eleBtnPlay.addEventListener('click', function() {
    for (let i = 1; i <= 100; i++) {
        const eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        eleCell.innerHTML += i;
        eleTable.append(eleCell);

        eleCell.addEventListener('click', function() {
            eleCell.classList.toggle('active');
            console.log('Hai selezionato la casella: ' + i)
        })
    }
})