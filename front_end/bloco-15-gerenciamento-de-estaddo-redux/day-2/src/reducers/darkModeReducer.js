const INITIAL_STATE = {
    darkMode: false,
}

export const darkMode = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOOGLE_DARK_MODE':
            return !state.darkMode
            
            default:
                return state;
        }
    


}