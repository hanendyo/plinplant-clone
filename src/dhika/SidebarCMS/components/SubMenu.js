import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../master/constant/style/index";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background: ${colors.lightGreen};
    border-left: 4px solid ${colors.green};
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: ${colors.lightGreenTransparent};
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${colors.lightGreen};
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </div>
  );
};

export default SubMenu;
