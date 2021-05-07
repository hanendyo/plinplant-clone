import React, { useState } from "react";
import Button from "../../master/components/additional/Button";
import { Main } from "./ModuleAlamat.component";
import Popup from "./PopupComponent/Popout";
import { colors } from "../../master/constant/style/index";

const ModuleAlamat = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div>
      <Main>
        <h1>Module Alamat</h1>
        <Button
          primary
          onClick={() => setPopup(true)}
          text="TAMBAH ALAMAT BARU"
          bgColor={colors.yellow}
          style={{ transition: "all 300ms ease-in-out" }}
        />
        <Popup trigger={popup} setTrigger={setPopup} color={colors.yellow} />
      </Main>
    </div>
  );
};

export default ModuleAlamat;
