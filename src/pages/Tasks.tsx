import { AddTaskModal } from "@/components/module/AddTaskModal";
import TaskCard from "@/components/module/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const Tasks = () => {

    const { tasks } = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();
    console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto border-white border-2 p-4">

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
                <AddTaskModal />
            </div>

            <div>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList defaultValue='all' className="flex w-full grow-0">

                        <TabsTrigger
                            onClick={() => dispatch(updateFilter('all'))}
                            value="all"
                        >All</TabsTrigger>

                        <TabsTrigger
                            onClick={() => dispatch(updateFilter('high'))}
                            value="high"
                        >High</TabsTrigger>

                        <TabsTrigger
                            onClick={() => dispatch(updateFilter('medium'))}
                            value="medium"
                        >Medium</TabsTrigger>

                        <TabsTrigger
                            onClick={() => dispatch(updateFilter('low'))}
                            value="low"
                        >Low</TabsTrigger>

                    </TabsList>
                </Tabs>
            </div>

            {
                tasks?.map((task) => (
                    <TaskCard key={task.id} {...task} />
                ))
            }
        </div>
    );
};

export default Tasks;