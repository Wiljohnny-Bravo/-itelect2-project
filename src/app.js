// app.js - Main application entry point
console.log('Server starting...') 

import {
    formatDate,
    validateTask,
    mergeTaskUpdate,
    createTask
} from "./utils.js";
import { fetchSampleUsers } from "./api.js";

console.log(formatDate(new Date("2026-07-22")));

console.log(validateTask({title: "Jefferson",dueDate: "2026-07-22"}));

console.log(validateTask());

console.log(mergeTaskUpdate({title: "Old"},{title: "New"}));

async function main() {
    try{
        const users = await fetchSampleUsers();
        console.log("Fetched Users:", users);

        const sampleTaskData = {
            title: "Commit Changes",
            dueDate: new Date("2026-07-22")
        };

        const newTask = createTask(sampleTaskData);
        console.log("Created Task:", newTask);
    }catch(error){
        console.error("Task Creation Error:", error.message);
    }
}

main();