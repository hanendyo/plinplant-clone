import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarCMS from "./components/SidebarCMS";
import Article from "./pages/Article";
import Category from "./pages/Category";
import City from "./pages/City";
import Contact from "./pages/Contact";
import Gender from "./pages/Gender";
import Order from "./pages/Order";
import OrderItem from "./pages/OrderItem";
import Plant from "./pages/Plant";
import PlantBreeding from "./pages/PlantBreeding";
import PriceList from "./pages/PriceList";
import Review from "./pages/Review";
import ShippingCharges from "./pages/ShippingCharges";
import Stock from "./pages/Stock";
import User from "./pages/User";
import Weight from "./pages/Weight";

const NavigationCMS = () => {
  return (
    <Router>
      <SidebarCMS />
      <Switch>
        <Route exact path="/cms/article_input" component={Article}></Route>
        <Route exact path="/cms/category_input" component={Category}></Route>
        <Route exact path="/cms/city_input" component={City}></Route>
        <Route exact path="/cms/contact_input" component={Contact}></Route>
        <Route exact path="/cms/gender_input" component={Gender}></Route>
        <Route exact path="/cms/order_input" component={Order}></Route>
        <Route exact path="/cms/order_item_input" component={OrderItem}></Route>
        <Route exact path="/cms/plant_input" component={Plant}></Route>
        <Route
          exact
          path="/cms/plant_breeding_input"
          component={PlantBreeding}
        ></Route>
        <Route exact path="/cms/price_list_input" component={PriceList}></Route>
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
  );
};

export default NavigationCMS;
