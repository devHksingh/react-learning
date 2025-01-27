import { useQuery } from "@tanstack/react-query"

const UserTable = () => {
    const query = useQuery({
        queryKey:['users'],
        queryFn:
    })
  return (
    <div>UserTable</div>
  )
}

export default UserTable