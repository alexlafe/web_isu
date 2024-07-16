let playPad = document.getElementById('play-pad');

// playPad.addEventListener('click', function(e){});

let sizeX = 12;
let sizeY = 12;

let bombMap = [];

let hintMap = [];

let cellMap = [];

let nBomb = 0;

let cursorX = 0;
let cursorY = 0;

let incrementBombZone = function(x, y)
{
    if (x > 0)
    {
        hintMap[y][x - 1]++;
    }

    if (x < hintMap[y].length - 1)
    {
        hintMap[y][x + 1]++;
    }

    if (y > 0)
    {
        hintMap[y - 1][x]++;
    }

    if (y < hintMap.length - 1)
    {
        hintMap[y + 1][x]++;
    }

    if (x > 0 && y > 0)
    {
        hintMap[y - 1][x - 1]++;
    }

    if (x > 0 && y < hintMap.length - 1)
    {
        hintMap[y + 1][x - 1]++;
    }

    if (y > 0 && x < hintMap[y].length - 1)
    {
        hintMap[y - 1][x + 1]++;
    }

    if (y < hintMap.length - 1 && x < hintMap[y].length - 1)
    {
        hintMap[y + 1][x + 1]++;
    }
}

let gameStarted = false;
let gameEnd = false;

let cellClick = function(e)
{
    let cell = e.target;

    if (!gameStarted)
    {
        startGame(cell);
    }

    if (gameEnd)
    {
        return;
    }

    if (cell.classList.contains('play-cell--marked'))
    {
        return;
    }
    checkCell(cell.x, cell.y, true);

    cell.removeEventListener('click', cellClick);
}

let restart = function()
{
    window.location.reload();
}

let checkCell = function(x, y, clicked)
{
    // let checkBox = false;

    // if(clicked)
    // {
    //     for(let y = 0; y < bombMap.length; y++)
    //     {
    //         for (let x = 0; x < bombMap[y].length; x++)
    //         {
    //             if(!cellMap[y][x].classList.contains('play-cell--open') && cellMap[y][x] == bombMap[y][x])
    //             {
    //                 checkBox = true;
    //                 console.log(checkBox);
    //             }
    //             else
    //             {
    //                 checkBox = false;
    //                 break;
    //             }
    //         }
    //     }
    // }
        
    // if(checkBox == true){
    //     alert("ffff");
    // }

    if (bombMap[y][x])
    {
        if (clicked)
        {
            cellMap[y][x].classList.add('play-cell--bomb');
            for (let y = 0; y < bombMap.length; y++)
            {
                for (let x = 0; x < bombMap[y].length; x++)
                {
                    if (bombMap[y][x])
                    {
                    cellMap[y][x].classList.add('play-cell--bomb');
                    }
                }
            }

            for (let y = 0; y < bombMap.length - 1; y++)
            {
                for (let x = 0; x < bombMap[y].length - 1; x++)
                {
                    cellMap[y][x].removeEventListener('click', cellClick);
                }
            }
            endGame(false);
        }
    }
    else if (hintMap[y][x])
    {
        cellMap[y][x].textContent = hintMap[y][x];
        cellMap[y][x].classList.add('play-cell--open');
        cellMap[y][x].classList.remove('play-cell--marked');
    }
    else if (!cellMap[y][x].classList.contains('play-cell--open'))
    {
        
        cellMap[y][x].classList.add('play-cell--open');
        cellMap[y][x].classList.remove('play-cell--marked');

        if (x > 0)
        {
            checkCell(x - 1, y);
        }

        if (x < hintMap[y].length - 1)
        {
            checkCell(x + 1, y);
        }

        if (y > 0)
        {
            checkCell(x, y - 1);
        }

        if (y < hintMap.length - 1)
        {
            checkCell(x, y + 1);
        }

        /*if (x > 0 && y > 0)
        {
            checkCell(y - 1, x - 1);
        }

        if (x > 0 && y < hintMap.length - 1)
        {
            checkCell(y + 1, x - 1);
        }

        if (y > 0 && x < hintMap[y].length - 1)
        {
            checkCell(y - 1, x + 1);
        }

        if (y < hintMap.length - 1 && x < hintMap[y].length - 1)
        {
            checkCell(y + 1, x + 1);
        }*/
    }

    checkEndGame();
}

let markCell = function(e)
{
    e.preventDefault();

    if (gameEnd)
    {
        return;
    }

    let cell = e.target;
    cell.classList.toggle('play-cell--marked');
}

let startGame = function(cell)
{
    for (let y = 0; y < sizeY; y++)
    {
        bombMap[y] = [];
        for (let x = 0; x < sizeX; x++)
        {
            if (cell.x !== x || cell.y !== y)
            {
                bombMap[y][x] = Math.round(Math.random() * 100) > 85;
                if (bombMap[y][x])
                {
                    nBomb++;
                }
            }
            else
            {
                bombMap[y][x] = false;
            }
        }
    }

    gameStarted = true;

    for (let y = 0; y < bombMap.length; y++)
    {
        hintMap[y] = [];

        for (let x = 0; x < bombMap[y].length; x++)
        {
            hintMap[y][x] = 0;
        }
    }

    for (let y = 0; y < bombMap.length; y++)
    {
        for (let x = 0; x < bombMap[y].length; x++)
        {
            if (bombMap[y][x])
            {
                incrementBombZone(x, y);
            }
        }
    }
}

let checkEndGame = function()
{
    if (sizeX * sizeY - nBomb <= 
        document.querySelectorAll(".play-pad .play-cell--open").length)
    {
        endGame(true);
    }
}

let endGame = function(isWin)
{
    gameEnd = true;
    let message;
    if (isWin)
    {
        message = document.querySelector(".message p.win");
    }
    else
    {
        message = document.querySelector(".message p.not-win");   
    }
    message.classList.add('show');

    document.querySelector('.startAganebutton').addEventListener('click', restart);
}

for (let y = 0; y < sizeY; y++)
{
    cellMap[y] = [];
    for (let x = 0; x < sizeX; x++)
    {
        let cell = document.createElement('div');
        cell.className = 'play-cell';
        cell.x = x;
        cell.y = y;
        playPad.append(cell);
        cell.addEventListener('click', cellClick);
        cell.addEventListener('contextmenu', markCell);
        cellMap[y][x] = cell;
    }
}

document.onkeydown = handle;

let lastTime = Date.now();

function handle(e) {
    cellMap[cursorY][cursorX].classList.remove("cursor");
    
    if (e.key == "ArrowUp")
    {
        cursorY = (cursorY - 1) % sizeY;
    }

    if (e.key == "ArrowDown")
    {
        cursorY = (cursorY + 1) % sizeY;
    }

    if (e.key == "ArrowRight")
    {
        cursorX = (cursorX + 1) % sizeX;
    }

    if (e.key == "ArrowLeft")
    {
        cursorX = (cursorX - 1) % sizeX;
    }

    if (cursorX < 0)
    {
        cursorX = sizeX - 1;
    }

    if (cursorY < 0)
    {
        cursorY = sizeY - 1;
    }

    cellMap[cursorY][cursorX].classList.add("cursor");

    if (e.key == " " || e.key == "Enter" || e.key == "NumpadEnter")
    {
        let item = {
            target: cellMap[cursorY][cursorX],
            preventDefault: function() {}
        };

        if (e.ctrlKey)
        {
            markCell(item);
        }
        else
        {
            cellClick(item);
        }
    }
}