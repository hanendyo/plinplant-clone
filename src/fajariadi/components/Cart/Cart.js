import React, { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../../../context/store/ContextStore';
import PopoutComponent from '../../../dhika/ModalAlamat/PopupComponent/Popout';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import { cartItems } from '../../../master/constant/data/dummy-data';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { CartSection, Container, ListCart } from './Cart.elemen';

const Cart = () => {
  const { modalTambahAlamatState } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (cartItems.length < 4) setScroll(false);
    if (cartItems.length > 3) setScroll(true);
  }, [cartItems]);

  return (
    <CartSection>
      <Container>
        <h2>Keranjang</h2>

        <div>
          <ListCart>
            <ProductsContainer cart />

            {scroll && <ScrollSign />}
          </ListCart>

          <ShoppingSummary />
        </div>
      </Container>

      <PopoutComponent modal={modalTambahAlamatState} />
    </CartSection>
  );
};

export default Cart;
