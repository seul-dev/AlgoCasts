// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // 빈 행렬 생성
  const spiral = Array.from({ length: n }, () => new Array(n).fill(0));

  // 초기 값 및 방향 설정
  let value = 1;
  let row = 0,
    col = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 오른쪽, 아래, 왼쪽, 위 순서
  let directionIdx = 0; // 초기 방향 인덱스

  for (let i = 0; i < n * n; i++) {
    spiral[row][col] = value;
    value++;

    // 다음 위치 계산
    const nextRow = row + directions[directionIdx][0];
    const nextCol = col + directions[directionIdx][1];

    // 다음 위치가 범위를 벗어나거나 이미 값이 채워진 경우 방향 변경
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= n ||
      spiral[nextRow][nextCol] !== 0
    ) {
      directionIdx = (directionIdx + 1) % 4;
    }

    // 다음 위치 업데이트
    row += directions[directionIdx][0];
    col += directions[directionIdx][1];
  }

  return spiral;
}

module.exports = matrix;

// function matrix(n) {
//   const results = Array.from({ length: n }, () => []);
//   let counter = 1;

//   let startRow = 0;
//   let startCol = 0;
//   let endRow = n - 1;
//   let endCol = n - 1;

//   while (startCol <= endCol && startRow <= endRow) {
//     // Top row
//     for (let i = startCol; i <= endCol; i++) {
//       results[startRow][i] = counter++;
//     }
//     startRow++;

//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endCol] = counter++;
//     }
//     endCol--;

//     // Bottom row
//     for (let i = endCol; i >= startCol; i--) {
//       results[endRow][i] = counter++;
//     }
//     endRow--;

//     // Left column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startCol] = counter++;
//     }
//     startCol++;
//   }
//   return results;
// }
