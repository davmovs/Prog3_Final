var period = 0;
var count = 80;
var isEnd = false;

function event() {
    console.log(period);
    if (period == 240 && !isEnd) {
        period--;

        function removeCh(x, y, arr) {
            for (var el in arr) {
                if (arr[el].x == randomMatrixX && arr[el].y == randomMatrixY) {
                    arr.splice(el, 1);
                }
            }
        }

        var
            randomMatrixY = Math.floor(random(0, matrix.length)),
            randomMatrixX = Math.floor(random(0, matrix[randomMatrixY].length));
        switch (matrix[randomMatrixY][randomMatrixX]) {
            case 0:
                matrix[randomMatrixY][randomMatrixX] = 5;
                break;
            case 1:
                removeCh(randomMatrixX, randomMatrixY, grassArr);
                matrix[randomMatrixY][randomMatrixX] = 5;
                break;
            case 2:
                removeCh(randomMatrixX, randomMatrixY, xotakerArr);
                matrix[randomMatrixY][randomMatrixX] = 5;
                break;
            case 3:
                removeCh(randomMatrixX, randomMatrixY, gishatichArr);
                matrix[randomMatrixY][randomMatrixX] = 5;
                break;
            case 4:
                removeCh(randomMatrixX, randomMatrixY, mardArr)
                matrix[randomMatrixY][randomMatrixX] = 5;
                break;
            case 5:
                randomMatrixY = Math.floor(random(0, matrix.length)),
                    randomMatrixX = Math.floor(random(0, matrix[randomMatrixY].length));
                break;
        }
    }
    period++
}