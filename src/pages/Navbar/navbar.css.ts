import { style } from "@vanilla-extract/css";


const content_container = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  // background: "red",
});

const nav_bar = style({
  height: 70,
  backgroundColor: 'white',
  display: 'flex',
  justifyContent:'space-between',
  alignItems:'center',
  paddingLeft:60,
  boxShadow:'1px 2px 9px grey'
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
  display:'flex',
  alignItems:'center',
  // flexWrap:'wrap',
  listStyle:'none',
  fontSize:15,
  marginLeft:15,

  border:'none',
  backgroundColor:'white',
  ":focus": {
    // backgroundColor:'red',
    outline: "none",
  },
});

const gradients = {
  google: "linear-gradient(to right, #4285f4, #34a853, #fbbc05, #ea4335)",
};

const button2 = style({
  marginTop: 10,
  marginBottom: 10,
  marginLeft:20,
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

const header = style({
  color: "black",
});

const nav_bar_right = style({
  height:70,
  backgroundColor:'white',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  padding:4,
  marginRight:20
});

const menus = style({
  display:'flex',
  alignItems:'center',
  flexWrap:'wrap',
  listStyle:'none'
});



export { nav_bar, header,nav_bar_right,menus,content_container, form, input, button, button2, buttonRow, switchprops };
  function rgb(arg0: number, arg1: number, arg2: number) {
    throw new Error("Function not implemented.");
  }

