function Cell(id){
    let pairId = id;
    let faceUp = false;
    let paired = false;

    let getCardOrientation = () => {
        return faceUp;
    }

    let getCardState = () => { 
        return paired;
    }

    let getCardId = () => {
        return (faceUp === true || paired === true)?
            pairId : "Card not visible";
    }

    function flip() {
        if(paired === false){
            return (faceUp === false)? faceUp = true : faceUp = false;
        }else return;
    }

    return {getCardOrientation, getCardState, getCardId, flip};
}

function Board() {
    let board = [];
    let list = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

    let boardSide = 4;

    for(let i = 0; i < list.length; i++){
        let t;
        let randomPos = Math.floor(Math.random()*16);
        t = list[i]; 
        list[i] = list[randomPos];
        list[randomPos] = t;
    } 

    function createBoard() {
        let id = 0;
        for(let i = 0; i < boardSide; i++){
            board[i] = [];
            for(let j = 0; j < boardSide; j++){
                board[i][j] = new Cell(list[id]);
                id++
            }
        }
        id = 0;
    }

    function printList() {
        console.log(list);
    }

    createBoard();

    return {printList};    

}

let b = new Board();
b.printList();

/* Resume this session with:
  grok --resume 01a076d7-7f58-7a51-929c-54c10cf02723 */

/*SHUFFLER DEBUG 

let list = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

for(let i = 0; i < list.length; i++){
    let t;
    let randomPos = Math.floor(Math.random()*16);

    console.log("rdn number: " + randomPos);

    t = list[i]; 
    console.log(t);

    list[i] = list[randomPos];
    console.log(list[i]);

    list[randomPos] = t;

} 

console.log(list); */