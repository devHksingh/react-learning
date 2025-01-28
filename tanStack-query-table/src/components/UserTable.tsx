import {  useQuery } from "@tanstack/react-query"
import { getUserData } from "../http/api/api"
import { createColumnHelper, flexRender, useReactTable ,getCoreRowModel, SortingState,getSortedRowModel, getFilteredRowModel} from "@tanstack/react-table"
import { ArrowBigDownIcon, ArrowDownUp, ArrowUp01Icon, IdCardIcon, Image, MailIcon, Navigation, User, UserPenIcon } from "lucide-react"
import { useEffect, useState } from "react";

type Person = {
    name: string;
    id: string;
    email: string;
    role: string;
    profile: string;
    country: string;
    state: string;
    image: string;
    age: number;
  };
const UserTable = () => {
    // const userData=[]
    // react table
    
    const [userArr, setUserArr] = useState<Person[]>([]);
    const [sorting,setSorting] = useState<SortingState>([])
    const [globalFilter,setGlobalFilter]=useState("") // For searching

    const {data,error,isLoading} = useQuery({
        queryKey:['users'],
        queryFn:getUserData,
        // placeholderData:{ users: [] } ,
        refetchInterval: 20*60*1000, // Refetch every 20min
        refetchIntervalInBackground: true, // Continue refetching in the background,
    })

    useEffect(() => {
        if (data) {
          const transformedData = data.users.map((user) => ({
            id: user.id,
            image: user.image,
            name: user.firstName,
            age: user.age,
            email: user.email,
            role: user.role,
            profile: user.company.department,
            country: user.address.country,
            state: user.address.state,
          }));
          setUserArr(transformedData);
        }
      }, [data]);

    
    
    
    const columnHleper = createColumnHelper<Person>()
    const  columns = [
        columnHleper.accessor("id",{
            cell:(info)=> info.getValue(),
            header:()=>(
                <span className="flex items-center">
                    <IdCardIcon className="mr-2" size={16}/>Id
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("image",{
            cell:(info)=> <img src={info.getValue()} alt="User" className="w-8 h-8 rounded-full" />,
            header:()=>(
                <span className="flex items-center">
                    <Image className="mr-2" size={16}/>Image
                </span>
            ),
            
        }),
        columnHleper.accessor("name",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center">
                    <User className="mr-2" size={16}/>Name
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("age",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center">
                    <User className="mr-2" size={16}/>
                    Age
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("email",{
            id:"email",
            cell:(info)=>(
                <span className="italic text-blue-600">{info.getValue()}</span>
            ),
            header:()=>(
                <span className="flex items-center">
                    <MailIcon className="mr-2" size={16}/>Email
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            )
        }),
        columnHleper.accessor("role",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center">
                   <User className="mr-2" size={16}/> Role
                   <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("profile",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center">
                    <UserPenIcon className="mr-2" size={16}/> Profile
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("country",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center capitallize">
                    <Navigation className="mr-2" size={16}/>country
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
        columnHleper.accessor("state",{
            cell:(info)=>info.getValue(),
            header:()=>(
                <span className="flex items-center">
                    <Navigation className="mr-2" size={16}/>state
                    <ArrowDownUp className="ml-2" size={16}/>
                </span>
            ),
            enableSorting:true,
        }),
    ]
    const table = useReactTable({
        data:userArr,
        columns,
        state:{
            sorting,
            globalFilter
        },
        onSortingChange: setSorting, // Update sorting state
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Add sorting model
        getFilteredRowModel:getFilteredRowModel()
    })

    if(isLoading){
        return (<h1 className="text-2xl text-orange-600 font-bold">Loading....</h1>)
    }
    if(error){
        return (<h1 className="text-2xl text-orange-600 font-bold">Error....</h1>)
    }
    console.log(table.getRowModel());
    
  return (
    <div className="flex flex-col min-h-screen max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
        <table className="min-w-full divide-y divide-gray-200 border ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={header.column.getToggleSortingHandler()}
                >
                  <div className={`${header.column.getCanSort()?`flex items-center cursor-pointer select-none`:''}`}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === "asc" && <span> <ArrowUp01Icon className="ml-2" size={14}/></span>} 
                    {header.column.getIsSorted() === "desc" && <span><ArrowBigDownIcon className="ml-2" size={16}/> </span>}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable

/*
{userArr.map((item:any) => (
        <div key={item.id} className="p-4 border-b">
          <h1>{item.name}</h1>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
          <p>Role: {item.role}</p>
          <p>Profile: {item.profile}</p>
          <p>
            Location: {item.state}, {item.country}
          </p>
        </div>
      ))}
        //🔼 🔽
*/