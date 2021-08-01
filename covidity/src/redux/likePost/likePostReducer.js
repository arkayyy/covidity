import { LIKE_POST_SUCCESS,LIKE_POST_FAILURE,LIKE_POST_REQUEST } from './likePostTypes'

const initialState = {
    numOfLikes: 0,
    loading: false,
    error: ''
}

const likePostReducer = (state = initialState, action) =>{
switch(action.type){
    case LIKE_POST_REQUEST: return{
        ...state,
        loading: true
        
    }
    case LIKE_POST_SUCCESS: return{
        ...state,
        loading: false,
        numOfLikes: action.payload,
        error: ''
    }
    case LIKE_POST_FAILURE: return{
        ...state,
        loading: false,
        error: action.payload
    }
    default: return state
}
}

export default likePostReducer