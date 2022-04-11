let chessType = 'horse';

switch (chessType) {
    case 'pawn':
        console.log('moves one position foward and atacks diagonally');
        break;
    case 'king':
        console.log('moves and atack one position in all directions');
        break;
    case 'queen':
        console.log('moves and atacks in all directions as long as there is a clear path');
        break;
    case 'horse':
        console.log('moves in an L shape and can jump over other pieces');
        break;
    case 'tower':
        console.log("moves horizontally as long as it has a clear path");
        break;
    case 'bishop':
        console.log('moves diagonally as long as it has a clear path');
        break;
    default:
        console.log('insert a valid chess piece');
        break; 
}