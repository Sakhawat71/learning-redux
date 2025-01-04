import { cn } from "@/lib/utils";
import { ITask } from "@/types";

const TaskCard = (task :ITask) => {
    const { title, description, dueDate, priority, isCompleted } = task;

    return (
        <div
            className={cn("p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 m-10", {
                "bg-red-200": priority === 'high',
                "bg-green-200": priority === 'medium',
                "bg-yellow-200": priority === 'low',
            })}
        >
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-sm text-gray-500 mb-4">
                <p>
                    <strong className="text-gray-700">Due:</strong> {dueDate}
                </p>
                <p>
                    <strong className="text-gray-700">Priority:</strong> {priority}
                </p>
                
            </div>
            <div className="flex justify-between">
                <button
                    // onClick={() => onComplete(id)}
                    className={`px-4 py-2 rounded-lg text-white font-medium ${isCompleted
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                    disabled={isCompleted}
                >
                    {isCompleted ? 'Completed' : 'Mark as Complete'}
                </button>
                <button
                    // onClick={() => onDelete(id)}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

TaskCard.propTypes = {

};

export default TaskCard;