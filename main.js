// import { generateMaze } from './mazeGenerator';

function startGame(mazeSize) {
    // let maze = [
    //     [1, 1, 1, 1, 1],
    //     [0, 0, 1, 0, 1],
    //     [1, 0, 1, 0, 1],
    //     [1, 0, 1, 0, 1],
    //     [1, 0, 0, 0, 0],
    //     [1, 1, 1, 1, 1],
    // ]

    const maze = generateMaze(mazeSize, mazeSize);
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext('2d')
    const borderWidth = 500;

    canvas.width = borderWidth
    canvas.height = borderWidth

    const mazeWidth = borderWidth / maze[0].length
    const mazeHeight = borderWidth / maze.length

    function renderMaze(context, mazeArray) {
        for (let i = 0; i < mazeArray.length; i++) {
            for (let j = 0; j < mazeArray[i].length; j++) {
                context.beginPath();
                context.rect(j * mazeWidth, i * mazeHeight, mazeWidth, mazeHeight)
                context.fillStyle = mazeArray[i][j] === 0 ? 'white' : 'darkslateblue';
                context.fill();
                context.closePath()
            }
        }
    }

    renderMaze(context, maze);
}

startGame(11, 11);

document.getElementById('btnStartGame').addEventListener('click', (e) => {
    e.preventDefault();
    let mazeSize = document.getElementById('txtMazeSize').value;
    if (mazeSize % 2 === 0) {
        mazeSize += 1;
    }
    startGame(+mazeSize);
})