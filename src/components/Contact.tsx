import React, { useState } from "react"
import styled from "styled-components"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields")
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address")
      return
    }
    console.log({ name, email, message })
    // TODO: send email using Nodemailer or AWS SES
  }

  return (
    <>
      <Styled_Wrapper>
        <Styled_Title>Contact</Styled_Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            id='name'
            name='name'
            value={name}
            placeholder='Name'
            onChange={event => setName(event.target.value)}
            required
          />
          <Input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='Email Address'
            onChange={event => setEmail(event.target.value)}
            required
          />
          <TextArea
            id='message'
            name='message'
            value={message}
            placeholder='Enter Message'
            onChange={event => setMessage(event.target.value)}
            required
          />
          {errorMessage && <Error>{errorMessage}</Error>}
          <Button type='submit'>Send</Button>
        </Form>
      </Styled_Wrapper>
    </>
  )
}

const Styled_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Styled_Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 35px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 3px solid black;
  width: 30rem;
  height: 2.1rem;
  background-color: rgba(5, 8, 11);
  color: white;
  ::placeholder {
    color: white;
  }
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid black;
  height: 10rem;
  width: 30rem;
  background-color: rgba(5, 8, 11);
  color: white;
  ::placeholder {
    color: white;
  }
`

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Error = styled.div`
  color: red;
`

export default ContactForm
