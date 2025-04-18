import {  useQuery } from "@tanstack/react-query"
import { getUserData } from "../http/api/api"
import { createColumnHelper, flexRender, useReactTable ,getCoreRowModel, SortingState,getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from "@tanstack/react-table"
import { ArrowBigDownIcon, ArrowDownUp, ArrowUp01Icon, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, IdCardIcon, Image, MailIcon, Navigation, Search, User, UserPenIcon } from "lucide-react"
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
        // https://dummyjson.com/users
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
        initialState:{
          pagination:{
            pageSize:5,
          }
        },
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting, // Update sorting state
        getSortedRowModel: getSortedRowModel(), // Add sorting model
        getFilteredRowModel:getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(), // Enable pagination
        manualPagination: false, // Automatically paginate
    })

    if(isLoading){
        return (<h1 className="text-2xl font-bold text-orange-600">Loading....</h1>)
    }
    if(error){
        return (<h1 className="text-2xl font-bold text-orange-600">Error....</h1>)
    }
    console.log(table.getPageCount());
    
  return (
    <div className="flex flex-col min-h-screen px-4 py-12 mx-auto max-w-8xl sm:px-6 lg:px-8 ">
      {/* Search */}
      {/* <input
        type="text"
        placeholder="Search..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="p-2 mb-4 border rounded"
      /> */}
      <div className="relative mb-4">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border border-red-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Search
          className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"
          size={20}
        />
      </div>
        <table className="min-w-full border divide-y divide-gray-200 ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} 
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
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
        <tbody className="divide-y divide-gray-200 ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col items-center justify-between mt-4 text-sm text-gray-700 sm:flex-row">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="mr-2">Items per page</span>
          <select
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft size={20} />
          </button>

          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={20} />
          </button>

          <span className="flex items-center">
            <input
              min={1}
              max={table.getPageCount()}
              type="number"
              value={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 p-2 text-center border border-gray-300 rounded-md"
            />
            <span className="ml-1">of {table.getPageCount()}</span>
          </span>

          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight size={20} />
          </button>

          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight size={20} />
          </button>
        </div>
      </div>
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