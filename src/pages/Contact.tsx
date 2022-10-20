import React from "react"
import styled from "styled-components"
import contact from "../img/contact2.png"
import ReactIcons from "../components/ReactIcons"

const Contact = () => {
  return (
    <Styled_Wrapper>
      <Styled_Illustration>
        <img src={contact} alt='' />
      </Styled_Illustration>
      <Styled_Contact>
        <div className='background'>
          <div className='title'>
            CONTACT ME
            <div className='methods'>
              {/* <Mail /> <h2 className='details'>rsolticzki@gmail.com</h2>
              <Phone /> <h2 className='details'>+40 748 60 72 62</h2>
              <LinkedIN />{" "} */}
              <h2 className='details'>
                https://www.linkedin.com/in/ronaldsolticzki/
              </h2>
            </div>
          </div>
        </div>
      </Styled_Contact>
    </Styled_Wrapper>
  )
}

const Styled_Wrapper = styled.div``

const Styled_Illustration = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  img {
    width: 35%;
    position: absolute;
    margin: auto;
    margin-top: 340px;
  }
`
const Styled_Contact = styled.div`
  .background {
    background-color: red;
    width: 35%;
    margin: 20px;
    height: auto;
  }
  .title {
    font-size: 2rem;
    font-family: "Arvo", serif;
  }
  .methods {
    font-size: 2.5rem;
    position: relative;
    .details {
      width: 100%;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
      text-align: center;
      position: absolute;
    }
  }
`

export default Contact
