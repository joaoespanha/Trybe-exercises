
const INITIAL_STATE = {
    toDoList: []
}


export  const listReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_TO_DO':
            return { 
                ...state,
                toDoList:[...state.toDoList, action.value]
            }
            default: 
            return state;
    }


}