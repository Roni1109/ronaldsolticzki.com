import React from "react";
import styled from "styled-components";
import card1 from '../img/html&css.png'
import card2 from '../img/javascript1.svg'
import card3 from '../img/React.png'

const Cards = () =>{
return (
    <Styled_Container_Cards className="container">
        <div className="column-1">
            <h4>HTML & CSS</h4> 
            <a href="/learning_process"><img src={card1}/></a>
        </div>

        <div className="column-2">
            <h4>JavaScript</h4>
            <a href="/learning_process"><img src={card2}/></a>
        </div>

        <div className="column-3">
            <h4>React</h4>
           <a href="/learning_process"><img src={card3}/></a>
        </div>
    </Styled_Container_Cards>    
)
}

// Styled Components

const Styled_Container_Cards = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 50px;
    img{
        height: 230px;
        &:hover{
            height: 250px;
        }
    }
    h4{
        padding: 30px 15px;
        color: #99916e;
    }

    .column-1{
        width: 33%;
        height: 340px;
        border: 2px solid black;
        text-align: center;
    }
    .column-2{
        width: 33%;
        height: 340px;
        border: 2px solid black;
        text-align: center;
    }
    .column-3{
        width: 33%;
        height: 340px;
        border: 2px solid black;
        text-align: center;
    }
`






export default Cards 
