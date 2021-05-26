import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styled from 'styled-components';
import { openModalTambahAlamat } from '../../../context/actions/modalActions';
import { ContextStore } from '../../../context/store/ContextStore';
import { addresses } from '../../constant/data/dummy-data';
import { colors } from '../../constant/style';
import Button from './Button';

const ShoppingSummary = ({ checkout }) => {
  const { modalTambahAlamatDispatch } = useContext(ContextStore);

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
            <span>
              JKT <FaLongArrowAltRight className='arrow' /> BGR
            </span>
            <span>2 Kg</span>
          </div>

          <p>Rp 21.950</p>
        </TotalShipping>
      )}

      <TotalBill>
        <h6>Total Tagihan</h6>
        <h6>Rp 21.950</h6>
      </TotalBill>

      {checkout ? (
        <a href='/invoice'>
          <Button primary summary text='Proses' bgColor={colors.yellow} />
        </a>
      ) : (
        <div>
          {addresses.length === 0 ? (
            <Button
              primary
              summary
              text='Beli'
              bgColor={colors.yellow}
              onClick={() => modalTambahAlamatDispatch(openModalTambahAlamat())}
            />
          ) : (
            <a href='/checkout'>
              <Button primary summary text='Beli' bgColor={colors.yellow} />
            </a>
          )}
        </div>
      )}
    </SummarySection>
  );
};

const SummarySection = styled.section`
  background-color: ${colors.darkGreen};
  width: 100%;
  max-width: 330px;
  padding: 20px 20px 30px;
  border-radius: 10px;
  margin-left: 20px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.1);

  & > h4 {
    color: ${colors.white};
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    margin-left: unset;
    max-width: 100%;
    margin-top: 30px;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    & > span {
      display: inline-block;
      font-size: 12px;
      background-color: ${colors.lightGreenTransparent};
      padding: 5px 7px;
      border-radius: 10px;
    }
  }
`;

const TotalShipping = styled(TotalPrice)`
  margin-top: 20px;

  & > div {
    & > span:first-of-type {
      margin-right: 5px;

      & > .arrow {
        margin: 0 5px;
      }
    }
  }
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
