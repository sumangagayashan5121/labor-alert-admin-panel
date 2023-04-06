import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems:'center',
  paddingTop:50,
  paddingBottom:200
  //background: "black",
});
const header = style({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'space-between',
  color:'white'
  // marginBottom:30
  // background: "red",
});
const search_form = style({
  display: "flex",
  flexDirection:'row',
  justifyContent: 'space-evenly',
  alignItems:'center',
  paddingTop:5,
  paddingBottom:5,
  marginTop:10
});
const card = style({
  display: "flex",
  flexDirection:'column',
  justifyContent: 'start',
  // backgroundColor:'grey',
  height:200,
  width:400,
  boxShadow:'1px 2px 9px grey'
});
const card_title = style({
  display: "flex",
  flexDirection:'column',
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor:'#51B9E9',
  paddingTop:15,
  paddingBottom:15
});
const card_content = style({
  display: "flex",
  flexDirection:'column',
  justifyContent: 'space-evenly',
  alignItems:"center",
  width:'100%',
  height:'100%',
});
const input_field = style({
  display: "flex",
  flexDirection:'column',
  justifyContent: 'start',
  width:'100%',
  padding:15
});
const form_fill = style({
  display: "flex",
  flexDirection:'column',
  justifyContent: 'start',
  marginRight:30,
  width:'100%',
  fontSize:20
  // backgroundColor:'red'
});
const edit_form = style({
  display: "flex",
  flexDirection:'row',
  justifyContent: 'space-between',
  marginTop:10,
  width:'100%',
  // backgroundColor:'red'
});
const label = style({
  marginBottom:5,
});
const buttonRow = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const table = style({
  borderCollapse:'collapse',
  // width:'100%',
  // border:'1px solid #000',
  marginTop:30
});

const tableHeader = style({
  border:'1px solid #000',
  padding:8,
  color:'red',
  backgroundColor:'lightblue',
  height:20

});
const input = style({
  display:'block',
  boxSizing:'border-box',
  height: 40,
  // marginTop: 10,
  width:'100%',
  border: '1px solid rgb(65, 121, 63)',
  padding:10,
  fontSize:15,
  borderRadius: 3,
  ":focus": {
    outline: "none",
  },
  marginRight:20,
});
// display: block;
//     box-sizing: border-box;
//     width: 100%;
//     border-radius: 4px;
//     border: 1px solid rgb(65, 121, 63);
//     padding: 10px 15px;
//     margin-bottom: 10px;
//     font-size: 14px;

const button = style({
  color:'white',
  backgroundColor:'#51B9E9',
  padding:10,
  fontSize:16,
  fontWeight:2,
  marginTop: 20,
  marginBottom: 10,
  outline: "red",
  textDecorationStyle:'solid',
  borderRadius:12,
  ":focus": {
    outline: "none",
  },
  marginRight:20,
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

export { card,form_fill,label,input_field,edit_form,table,tableHeader,container, header, search_form, input, button, button2, buttonRow, switchprops,card_title,card_content };