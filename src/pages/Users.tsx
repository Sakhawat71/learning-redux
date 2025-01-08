import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {

    const {users} =  useAppSelector(selectUser); 
    console.log(users);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default Users;