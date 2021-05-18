import React, { useState } from 'react';
// import ModalAlamat from "../ModalAlamat/ModalAlamat";
import { MainPengiriman } from './ModalPengiriman.component';
import PopoutPengiriman from './PoputPengiriman/PopoutPengiriman';
import Button from '../../master/components/additional/Button';
import { colors } from '../../master/constant/style/index';

const ModalPengiriman = () => {
  const [popupPengiriman, SetPopupPengiriman] = useState(false);
  return (
    <>
      <MainPengiriman>
        {/* <ModalAlamat /> */}
        <Button
          primary
          onClick={() => SetPopupPengiriman(true)}
          text='PROSES'
          bgColor={colors.yellow}
        />

        <PopoutPengiriman
          trigger={popupPengiriman}
          setTrigger={SetPopupPengiriman}
        />
      </MainPengiriman>
    </>
  );
};

export default ModalPengiriman;
