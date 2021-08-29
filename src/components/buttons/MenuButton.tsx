import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link}>
      <MenuItem title={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

export default MenuButton

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.9);
  display: grid;
  /* 24px for icon */
  grid-template-columns: 24px auto;
  /* if there's only icon, show no gap */
  gap: ${props => (props.title ? "10px" : "0px")};
  /* align items (icon and title) vertically */
  align-items: center;
  padding: 10px;
  /* apply transition to background */
  transition: 0.5s ease-in-out;
  border-radius: 10px;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  }
`
