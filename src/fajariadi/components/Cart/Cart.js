import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextStore } from '../../../context/store/ContextStore';
import PopoutComponent from '../../../dhika/ModalAlamat/PopupComponent/Popout';
import ScrollSign from '../../../master/components/additional/ScrollSign';
import ShoppingSummary from '../../../master/components/additional/ShoppingSummary';
import ProductsContainer from '../Main/components/Product/ProductsContainer';
import { CartSection, Container, ListCart } from './Cart.elemen';

const Cart = () => {
  const { modalTambahAlamatState, userCartState } = useContext(ContextStore);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (userCartState.length < 4) setScroll(false);
    if (userCartState.length > 3) setScroll(true);
  }, [userCartState]);

  return (
    <CartSection>
      <Container>
        <h2>Keranjang</h2>

        <div>
          <ListCart>
            {userCartState.length === 0 ? (
              <p>
                Keranjangmu masih kosong.{' '}
                <Link to='/'>Ayo belanja disini!</Link>
              </p>
            ) : (
              <ProductsContainer cart />
            )}

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
