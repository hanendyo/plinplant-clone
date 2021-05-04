import React from "react";
import { TextContainer, FooterContainer, Container } from "./Footer.component";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { colors } from "../../../master/constant/style/index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "300px",
      height: "70px",
      margin: theme.spacing(1),
      padding: "0 50px",
      color: `${colors.white}`,
      fontWeight: "fontWeightBold",
      textAlign: "left",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.yellow,
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
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
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.root}
              fontWeight="fontWeightBold"
              m={1}
              textAlign="left"
            >
              BeliSekarang!
            </Button>
          </ThemeProvider>
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
