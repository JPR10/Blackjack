/**
* 
* Challenge 1: Your age in days
=====================================*/

function ageInDays() {
    var birthYear = prompt('What year you were born in?');
    var ageInDayss = (2019 - birthYear) * 365;
    var h4 = document.createElement('h4');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h4.setAttribute('id', 'ageInDays');
    h4.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h4);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

/**
* 
* Challenge 1.1: Hours to seconds
=====================================*/

function hoursToSeconds() {
    var hours = prompt('Insert hours..');
    var hoursToSecondss = hours * 60 * 60;
    var h4 = document.createElement('h4');
    var textAnswer = document.createTextNode( hoursToSecondss + ' seconds');
    h4.setAttribute('id', 'hts');
    h4.appendChild(textAnswer);
    document.getElementById('flex-box-result-2').appendChild(h4);
}

function resetSeconds() {
    document.getElementById('hts').remove();
}

/**
* 
* Challenge 1.2: KM to Miles
=====================================*/

function kmToMiles() {
    var km = prompt('Insert KM..');
    var kmToMiless = km * 0.62137;
    var test = kmToMiless.toFixed(2)
    var h4 = document.createElement('h4');
    var textAnswer = document.createTextNode( test + ' miles');
    h4.setAttribute('id', 'ktm');
    h4.append(textAnswer);
    document.getElementById('flex-box-result-3').appendChild(h4);
}

function resetMiles() {
    document.getElementById('ktm').remove();
}