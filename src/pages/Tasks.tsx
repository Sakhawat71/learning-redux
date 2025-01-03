import TaskCard from "@/components/module/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const {tasks } = useAppSelector(selectTasks);
    console.log(tasks);

    return (
        <div className="max-w-7xl mx-auto border-white border-2 p-4">
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                ))
            }
        </div>
    );
};

export default Tasks;