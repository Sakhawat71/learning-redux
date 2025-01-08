import UserCard from "@/components/module/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {

    const { users } = useAppSelector(selectUser);
    console.log(users);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Add User</h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        placeholder="Enter user name"
                        className="border px-3 py-2 rounded w-full"
                    />
                    <button
                        // onClick={handleAddUser}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div>
                {
                    users.map((user) => <UserCard key={user.id} {...user} />)
                }
            </div>
        </div>
    );
};

export default Users;