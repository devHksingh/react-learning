import { useEffect, useState } from "react"
import { databases } from "../appwrite/config"


export interface Person{
  $id:string,
name:string,
email:string,
age:number
}

const ShowPage = () => {
  const [userData,setUserData]=useState<Person[]>([])
  const init = async ()=>{
    const response = await databases.listDocuments(
      // require dbid collectionid
      import.meta.env.VITE_PUBLIC_DATABASE_ID,
      import.meta.env.VITE_PUBLIC_COLLECTION_ID_USER 
    )    
    const formatedResponse = response.documents.map((doc)=>({
      $id:doc.$id,
      name:doc.name,
      email:doc.email,
      age:doc.age
    }))
    setUserData(formatedResponse)
  }
  useEffect(()=>{
    init()
  },[])
  return (
    <div className="w-full min-h-screen p-2">
      <h1 className="text-2xl font-semibold text-center">ShowPage</h1>
      <div className="grid items-center grid-cols-1 gap-6 mt-4 md:grid-cols-4">
      {userData && userData.map((item)=>(
        <div key={item.$id} className="flex flex-col justify-center p-4 rounded-md bg-surface-tonal-a10">
            <p className="capitalize">Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Age: {item.age}</p>
            <div className="flex justify-around mt-2">
              <button className="px-2 py-0.5 bg-sky-600 rounded-md hover:bg-sky-800">Update</button>
              <button className="px-2 py-0.5 bg-red-600 rounded-md hover:bg-red-800">Delete</button>
            </div>
        </div>
      ))}
        
      </div>
    </div>
  )
}

export default ShowPage