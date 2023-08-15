

function logger (reducer){
    return (preState, action) => {

        console.group(action.type)
        console.log('Pre State : ',preState)
        console.log('Action :' ,action)
        const newState = reducer(preState, action)
        console.log('New State : ',newState)
        console.groupEnd()

        return newState
    }
}


export default logger