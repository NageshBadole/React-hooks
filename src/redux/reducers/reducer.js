import Tasks from "../../tasks";


const initialState = {
    tasks : [
        { 
            text: "Task 1",
            isCompleted : false      
        },
        {
            text: "Second Task" ,
            isCompleted : false
        },
        {
            text: "One more task",
            isCompleted : false
        },
    ],
    isOpen : false,
    isEditing : false,
    currentIndex : 0,
}
 
function reducer (state = initialState, action){

    switch (action.type) {

        case "ADDTASK": 
            const newTask = {
                text : action.payload.text,
                isCompleted : action.payload.isCompleted
            }
            state.isOpen = false
            return  {
                ...state,
                tasks : [...state.tasks , newTask]
            }

        case "TASKSTATUS":
            const index = action.payload;
            state.tasks[index].isCompleted = true;
            return {
                ...state
            }

        case "REMOVETASK":
            const newTasks = state.tasks;
            newTasks.splice(action.payload, 1)
            return {
                ...state,
                tasks : [...newTasks]
            }

        case "OPEN_MODAL" :
            state.isOpen = true;
            return {
                ...state,
            }

        case "CLOSE_MODAL" :
            state.isOpen = false;
            return {
                ...state,
            }
        
        case "EDIT_TASK" :
            state.isEditing = true;
            state.isOpen = true;
            state.currentIndex = action.payload;
            return {
                ...state,
            }

        case "SAVE_EDIT" : 
            state.isEditing = false;
            state.isOpen = false;
            const editedTask = action.payload.text;
            state.tasks[state.currentIndex].text = editedTask;
            return {
                ...state,
            }

        default:
            return state;
    }
}
 
export default reducer;