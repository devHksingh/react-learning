import { useState } from "react";

interface Node {
  name: string;
  email: string;
  description: string;
  children?: Node[];
}

interface Props {
  node: Node;
}

function TreeView ({ node }: Props) {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="">
      <div className="cursor-pointer font-semibold        
         text-blue-800 hover:text-
         hover:text-blue-900 font-Poppins  space-y-2 gap-2 justify-center "
        onClick={() => setExpanded(!expanded)}
      >
        <div className="w-1 h-4 mb-2 rotate-180  bg-white mx-auto transform "></div>
        {hasChildren && <span>{expanded ? "▾" : "▸"} </span>}
        
        {node.name}
      </div>
      
      <div
        className=" text-md font-Poppins
      bg-linear-to-r/oklab from-indigo-500 to-teal-400 sm:w-auto
         text-white p-8 mx-14 my-2 rounded-2xl flex flex-col gap-y-1.5 justif-between "
      >
        
        <div className="flex w-full justify-center items-center">
          <strong>Email:</strong> {node.email}
        </div>
        <div className="flex w-full justify-center items-center">
          <strong>Description:</strong> {node.description}
        </div>
      </div>
      {hasChildren && expanded && (
        // border-t-2
        <div
          className="   
           flex justify-center   rounded w-full items-center gap-2"> 
          {node.children!.map((child, index) => (
            <TreeView key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeView;
