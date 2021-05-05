import React from "react";
import {
  HeaderComponent,
  Header,
  Images,
  Author,
  Time,
  Source,
  Pointer,
  NewsContainer,
  CardList,
  Card,
  News,
} from "./ArtikelHeader.component";
import image from "../images/cherrytomatomature.jpg";
import { colors } from "../../../master/constant/style/index";
const NewsHeader = () => {
  return (
    <>
      <News>
        <HeaderComponent>
          <Images>
            <img url={image} alt="News" />
          </Images>
          <br />
          <Header>
            <h1 style={{ color: `${colors.white}` }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quae.
            </h1>
            <br />
            <Author>
              <text style={{ marginRight: "5px" }}>Oleh </text>
              <text style={{ fontWeight: "700" }}> Author</text>
            </Author>
            <Time>
              <text>30 April 2021</text>
              <Pointer />
              <text>3 menit baca</text>
            </Time>
            <Source>
              <text>Sumber:</text>
              <text style={{ fontStyle: "italic" }}>KOMPAS.COM</text>
            </Source>

            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deleniti fuga ab tempora? Obcaecati dignissimos velit aliquid
              blanditiis eum doloribus nostrum quae corporis harum minima id,
              saepe temporibus non hic doloremque voluptates illum voluptate
              atque. Optio officia maxime aliquam vel, voluptas suscipit
              explicabo magnam veritatis minus? Labore enim fuga ab.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              deleniti fuga ab tempora? Obcaecati dignissimos velit aliquid
              blanditiis eum doloribus nostrum quae corporis harum minima id,
              saepe temporibus non hic doloremque voluptates illum voluptate
              atque. Optio officia maxime aliquam vel, voluptas suscipit
              explicabo magnam veritatis minus? Labore enim fuga ab.
            </p>
          </Header>
        </HeaderComponent>
        <NewsContainer>
          <CardList>
            <text>Artikel Lain</text>
            <Card>
              <img src="image" alt="news" />
            </Card>
            <Card>
              <img src="image" alt="news" />
            </Card>
            <Card>
              <img src="image" alt="news" />
            </Card>
            <Card>
              <img src="image" alt="news" />
            </Card>
            <Card>
              <img src="image" alt="news" />
            </Card>
          </CardList>
        </NewsContainer>
      </News>
    </>
  );
};

export default NewsHeader;
