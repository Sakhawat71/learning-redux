import { AddTaskModal } from "@/components/module/AddTaskModal";
import TaskCard from "@/components/module/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const {tasks } = useAppSelector(selectTasks);
    console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto border-white border-2 p-4">

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
                <AddTaskModal />
            </div>
            
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                ))
            }
        </div>
    );
};

export default Tasks;