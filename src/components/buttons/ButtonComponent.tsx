import React from "react"
import styled from "styled-components"

const ButtonComponent = () => {
  return (
    <div>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
    </div>
  )
}

export default ButtonComponent

const Button = styled.button`
  /* display: block; */
  margin: 10px;
  padding: 12px 0;

  /* position: static; */
  width: 200px;

  background: linear-gradient(270deg, #d90068 0%, rgba(0, 28, 129, 0.9) 100%);
  box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
  border-radius: 30px;
  border: none;

  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
`
