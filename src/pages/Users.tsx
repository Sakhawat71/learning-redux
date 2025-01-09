import { AddUserModal } from "@/components/module/AddUserModal";
import UserCard from "@/components/module/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {

    const { users } = useAppSelector(selectUser);
    // console.log(users);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>

            <div className="mb-6 flex items-center justify-between px-5">
                <h2 className="text-xl font-semibold mb-2">Users</h2>
                <AddUserModal />
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