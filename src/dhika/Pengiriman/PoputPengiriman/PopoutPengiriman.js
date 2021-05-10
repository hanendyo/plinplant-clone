import React from "react";
import ModalAlamat from "../../ModalAlamat/ModalAlamat";
import {
  Popup,
  PopupInner,
  BoxAlamat,
  BoxLeft,
  FirstLine,
  ButtonPilih,
} from "./PopoutPengiriman.component";
import { FaTimes } from "react-icons/fa";
import { colors } from "../../../master/constant/style/index";
// import Button from "@material-ui/core/Button";
import Button from "../../../master/components/additional/Button";

const PopoutPengiriman = (props) => {
  return props.trigger ? (
    <>
      <Popup>
        <PopupInner>
          <h4>Pilih Alamat Pengiriman</h4>
          <FaTimes
            className="times"
            size="20px"
            onClick={() => props.setTrigger(false)}
          />
          <ModalAlamat />
          <BoxAlamat>
            <BoxLeft>
              <FirstLine>
                <p>Muhammad Adhika Adhiwijna</p>
                <span>087787111616</span>
              </FirstLine>
              <p>
                Jl. Raya Senoparty - Rumah Warna Hijau Kecamatan Kosambi,
                Jakarta Selatan, 15045
              </p>
              <br />
              <a href="#">Ubah Alamat</a>
            </BoxLeft>
            <ButtonPilih>
              <Button primary shop text="Pilih Alamat" bgColor={colors.green} />
            </ButtonPilih>
          </BoxAlamat>
          <BoxAlamat>
            <BoxLeft>
              <FirstLine>
                <p>Muhammad Adhika Adhiwijna</p>
                <span>087787111616</span>
              </FirstLine>
              <p>
                Jl. Raya Senoparty - Rumah Warna Hijau Kecamatan Kosambi,
                Jakarta Selatan, 15045
              </p>
              <br />
              <a href="#">Ubah Alamat</a>
            </BoxLeft>
            <ButtonPilih>
              <Button primary shop text="Pilih Alamat" bgColor={colors.green} />
            </ButtonPilih>
          </BoxAlamat>
          <BoxAlamat>
            <BoxLeft>
              <FirstLine>
                <p>Muhammad Adhika Adhiwijna</p>
                <span>087787111616</span>
              </FirstLine>
              <p>
                Jl. Raya Senoparty - Rumah Warna Hijau Kecamatan Kosambi,
                Jakarta Selatan, 15045
              </p>
              <br />
              <a href="#">Ubah Alamat</a>
            </BoxLeft>
            <ButtonPilih>
              <Button primary shop text="Pilih Alamat" bgColor={colors.green} />
            </ButtonPilih>
          </BoxAlamat>
        </PopupInner>
      </Popup>
    </>
  ) : (
    ""
  );
};

export default PopoutPengiriman;
