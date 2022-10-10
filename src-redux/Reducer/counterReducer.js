var count = prompt("Please enter your initial count", "");
count=Number(count);
const counterReducer=(state=count,action)=>
{
    //let counts=1;
    switch(action.type){
        case "INCREMENT":
            return state+action.value;
        case "DECREMENT":
            return state-action.value;
        default:
            return state;
    }
}

export default counterReducer;