import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hook";
import { addUser } from "@/redux/features/user/userSlice";
import { TUser } from "@/types";
import { nanoid } from "@reduxjs/toolkit";

type FormValues = {
    name: string;
};

export function AddUserModal() {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const newUser: TUser = {
            id: nanoid(),
            ...data,
        };
        dispatch(addUser(newUser));
        reset(); // Clear the form after submission
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <Input
                            id="name"
                            {...register("name", { required: true })}
                            placeholder="Enter user name"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
