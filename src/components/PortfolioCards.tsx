import React from 'react'
import styled from 'styled-components'
import { primary_color } from '../Utility/Colors'
import ProjIllustration from '../img/ProjIllustration.png'

const PortfolioCards = () => {
  return (
    <Styled_Wrapper>
        <h1>Recent Work</h1>
        <div className="TheSinners">
            <div className="card">
                <h4>The Sinners</h4>
                <p>In April 2022 I have started to test this portfolio website</p>
                <button>Read More</button>
            </div>
        </div>
        <div className="SwagLabs">
            <div className="card">
                <h4>Swag Labs</h4>
                <p>This was my final exam within the Testing Course</p>
                <button>Read More</button>
            </div>
        </div>
     
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div`  

    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Arvo', serif;
        color: ${primary_color};
    }

    .TheSinners{
        margin-left: 550px;
        background-color: red;
        filter: blur(px);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        z-index: 0;
        width: 40%;

        h4{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 5;
        }
    }
    .SwagLabs{
        background-color: blue;
        margin-left: 550px;
        filter: blur(px);
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        z-index: 0;
        width: 40%;
        h4{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 5;
        }
    }

    .BikeSki {
        background-color: blue;
        img{
        height: 200px;
        width: 200px;
    }
    }
`

export default PortfolioCards