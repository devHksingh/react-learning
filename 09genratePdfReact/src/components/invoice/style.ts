import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#241d1a",
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: "12px",
    padding: "30px 50px",
    height:100
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
    color:'#bfd333'
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  billTo: {
    marginBottom: 10,
  },
  table: {
    width: "100%",
    borderColor: "1px solid #cf652d",
    margin: "20px 0",
  },
  tableHeader: {
    backgroundColor: "#2d8baf",
    color:'#212121',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  tableRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
    textAlign:'center',
    border:'1px'
  },
  description:{
    
    padding:4,
    maxWidth:84,
    textAlign:'center'
  },
  td: {
    padding: 6,
  },
  totals: {
    display: "flex",
    alignItems: "flex-end",
  },
});