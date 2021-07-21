import React from "react";

function UnderThirty(minutes){
    if(minutes % 5 === 0){
        let i = minutes/5
        let counter = 0
        let newString = ''
        while (counter < i) {
            newString += "☕️"
            counter ++
        }
        return (newString)
    } else {
        let j = (minutes / 5) + 1
        let counter2 = 0
        let newString2 = ''
        while (counter2 < j) {
            newString2 += "☕️"
            counter2++
        }
        return (newString2)
    }
}

function OverThirty(minutes){
    if (minutes % 10 === 0) {
        let i = minutes / 10
        let counter = 0
        let newString = ''
        while (counter < i) {
            newString += "🍱"
            counter++
        }
        return (newString)
    } else {
        //let j = parseInt((minutes / 10) + 1)
        let j = minutes / 10
        console.log(j)
        let counter2 = 0
        let newString2 = ''
        while (counter2 < j) {
            newString2 += "🍱"
            counter2++
        }
        return (newString2)
    }
}


function Article({title, date = "January 1, 1970", preview, minutes}){
    return (<article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p>{(minutes < 30) ? UnderThirty(minutes) : OverThirty(minutes)} {minutes} mins</p>

    </article>)
}

//IF UNDER OR OVER 30
//UNDER: DIVIDE BY 5 & ADD 1
//OVER: DIVIDE BY 10 & ADD 1
//WHILE LOOP -- DISPLAY THAT MANY 🍱  OR 🍱
export default Article; 