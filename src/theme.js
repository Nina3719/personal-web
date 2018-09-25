import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lato:300,400,700"]
  }
});

const breakpoints = ["640px", "1025px"];

const colors = {
  primary: "#FFFFFF",
  secondary: "#888888",
  hack: "#E20029"
};

const fonts = {
  primary: "Lato"
};

const theme = { breakpoints, colors, fonts };

export default theme;
