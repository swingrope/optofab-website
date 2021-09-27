import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { MenuData } from "../../data/MenuData";
import MenuButton from "../buttons/MenuButton";
import MenuTooltip from "../tooltips/MenuTooltip";

export default function Header() {
  return (
    <Wrapper>
      {/* add home link to logo */}
      <NavLink to="/">
        <Logo
          // src={process.env.PUBLIC_URL + "/images/logos/ANFFlogoFull.svg"}
          src={"/images/logos/ANFFlogoFull.svg"}
          alt="logo"
        />
      </NavLink>
      <MenuWrapper>
        {MenuData.map((item, index) => (
          // every list map should have a key
          <MenuButton item={item} key={index} />
        ))}
        <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/smallicons/hamburger.svg",
              link: "",
            }}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <MenuTooltip />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* absolute to parent (root in this case) */
  position: absolute;
  top: 30px;
  display: grid;
  /* first 45px is for logo */
  grid-template-columns: 65px auto;
  /* set width to take up whole space */
  width: 100%;
  /* space-between has no left/right (far-ends) space, vs space-around. see css-tricks.com */
  justify-content: space-between;
  padding: 0 30px;
  /* vertical center items */
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  /* use repeat function wrt MenuData array length */
  grid-template-columns: repeat(${MenuData.length}, auto);
  /* also vertical center menu links */
  align-items: center;

  @media (max-width: 768px) {
    /* ">" selects all links 'a' tag of immediate children: the MenuButton has a, but not the Hamburger */
    > a {
      display: none;
    }
    /* for only one hamburger menu */
    grid-template-columns: auto;
  }
`;

const Logo = styled.img`
  width: 64px;
  height: 90px;
  left: 0px;
  top: 0px;

  /* drop shadow combo 1 */

  filter: drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.15));
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
