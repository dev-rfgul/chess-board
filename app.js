const gameBoard=document.querySelector("#gameBoard")
const playerInfo = document.querySelector("#player")
const infoDisplay=document.querySelector("#infoDisplay")
const width=8

const startPiece=[
    rook,knight,bishop,queen,king,bishop,knight,rook,
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
    rook,knight,bishop,queen,king,bishop,knight,rook,
]

function createBoard(){
    startPiece.forEach((startPiece,i)=>{//i is given for the unique id given to every square which will start from 0 and will go till 63
        const square=document.createElement('div')
        square.classList.add('square')
        square.innerHTML=startPiece
        square.firstChild?.setAttribute('draggable',true)
        // square.classList.add('beige')
        square.setAttribute('square-id',i)//here we are setting the id

        // coloring the board

        const row= Math.floor((63-i)/8+1)
        if(row%2===0){
            square.classList.add(i%2===0? "beige" : "brown")
        }
        else{
            square.classList.add(i%2===0? "brown" : "beige")
        }
       
       if(i<=15){
        square.firstChild.firstChild.classList.add('black')
       }
       if(i>=48){
        square.firstChild.firstChild.classList.add('white')
       }
        gameBoard.append(square)
    })
}
createBoard();
