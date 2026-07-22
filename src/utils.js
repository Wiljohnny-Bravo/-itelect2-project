export const formatDate = (date) => {
    return `Due: ${date.toLocaleDateString()}`;
}

export const validateTask = ({title, dueDate } = {}) => {
    return Boolean(title && dueDate);
}

export const mergeTaskUpdate = (original, ...updates) => {
    return Object.assign({}, original, ...updates);
}

export class TaskValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "TaskValidationError";
        // this.statusCode = 404;
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