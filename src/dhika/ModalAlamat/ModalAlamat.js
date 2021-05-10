import React, { useState } from "react";
// import Button from "../../master/components/additional/Button";
import { Main } from "./ModuleAlamat.component";
import Popup from "./PopupComponent/Popout";
import { colors } from "../../master/constant/style/index";
import { Button } from "@material-ui/core";

const ModalAlamat = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <Main>
        <Button
          onClick={() => setPopup(true)}
          style={{
            background: `${colors.white}`,
            border: `1px solid ${colors.black}`,
            color: `${colors.black}`,
            padding: "5px 200px",
            borderRadius: "15px",
          }}
        >
          Tambah Alamat
        </Button>
        <Popup trigger={popup} setTrigger={setPopup} color={colors.yellow} />
      </Main>
    </div>
  );
};

export default ModalAlamat;
