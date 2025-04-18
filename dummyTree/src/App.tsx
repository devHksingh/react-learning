import { data } from "./api/workbook.json";
import "./App.css";
import TreeView from "./components/TreeView";

function App() {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto ">
        <h1 className="text-2xl font-bold mb-4 text-white font-Poppins">
          Company Tree View
        </h1>
        <TreeView node={data} />
      </div>
    </>
  );
}

export default App;
