function initMaze(maze) {
    for (let i = 1; i < maze[0].length - 1; i = i + 2) {
        for (let j = 1; j < maze.length - 1; j = j + 2) {
            maze[i][j] = 0
        }
    }
}

function isInMaze(x, y, maze) {
    return ((x < 0 || x >= maze[0].length) || (y < 0 || y >= maze.length)) ? false : true;
}

function generateMaze(n) {
    if (n % 2 === 0) {
        throw new Error("Please spcify maze size as odd number");
    }

    const maze = new Array(n);

    const positions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]

    const startPosition = { x: 0, y: 1 }
    const endPosition = { x: n - 1, y: n - 2 }

    for (let i = 0; i < maze.length; i++) {
        maze[i] = new Array(n).fill(1)
    }

    maze[startPosition.y][startPosition.x] = 0
    maze[endPosition.y][endPosition.x] = 0

    initMaze(maze);

    visitedPositions = new Array(maze.length)

    for (let index = 0; index < visitedPositions.length; index++) {
        visitedPositions[index] = new Array(maze[index].length).fill(false)
    }

    positionQueue = []

    positionQueue.unshift({ x: 1, y: 1 })
    visitedPositions[1][1] = true

    while (positionQueue.length !== 0) {
        let currentPosition = Math.random() > 0.5 ? positionQueue.pop() : positionQueue.shift()

        for (let i = 0; i < 4; i++) {
            let newX = currentPosition.x + positions[i][0] * 2
            let newY = currentPosition.y + positions[i][1] * 2

            if (isInMaze(newX, newY, maze) && !visitedPositions[newY][newX]) {
                Math.random() > 0.5 ? positionQueue.unshift({ x: newX, y: newY }) : positionQueue.push({ x: newX, y: newY })
                visitedPositions[newY][newX] = true
                maze[currentPosition.y + positions[i][1]][currentPosition.x + positions[i][0]] = 0
            }
        }
    }

    return maze;
}