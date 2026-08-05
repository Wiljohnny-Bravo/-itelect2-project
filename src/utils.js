export const formatDate = (date) => {
    return `Due: ${date.toLocaleDateString()}`;
}

export const validateTask = (task = {}) => {
    const { title, dueDate } = task;
    return Boolean(title && dueDate);
};


export const mergeTaskUpdate = (original, ...updates) => {
    return Object.assign({}, original, ...updates);
}

export class TaskValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "TaskValidationError";
        this.statusCode = 404;
    }
}

export function createTask(taskData){
    const isValid = validateTask(taskData);

    if(!isValid) {
        throw new TaskValidationError("Invalid task data")
    }

    return {
        id: Date.now(),
        completed:false, ...taskData,
    };

}

export const tasks = [
    {
        id: 1,
        title: "Sleep",
        dueDate: "2026-08-03",
        completed: false
    },
    {
        id: 2,
        title: "Wake up",
        dueDate: "2026-08-04",
        completed: true
    }
];