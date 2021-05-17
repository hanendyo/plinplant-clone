import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { colors } from "../../../master/constant/style/index";
import { SidebarData } from "./SidebarList";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: ${colors.green};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > p {
    margin-left: 150px;
  }
`;

const SidebarNav = styled.nav`
  background: ${colors.yellow};
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Logo = styled.h1`
  font-size: 36px;
  font-family: "Elsie Swash Caps", sans-serif;
  color: ${colors.white};
  margin-left: 200px;
`;

const SidebarCMS = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
          <Logo className="logo-center">PlinPlant CMS</Logo>
        </NavIcon>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaTimes onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </Nav>
    </>
  );
};

export default SidebarCMS;
