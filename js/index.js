'use strict';

let playing = true;

function Position(row, column) {
    this.row = 0;
    this.column = 0;
    this.DOMElement = document.getElementById((this.row.toString() + this.column.toString()));
}

Position.prototype.updateDOMElement = function () {
    this.DOMElement = document.getElementById((this.row.toString() + this.column.toString()));
}

let playerPosition = new Position();
let lastPosition = new Position();

//assigns the value of the current position to the last position object to be modified in the DOM
function assignLastPosition() {
    lastPosition.row = playerPosition.row;
    lastPosition.column = playerPosition.column;
}

function changeVisualPosition() {
    lastPosition.updateDOMElement();
    let lP = $(lastPosition.DOMElement);
    lP.removeClass("Player");
    playerPosition.updateDOMElement();
    let pP = $(playerPosition.DOMElement);
    pP.addClass("Player");
}

function moveLeft(playerPosition) {
    if (playerPosition.column > 0) {
        assignLastPosition();
        playerPosition.column -= 1;
        changeVisualPosition();
    }
}

function moveRight(playerPosition) {
    if (playerPosition.column < 3) {
        assignLastPosition();
        playerPosition.column += 1;
        changeVisualPosition();
    }
}

function moveUp(playerPosition) {
    if (playerPosition.row > 0) {
        assignLastPosition();
        playerPosition.row -= 1;
        changeVisualPosition();
    }
}

function moveDown(playerPosition) {
    if (playerPosition.row < 3) {
        assignLastPosition();
        playerPosition.row += 1;
        changeVisualPosition();
    }
}

function movePlayer() {
    $('html').on("keydown", function (e) {
        e.preventDefault(); // prevent the default action (scroll / move caret)
        if (playing) {
            switch (e.which) {
                case 37:
                    moveLeft(playerPosition);
                    addLeftArrow();
                    break;

                case 38:
                    moveUp(playerPosition);
                    addUpArrow();
                    break;

                case 39:
                    moveRight(playerPosition);
                    addRightArrow();
                    break;

                case 40:
                    moveDown(playerPosition);
                    addDownArrow();
                    break;

                default: return; // exit this handler for other keys
            }
        }
        checkForWin();
    });

}

$(document).ready(movePlayer());


function addLeftArrow() {
    lastPosition.updateDOMElement();
    let lP = $(lastPosition.DOMElement);
    lP.addClass("leftArrow");
    lP.empty();
    lP.append('<i class="material-icons">arrow_back</i>');
}

function addRightArrow() {
    lastPosition.updateDOMElement();
    let lP = $(lastPosition.DOMElement);
    lP.addClass("rightArrow");
    lP.empty();
    lP.append('<i class="material-icons">arrow_forward</i>');
}

function addUpArrow() {
    lastPosition.updateDOMElement();
    let lP = $(lastPosition.DOMElement);
    lP.addClass("upArrow");
    lP.empty();
    lP.append('<i class="material-icons">arrow_upward</i>');
}

function addDownArrow() {
    lastPosition.updateDOMElement();
    let lP = $(lastPosition.DOMElement);
    lP.addClass("downArrow");
    lP.empty();
    lP.append('<i class="material-icons">arrow_downward</i>');
}

function checkForWin() {
    if ($('#00').html() == $('#sol00').html() &&
        $('#01').html() == $('#sol01').html() &&
        $('#02').html() == $('#sol02').html() &&
        $('#03').html() == $('#sol03').html() &&

        $('#10').html() == $('#sol10').html() &&
        $('#11').html() == $('#sol11').html() &&
        $('#12').html() == $('#sol12').html() &&
        $('#13').html() == $('#sol13').html() &&

        $('#20').html() == $('#sol20').html() &&
        $('#21').html() == $('#sol21').html() &&
        $('#22').html() == $('#sol22').html() &&
        $('#23').html() == $('#sol23').html() &&

        $('#30').html() == $('#sol30').html() &&
        $('#31').html() == $('#sol31').html() &&
        $('#32').html() == $('#sol32').html() &&
        $('#33').html() == $('#sol33').html()) {
        levelSolved();
    }
}

function levelSolved() {
    playing = false;
    $('#completedLevel').removeClass('invisible');
    $('#startover').addClass('invisible');
}