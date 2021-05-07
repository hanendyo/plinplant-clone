import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const ShoppingSummary = () => {
  return (
    <SummarySection>
      <h4>Ringkasan Belanja</h4>

      <div>
        <div>
          <p>Total Harga</p>
          <span>4 barang</span>
        </div>

        <p>Rp 21.950</p>
      </div>
    </SummarySection>
  );
};

const SummarySection = styled.section`
  background-color: ${colors.darkGreen};
`;

export default ShoppingSummary;
