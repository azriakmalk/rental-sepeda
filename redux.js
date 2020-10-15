const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
    value:0,
    age:17
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_AGE':
        return{
            ...state,
            age:state.age+1
        }

        case 'CHANGE_VALUE':
            return{
                ...state,
                value:state.value+action.newValue
            }
            default:
                return state;
    }
}

const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(()=>{
    console.log('Store Change : ',store.getState())
})

store.dispatch({type:'ADD_AGE'})
store.dispatch({type:'CHANGE_VALUE',newValue:12})
console.log(store.getState())