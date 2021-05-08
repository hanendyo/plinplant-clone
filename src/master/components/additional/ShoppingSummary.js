import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';
import Button from './Button';

const ShoppingSummary = ({ checkout }) => {
  return (
    <SummarySection>
      <h4>Ringkasan Belanja</h4>

      <TotalPrice>
        <div>
          <p>Total Harga</p>
          <span>4 barang</span>
        </div>

        <p>Rp 21.950</p>
      </TotalPrice>

      {checkout && (
        <TotalShipping>
          <div>
            <p>Total Ongkos Kirim</p>
            <span>4 barang</span>
            <span>2 Kg</span>
          </div>

          <p>Rp 21.950</p>
        </TotalShipping>
      )}

      <TotalBill>
        <h6>Total Tagihan</h6>
        <h6>Rp 21.950</h6>
      </TotalBill>

      <Button primary summary text='Beli' bgColor={colors.yellow} />
    </SummarySection>
  );
};

const SummarySection = styled.section`
  background-color: ${colors.darkGreen};
  width: 100%;
  max-width: 330px;
  padding: 20px;
  border-radius: 10px;
  margin-left: 30px;

  & > h4 {
    color: ${colors.white};
    margin-bottom: 20px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    & > span {
      display: inline-block;
      font-size: 14px;
      background-color: ${colors.lightGreenTransparent};
      padding: 5px 7px;
      border-radius: 10px;
      margin-top: 5px;
    }
  }
`;

const TotalShipping = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalBill = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.lightGreenTransparent};
  margin: 20px 0;
  padding-top: 20px;

  & > h6 {
    color: ${colors.white};
  }
`;

export default ShoppingSummary;
