import React, { useState } from "react";
import Button from "../../../master/components/additional/Button";
import Popup from "./PopupComponent/Popout";
import { colors } from "../../../master/constant/style/index";
import styled from "styled-components";

const ModalAlamat = () => {
  const [popup, setPopup] = useState(false);

  return (
    <Main>
      <Button
        primary
        address
        text="Tambah Alamat Baru"
        bgColor={colors.yellow}
        onClick={() => setPopup(true)}
      />

      <Popup trigger={popup} setTrigger={setPopup} color={colors.yellow} />
    </Main>
  );
};

const Main = styled.div`
  text-align: right;
`;

export default ModalAlamat;
