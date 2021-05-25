import React from "react";
import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const ShippingCharges = () => {
  return (
    <div>
      <Page>
        <h1>Shipping Charges</h1>
      </Page>
    </div>
  );
};

export default ShippingCharges;
