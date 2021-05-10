import React, { useState, useRef } from "react";
import {
  StyledProfile,
  ProfileContainer,
  TextBox,
  UploadBox,
  ImageContainer,
  Information,
  Data,
  DataInput,
  DataEdit,
  ListData,
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
              <ListData>
                <ul>
                  <li>Nama</li>
                  <li>Tanggal Lahir</li>
                  <li>Jenis Kelamin</li>
                </ul>
              </ListData>
              <DataInput>
                <p>Muhammad Adhika Adhiwijna</p>
                <p>Masukkan tanggal lahir</p>
                <p>Masukkan jenis kelamin</p>
              </DataInput>
              <DataEdit>
                <p>Ubah</p>
                <p style={{ color: `${colors.green}` }}>Ubah</p>
                <p style={{ color: `${colors.green}` }}>Ubah</p>
              </DataEdit>
            </Data>
            <h4>Ubah Kontak</h4>
            <Data>
              <ListData>
                <ul>
                  <li>Email</li>
                  <li>No. HP</li>
                </ul>
              </ListData>
              <DataInput>
                <p>adiwijna@gmail.com</p>
                <p>Masukkan Nomor handphone</p>
              </DataInput>
              <DataEdit>
                <p>Ubah</p>
                <p style={{ color: `${colors.green}` }}>Ubah</p>
              </DataEdit>
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
