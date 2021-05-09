import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const StatusOrder = ({ status }) => {
  return <Status status={status}>{status}</Status>;
};

const bgColor = (status) => {
  if (status === 'Menunggu Pembayaran') return `${colors.yellowTransparent}`;
  if (status === 'Verifikasi Pembayaran' || status === 'Pesanan Diantar')
    return `${colors.lightGreenTransparent}`;
  if (status === 'Transaksi Selesai') return '#00FF704D';
};

const color = (status) => {
  if (status === 'Menunggu Pembayaran') return `${colors.yellow}`;
  if (status === 'Verifikasi Pembayaran') return `${colors.lightGreen}`;
  if (status === 'Pesanan Diantar') return `${colors.white}`;
  if (status === 'Transaksi Selesai') return '#00FF70';
};

const Status = styled.span`
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
  width: fit-content;

  background-color: ${({ status }) => bgColor(status)};
  color: ${({ status }) => color(status)};
`;

export default StatusOrder;
