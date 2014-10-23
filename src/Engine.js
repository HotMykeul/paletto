'use strict';

var Engine = function () {

// private attributes and methods
    var board = new Array(6);
    for (var line = 0; line < 6; line++) {
        board[line] = new Array(6);
        for (var column = 0; column < 6; column++) {
            board[line][column] = 0;
        }
    }

// public methods
    this.init = function () {
        board[0][0] = "black";
        board[0][1] = "green";
        board[0][2] = "white";
        board[0][3] = "blue";
        board[0][4] = "red";
        board[0][5] = "white";
        board[1][0] = "yellow";
        board[1][1] = "white";
        board[1][2] = "green";
        board[1][3] = "red";
        board[1][4] = "yellow";
        board[1][5] = "blue";
        board[2][0] = "blue";
        board[2][1] = "yellow";
        board[2][2] = "blue";
        board[2][3] = "white";
        board[2][4] = "black";
        board[2][5] = "red";
        board[3][0] = "red";
        board[3][1] = "black";
        board[3][2] = "red";
        board[3][3] = "green";
        board[3][4] = "blue";
        board[3][5] = "white";
        board[4][0] = "white";
        board[4][1] = "green";
        board[4][2] = "yellow";
        board[4][3] = "black";
        board[4][4] = "yellow";
        board[4][5] = "green";
        board[5][0] = "yellow";
        board[5][1] = "blue";
        board[5][2] = "black";
        board[5][3] = "red";
        board[5][4] = "green";
        board[5][5] = "black";
    };

    this.checkJuxtaposition = function (){
        for(var line = 1; line < 5; line++){
            for(var column = 1; column < 5; column++){
                var currentColor = board[line][column];
                if(board[line - 1][column] == currentColor || board[line + 1][column] == currentColor) return false;
                if(board[line][column - 1] == currentColor || board[line][column + 1] == currentColor) return false;
            }
        }
        if(board[0][0] == board[0][1] || board[0][0] == board[1][0]) return false;
        if(board[5][5] == board[5][4] || board[0][0] == board[4][5]) return false;
        if(board[0][5] == board[1][5] || board[0][0] == board[0][4]) return false;
        if(board[5][0] == board[5][1] || board[0][0] == board[4][0]) return false;
        return true;
    }
};
