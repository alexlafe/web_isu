let piecePole = document.getElementById('piece-pole');
let resultPole = document.getElementById('result-pole');

let piecesPol = [];
let resPol = [];

let positionX;
let positionY = 300;

const piecePoleWidth = 600;
const piecePoleHeight = 600;
const pieceWidth = 50;
const pieceHeight = 50;

let piecePos;

let pieceClick = function(e)
{
    /*for (let j = 0; j < 6; j++)
    {
        for (let i = 0; i < 9; i++)
        {
            piecesPol[j][i].className = 'piece';
        }
    }*/
    piecePos = e.target;
    piecePos.className = 'piece_select';

    console.log(piecePos.posX);
    console.log(piecePos.posY);
}

let resultPos;

let resultClick = function(e)
{
    resultPos = e.target;

    console.log(resultPos.posX);
    console.log(resultPos.posY);

    truth();
}

let truth = function()
{
    if (piecePos.posX === resultPos.posX && piecePos.posY === resultPos.posY)
    {
        console.log('yes!');
        piecePos.remove();
        resultPos.className = 'result_res';
    }
    else
    {
        console.log('no!');
        piecePos.className = 'piece';
    }
}

for (let j = 0; j < 6; j++)
{
    piecesPol[j] = [];

    positionX = 450; //позиция бэкграунда

    for (let i = 0; i < 9; i++)
    {
        let piece = document.createElement('div');
        piece.className = 'piece';

        piece.style.backgroundPositionX = positionX + "px";
        piece.style.backgroundPositionY = positionY + "px";

        piece.posX = piece.style.backgroundPositionX;
        piece.posY = piece.style.backgroundPositionY;

        piece.style.left = Math.random() * (piecePoleWidth - pieceWidth) + "px";
        piece.style.top = Math.random() * (piecePoleHeight - pieceHeight) + "px";
        
        piecePole.append(piece);
        piece.addEventListener('click', pieceClick);
        piecesPol[j][i] = piece;

        positionX -= 50;
    }
    positionY -= 50;
}

positionY = 300;

for (let j = 0; j < 6; j++)
{
    resPol[j] = [];

    positionX = 450;

    for (let i = 0; i < 9; i++)
    {
        let result = document.createElement('div');
        result.className = 'result';
        
        result.style.backgroundPositionX = positionX + "px";
        result.style.backgroundPositionY = positionY + "px";

        result.posX = result.style.backgroundPositionX;
        result.posY = result.style.backgroundPositionY;

        resultPole.append(result);
        result.addEventListener('click', resultClick);
        resPol[j][i] = result;

        positionX -= 50;
    }
    positionY -= 50;
}