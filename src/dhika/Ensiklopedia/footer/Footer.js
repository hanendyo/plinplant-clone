import React from "react";
import { TextContainer, FooterContainer, Container } from "./Footer.component";
import Button from "../../../master/components/additional/Button";
import { colors } from "../../../master/constant/style/index";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <Container>
          <TextContainer>
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt
              illum neque soluta voluptate aperiam hic explicabo quibusdam
              provident molestias?
            </p>
          </TextContainer>

          <Button
            primary
            text="Beli Sekarang!"
            bgColor={colors.yellow}
            style={{ textAlign: "left" }}
          ></Button>
        </Container>
      </FooterContainer>
    </div>
  );
};

export default Footer;
