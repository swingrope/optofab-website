import React, { useState } from "react"
import styled from "styled-components"

// for future tooltips, e.g. personal info/account
function MenuTooltip() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {}
    </Wrapper>
  )
}

export default MenuTooltip

const Wrapper = styled.div`
  /* 
  background:
  box-shadow:
  backdrop-filter:

  border-radius:
  padding:
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  z-index:
  display: grid;
  gap: 10px;
  grid-template-columns: 
 */
`
