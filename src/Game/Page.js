import React, { useEffect, useState } from 'react'
import './Page.css'
import rock from './rock.png'
import paper from './paper.png'
import scissors from './scissors.png'

export default function Page() {

    const [win, setWin] = useState("START");
    const [round, setRound] = useState(0);
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [imgA, setImgA] = useState(1);
    const [imgB, setImgB] = useState(1);
    const [randomNumber, setRandomNumber] = useState(1);

    const userSelect = (userA) => {

        setRandomNumber(Math.floor(Math.random() * 3) + 1);
        console.log(randomNumber)

        if (randomNumber == 1) {
            setImgB(rock)
        }
        else if (randomNumber == 2) {
            setImgB(scissors)
        }
        else {
            setImgB(paper)
        }

        if (userA == 1 && randomNumber == 2) {
            setWin("User Win")
            setScoreA(scoreA + 1)

        }
        else if (userA == 3 && randomNumber == 1) {
            setWin("User Win")
            setScoreA(scoreA + 1)

        }
        else if (userA == 2 && randomNumber == 3) {
            setWin("User Win")
            setScoreA(scoreA + 1)

        }
        else if (userA == 2 && randomNumber == 1) {
            setWin("comp Win")
            setScoreB(scoreB + 1)

        }
        else if (userA == 1 && randomNumber == 3) {
            setWin("comp Win")
            setScoreB(scoreB + 1)

        }
        else if (userA == 3 && randomNumber == 2) {
            setWin("comp Win")
            setScoreB(scoreB + 1)

        }
        else {
            setWin("same")
        }
        setRound(round+1);
        if(round % 10 == 0 && round>2){
            if(scoreA>scoreB)
            alert(`Round ${round/10} Completed and User is Winner #Congrtulation`)
            else if(scoreA == scoreB)
            alert(`Round ${round/10} Completed #Congrtulation Both Winner`)
            else
            alert(`Round ${round/10} Completed and Computer is Winner #Congrtulation`)
        }
    }


    return (
        <>
        <form action="">
        <h1>Rock Paper and Scissor Game</h1>
            <div className="wholeData">
                <div className="user">
                    <h4>TAKE YOUR PICK</h4>
                    <div onClick={
                        (e) => {
                            setImgA(rock)
                            userSelect(1)
                        }
                    }>
                        <img src={rock} alt="" />
                    </div>
                    <div onClick={() => {
                        setImgA(scissors)
                        userSelect(2)
                    }
                    }>
                        <img src={scissors} alt="" />
                    </div>
                    <div onClick={() => {
                        setImgA(paper)
                        userSelect(3)
                    }}>
                        <img src={paper} alt="" />
                    </div>
                </div>

                <div className="userSelcet">
                    <div>
                        <img src={imgA} alt="" />
                    </div>
                </div>

                <div className="score">
                    <h2>Round <br/>{round}</h2>
                    <div className='part'>
                        <div className='subPart'>
                            <h2>Player 1</h2>
                            <h2>{scoreA}</h2>
                        </div>
                        <div className='subPart'>
                            <h2>Player 2</h2>
                            <h2>{scoreB}</h2>
                        </div>
                    </div>
                    <h2>{win}</h2>
                    <button type='submit'>Restart</button>
                </div>

                <div className="compSelect">
                    <div>
                        <img src={imgB} alt="" />
                    </div>
                </div>

                <div className="comp">
                    <h4>COMPUTER :</h4>
                    <div><img src={rock} alt="" /></div>
                    <div> <img src={scissors} alt="" /></div>
                    <div><img src={paper} alt="" /></div>
                </div>
            </div>
            </form>
        </>
    )
}
