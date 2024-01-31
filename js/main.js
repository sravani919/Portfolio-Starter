document.getElementById('query-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var plant = document.getElementById('plant').value;
    var animal = document.getElementById('animal').value;
    var poetryTitle = document.getElementById('poetry-title');
    var poetryBody = document.getElementById('poetry-body');
    
    if (plant && animal) {
        poetryTitle.innerText = 'Nature Poem';
        poetryBody.innerText = `The beauty of the ${plant} and the grace of the ${animal} inspire a sense of wonder.`;
    } else {
        poetryTitle.innerText = '';
        poetryBody.innerText = '';
    }
});

function resetResults() {
    document.getElementById('poetry-title').innerText = '';
    document.getElementById('poetry-body').innerText = '';
}

function toolTipReset() {
    // Tooltip reset functionality here
}
