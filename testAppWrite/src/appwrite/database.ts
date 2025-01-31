import { ID } from 'appwrite'
import { databases } from './config'

const db={}
const collections = [
    {
        'databaseId': import.meta.env.VITE_PUBLIC_DATABASE_ID,
        'collectionId': import.meta.env.VITE_PUBLIC_COLLECTION_ID_USER,
        'name': "formData",
    }
]

collections.forEach((colection)=>{
    db[colection.name]={
        create:(payload,id=ID.unique(),permissions)=>
            databases.createDocument(
                colection.databaseId,
                colection.collectionId,
                id,
                payload,
                permissions
            ),
        update:(payload,id,permissions)=>
            databases.updateDocument(
                colection.databaseId,
                colection.collectionId,
                id,
                payload,
                permissions
            ),
        delete: (id) => 
                databases.deleteDocument(
                    colection.databaseId,
                    colection.collectionId,
                    id
                ),
        list:(queries=[])=>
            databases.listDocuments(
                colection.databaseId,
                colection.collectionId,
                queries
            ),
        get:(id:string)=>
            databases.getDocument(
                colection.databaseId,
                colection.collectionId,
                id
            )
    }
})

export {
    db
}