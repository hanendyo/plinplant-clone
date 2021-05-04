import React from "react";
import {
  Header,
  Textbox,
  Breeding,
  SquareLeft,
  SquareRight,
  BoxContainer,
  Circle,
  CircleContainer,
  ImageCointainer,
  LinearGradient,
  LongSquare,
} from "./Body.component";
import { FaCircle } from "react-icons/fa";
import seed from "../../images/basil-seed.png";
import tuber from "../../images/basil-tuber.jpg";
import juvenil from "../../images/basil-juvenil.jpg";
import mature from "../../images/basil-mature.jpg";

const Body = () => {
  return (
    <div>
      <Header>
        <h1>Plant Breeding</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
          cupiditate vitae ullam! Doloremque quaerat numquam ipsam vitae, ea
          non?
        </p>
      </Header>

      <Breeding>
        <BoxContainer>
          <Textbox>
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              deleniti assumenda molestias temporibus veritatis amet fugiat
              alias magni obcaecati iure.
            </p>
          </Textbox>
          <SquareLeft />
        </BoxContainer>
        <CircleContainer>
          <Circle color="green">
            <FaCircle size={60} />
          </Circle>
          <LongSquare />
        </CircleContainer>

        <ImageCointainer>
          <img src={seed} alt="seed" />
          <LinearGradient />
          <p>Menanam Benih Tanaman</p>
        </ImageCointainer>
      </Breeding>
      <Breeding>
        <ImageCointainer>
          <img src={tuber} alt="tuber" />
          <LinearGradient />
          <p>Menanam Benih Tanaman</p>
        </ImageCointainer>

        <CircleContainer>
          <Circle color="green">
            <FaCircle size={60} />
          </Circle>
          <LongSquare />
        </CircleContainer>
        <BoxContainer>
          <SquareRight />
          <Textbox>
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              deleniti assumenda molestias temporibus veritatis amet fugiat
              alias magni obcaecati iure.
            </p>
          </Textbox>
        </BoxContainer>
      </Breeding>
      <Breeding>
        <BoxContainer>
          <Textbox>
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              deleniti assumenda molestias temporibus veritatis amet fugiat
              alias magni obcaecati iure.
            </p>
          </Textbox>
          <SquareLeft />
        </BoxContainer>
        <CircleContainer>
          <Circle color="green">
            <FaCircle size={60} />
          </Circle>
          <LongSquare />
        </CircleContainer>

        <ImageCointainer>
          <img src={juvenil} alt="juvenil" />
          <LinearGradient />
          <p>Menanam Benih Tanaman</p>
        </ImageCointainer>
      </Breeding>
      <Breeding>
        <ImageCointainer>
          <img src={mature} alt="mature" />
          <LinearGradient />
          <p>Menanam Benih Tanaman</p>
        </ImageCointainer>

        <CircleContainer>
          <Circle color="green">
            <FaCircle size={60} />
          </Circle>
        </CircleContainer>
        <BoxContainer>
          <SquareRight />
          <Textbox>
            <p
              style={{
                fontWeight: "600",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              deleniti assumenda molestias temporibus veritatis amet fugiat
              alias magni obcaecati iure.
            </p>
          </Textbox>
        </BoxContainer>
      </Breeding>
    </div>
  );
};

export default Body;
