import { Page, Text, View, Document, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { styles } from "./style"; // Ensure this is properly defined
import { tableData, totalData } from "./data"; // Ensure these are correctly imported

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, styles.textBold]}>INVOICE</Text>
          <Text>Invoice #INV-2024-001</Text>
        </View>
        <View style={styles.spaceY}>
          <Text style={styles.textBold}>Company Name</Text>
          <Text>123 Business Street</Text>
          <Text>City, State 12345</Text>
        </View>
      </View>

      <View style={styles.spaceY}>
        <Text style={[styles.billTo, styles.textBold]}>Bill To:</Text>
        <Text>Client Name</Text>
        <Text>Client Address</Text>
        <Text>City, State ZIP</Text>
      </View>

      {/* Render the table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.td}>Description</Text>
          <Text style={styles.td}>Quantity</Text>
          <Text style={styles.td}>Unit Price</Text>
          <Text style={styles.td}>Total</Text>
        </View>
        {tableData.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.description]}>{item.description}</Text>
            <Text style={styles.td}>{item.quantity}</Text>
            <Text style={styles.td}>${item.unitPrice.toFixed(2)}</Text>
            <Text style={styles.td}>${item.total.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.totals}>
        <View style={{ minWidth: "256px" }}>
          {totalData.map((item) => (
            <View
              key={item.label}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <Text style={item.label === "Total" ? styles.textBold : {}}>
                {item.label}
              </Text>
              <Text style={item.label === "Total" ? styles.textBold : {}}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const Invoice = () => {
  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="w-full h-[500px]">
        <PDFViewer width={"100%"} height={"100%"}>
          <MyDocument />
        </PDFViewer>
      </div>
      <div className="flex justify-center mt-6">
        <PDFDownloadLink document={<MyDocument />} fileName="invoice.pdf">
          <button className="flex items-center px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
            Download PDF
          </button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Invoice;
