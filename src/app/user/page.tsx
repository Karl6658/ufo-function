'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Users() {

  // Define the user interface
  interface UserRec {
    id: number,
    user_name: string
  }

  // Define the state with the appropriate type
  const [users, setUsers] = useState<UserRec[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {

    console.log("Fetching Users...");
    
    const { data, error } = await supabase
      .from('ufo_user')
      .select('*')

    if (error) {
      console.log("Error:", error)
      setError(error.message)
    } else {
      console.log("Data", data);
      setUsers(data as UserRec[])
    }
    setLoading(false)
  }

  //Load Events
  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Users</h2>
      <br></br>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.user_name}</li>
        ))}
      </ul>
      <hr></hr>
      <button onClick={fetchUsers}>Refresh</button>
    </div>
  )
}