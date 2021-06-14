import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/style';

const StatusOrder = ({ status }) => {
  const formatStatus = (status) => {
    if (status === 'bayar') return 'Menunggu Pembayaran';
    if (status === 'verif') return 'Verifikasi Pembayaran';
    if (status === 'proses') return 'Pesanan Diproses';
    if (status === 'selesai') return 'Transaksi Selesai';
    if (status === 'gagal') return 'Verifikasi Pembayaran Gagal';
    if (status === 'diantar') return 'Pesanan Diantar';
  };

  return <Status status={status}>{formatStatus(status)}</Status>;
};

const bgColor = (status) => {
  if (status === 'bayar') return `${colors.yellowTransparent}`;
  if (status === 'verif' || status === 'diantar' || status === 'proses')
    return `${colors.lightGreenTransparent}`;
  if (status === 'selesai') return '#00FF704D';
  if (status === 'gagal') return '#ff6b6b53';
};

const color = (status) => {
  if (status === 'bayar') return `${colors.yellow}`;
  if (status === 'verif') return `${colors.lightGreen}`;
  if (status === 'proses' || status === 'diantar') return `${colors.white}`;
  if (status === 'selesai') return '#00FF70';
  if (status === 'gagal') return '#ff0000';
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
