const addTask = () => {
    return {
        type: "ADDTASK"
    }
}

const editTask = () => {
    return {
        type: "EDITTASK"
    }
}

const removeTask = () => {
    return {
        type: "REMOVETASK"
    }
}

export default {
    addTask,
    editTask,
    removeTask
}