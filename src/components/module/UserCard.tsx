import { cn } from "@/lib/utils";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
// import { deleteUser } from "@/redux/features/user/userSlice"; // Assuming deleteUser action exists
import { TUser } from "@/types";

const UserCard = (user: TUser) => {
    const dispatch = useAppDispatch();

    return (
        <div
            className={cn(
                "p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 m-4 bg-blue-100 flex justify-between items-center"
            )}
        >
            <h3 className="text-xl font-bold text-gray-800">{user?.name}</h3>
            <button
                onClick={() => dispatch(removeUser(user?.id))}
                className="mt-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
            >
                Remove
            </button>
        </div>
    );
};

export default UserCard;
