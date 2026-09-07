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
            pairId : "nope";
    }

    function flip() {
        if(paired === false){
            return (faceUp === false)? faceUp = true : faceUp = false;
        }else{return;}
    }

    return {getCardOrientation, getCardState, getCardId, flip};
}

const card = Cell(3);
const cardTwo = Cell(2);
console.log(card.getCardOrientation());

card.flip();
console.log(card.getCardOrientation());
console.log(card.getCardId());
console.log(cardTwo.getCardId());
