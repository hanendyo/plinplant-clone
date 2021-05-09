import React, { useState, useRef } from "react";
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  UploadBox,
  ImageContainer,
  Information,
  Data,
  DataAlamat,
  RightArea,
  Box,
  BoxLeft,
  FirstLine,
  Rectangle,
  ButtonCheck,
} from "./Profile.component";
import Button from "../../master/components/additional/Button";
import { colors } from "../../master/constant/style";
import ModalAlamat from "../ModalAlamat/ModalAlamat";
import { FaCheck } from "react-icons/fa";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const [trigger, setTrigger] = useState(true);
  const HandleClick = () => {
    setTrigger(!trigger);
  };

  return trigger ? (
    <div>
      <StyledProfile>
        <ProfileContainer>
          <div className="valueChoose">
            <TextBox>
              <p>Biodata Diri</p>
            </TextBox>
            <TextBox onClick={HandleClick}>
              <p>Tambah Alamat</p>
            </TextBox>
          </div>
          <UploadBox>
            <ImageContainer />
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
            />
            <Button
              primary
              summary
              text="Pilih Photo"
              bgColor={colors.green}
              onClick={onButtonClick}
            />
            <p>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
          </UploadBox>
          <Information>
            <h4>Ubah Biodata Diri</h4>
            <Data>
              <ul>
                <li>Nama</li>
                <li>Muhammad Adhika Adhiwijna</li>
                <li>Ubah</li>
              </ul>
            </Data>
            <Data>
              <ul>
                <li>Tanggal Lahir</li>
                <li>9 May 2021</li>
                <li>Ubah</li>
              </ul>
            </Data>
            <Data>
              <ul>
                <li>Jenis Kelamin</li>
                <li>Laki-Laki</li>
                <li>Ubah</li>
              </ul>
            </Data>
            <h4>Ubah Biodata Diri</h4>
            <Data>
              <ul>
                <li>Email</li>
                <li>adiwijna@gmail.com</li>
              </ul>
            </Data>
            <Data>
              <ul>
                <li>Nomor HP</li>
                <li>Tambah Nomor HP</li>
              </ul>
            </Data>
          </Information>
        </ProfileContainer>
      </StyledProfile>
      {/* <Footer colored /> */}
    </div>
  ) : (
    <StyledProfile>
      <ProfileContainer>
        <div className="valueChoose">
          <TextBox onClick={HandleClick}>
            <p>Biodata Diri</p>
          </TextBox>
          <TextBox>
            <p>Tambah Alamat</p>
          </TextBox>
        </div>
        <RightArea>
          <ModalAlamat />
          <DataAlamat>
            <Box>
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
              <FaCheck size="20" />
              <Rectangle />
            </Box>
            <Box>
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
              <Button
                primary
                summary
                text="Pilih Alamat"
                bgColor={colors.green}
              />
              <Rectangle />
            </Box>
            <Box>
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
              <ButtonCheck />
              <ButtonCheck>
                {visible ? (
                  <FaCheck size="20" />
                ) : (
                  <Button
                    primary
                    summary
                    text="Pilih Alamat"
                    bgColor={colors.lightGreen}
                  />
                )}
              </ButtonCheck>

              <Rectangle />
            </Box>
          </DataAlamat>
        </RightArea>
      </ProfileContainer>
    </StyledProfile>
  );
};

export default Profile;
