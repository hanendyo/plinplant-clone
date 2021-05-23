import React from "react";
import { ContextProvider } from "../../context/store/ContextStore";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Article,
  Category,
  City,
  Contact,
  Gender,
  Order,
  OrderItem,
  Plant,
  PlantBreeding,
  PriceList,
  Review,
  ShippingCharges,
  Stock,
  User,
  Weight,
} from "./cmsPages";
import "./CMS.css";
// import Navigation from "./navigation/Navigation";
import SidebarCMS from "../../dhika/SidebarCMS/components/SidebarCMS";

const CMS = () => {
  return (
    <ContextProvider>
      <Router>
        <SidebarCMS />
        <Switch>
          <Route exact path="/cms/article_input" component={Article}></Route>
          <Route exact path="/cms/category_input" component={Category}></Route>
          <Route exact path="/cms/city_input" component={City}></Route>
          <Route exact path="/cms/contact_input" component={Contact}></Route>
          <Route exact path="/cms/gender_input" component={Gender}></Route>
          <Route exact path="/cms/order_input" component={Order}></Route>
          <Route
            exact
            path="/cms/order_item_input"
            component={OrderItem}
          ></Route>
          <Route exact path="/cms/plant_input" component={Plant}></Route>
          <Route
            exact
            path="/cms/plant_breeding_input"
            component={PlantBreeding}
          ></Route>
          <Route
            exact
            path="/cms/price_list_input"
            component={PriceList}
          ></Route>
          <Route exact path="/cms/review_input" component={Review}></Route>
          <Route
            exact
            path="/cms/shipping_charges_input"
            component={ShippingCharges}
          ></Route>
          <Route exact path="/cms/stock_input" component={Stock}></Route>
          <Route exact path="/cms/user_input" component={User}></Route>
          <Route exact path="/cms/weight_input" component={Weight}></Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default CMS;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// import { colors } from "../../../src/master/constant/style/index"
// import { SidebarData } from "./SidebarList";
// import SubMenu from "./SubMenu";

// const Nav = styled.div`
// background: ${colors.green};
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   & > p {
//     margin-left: 50px;
//   }
// `;

// const SidebarNav = styled.nav`
// background: ${colors.yellow};
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

// const SidebarCMS = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => {
//     setSidebar(!sidebar);
//   };

//   return (
//     <>
//       <Nav>
//         <NavIcon to="#">
//           <FaIcons.FaBars onClick={showSidebar} />
//           <p>PlinPlant Content Management System</p>
//         </NavIcon>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <NavIcon to="#">
//               <FaTimes onClick={showSidebar} />
//             </NavIcon>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </SidebarWrap>
//         </SidebarNav>
//       </Nav>
//     </>
//   );
// };

// export default SidebarCMS;
