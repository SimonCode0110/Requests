interface User {
  id: number
  name: string
  company: {
    name: string
  }
  address: {
    city: string
  }
}

export default async function UsersPage() {
  console.log("Users")
  
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await response.json()

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded-lg shadow-sm">
            <div className="font-semibold text-lg">{user.name}</div>
            <div className="text-gray-600">Company: {user.company.name}</div>
            <div className="text-gray-600">City: {user.address.city}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
