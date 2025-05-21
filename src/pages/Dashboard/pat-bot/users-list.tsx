import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Temporary user data
const users = [
  { id: "USR001", name: "John Doe", age: 28, place: "New York", interests: "Technology, Gaming" },
  { id: "USR002", name: "Jane Smith", age: 34, place: "San Francisco", interests: "Health, Fitness" },
  { id: "USR003", name: "Robert Johnson", age: 42, place: "Chicago", interests: "Finance, Reading" },
  { id: "USR004", name: "Emily Davis", age: 25, place: "Boston", interests: "Art, Music" },
  { id: "USR005", name: "Michael Wilson", age: 31, place: "Seattle", interests: "Travel, Photography" },
  { id: "USR006", name: "Sarah Brown", age: 29, place: "Austin", interests: "Food, Cooking" },
  { id: "USR007", name: "David Miller", age: 36, place: "Denver", interests: "Sports, Outdoors" },
  { id: "USR008", name: "Lisa Anderson", age: 27, place: "Portland", interests: "Fashion, Design" },
]

export default function UsersList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Place</TableHead>
              <TableHead className="hidden md:table-cell">Interests</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.place}</TableCell>
                <TableCell className="hidden md:table-cell">{user.interests}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
