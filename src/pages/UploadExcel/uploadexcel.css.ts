import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems:'center',
  paddingTop:50,
  //background: "black",
});
const header = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom:50
  // background: "red",
});
const search_form = style({
  display: "flex",
  flexDirection:'row',
  justifyContent: 'start',
  paddingTop:5,
  paddingBottom:5,
  marginTop:10
});
const form = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  border: "none",

  padding: 10,
  backgroundColor: "#e0ebeb",
  borderRadius: 5,
  margin: 50,
  width: "fit-content",
});

const buttonRow = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const input = style({
  height: 25,
  marginTop: 10,
  border: "none",
  borderRadius: 3,
  ":focus": {
    outline: "none",
  },
});

const button = style({
  color:'white',
  backgroundColor:'#51B9E9',
  padding:10,
  fontSize:16,
  fontWeight:2,
  marginTop: 10,
  marginBottom: 10,
  outline: "red",
  borderRadius:12,
  ":focus": {
    outline: "none",
  },
});



const gradients = {
  google: "linear-gradient(to right, #4285f4, #34a853, #fbbc05, #ea4335)",
};

const button2 = style({
  marginTop: 10,
  marginBottom: 10,
  outline: "none",
  ":focus": {
    outline: "none",
  },
  background: gradients.google,
});

const switchprops = {
  onColor: "#86d3ff",
  onHandleColor: "#2693e6",
  handleDiameter: 30,
  uncheckedIcon: false,
  checkedIcon: false,
  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
  activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
  height: 20,
  width: 48,
  className: "react-switch",
  id: "material-switch",
};

export { container,search_form, header, form, input, button, button2, buttonRow, switchprops };
