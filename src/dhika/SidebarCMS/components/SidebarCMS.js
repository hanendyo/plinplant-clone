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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h5 {
    color: #fff;
    padding: 10px;
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
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.green};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #a5aaad;
    border-radius: 10px;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Logo = styled.h1`
  font-size: 36px;
  font-family: "Elsie Swash Caps", sans-serif;
  color: ${colors.white};
  margin-left: 100px;
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
          <h5>Hello, Admin</h5>
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
