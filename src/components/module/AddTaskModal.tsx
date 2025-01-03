import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function AddTaskModal() {

    const form = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription className="sr-only">
                        Fill in the form below to add a new task.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title </FormLabel>
                                    <FormControl>

                                        <Input {...field} value={field.value || ""} />

                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                        {/* <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Due Date</FormLabel>
                                    <FormControl>
                                        <FormField
                                            control={form.control}
                                            name="dueDate"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Due Date</FormLabel>
                                                    <FormControl>
                                                        <DatePicker
                                                            selected={field.value}
                                                            onChange={(date) => field.onChange(date)}
                                                            className="custom-datepicker" // Add styling if necessary
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                    </FormControl>
                                </FormItem>
                            )}
                        /> */}


                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Priority</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => field.onChange(value)}
                                            value={field.value || ""}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Priority" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="high">High</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="low">Low</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
