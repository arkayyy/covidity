import { LIKE_POST_SUCCESS,LIKE_POST_FAILURE,LIKE_POST_REQUEST } from './likePostTypes'
import axios from 'axios'


const likePostRequest=() =>{
   return{
       type: LIKE_POST_REQUEST
   }
}

const likePostSuccess=(numOfLikes) =>{
    return{
        type: LIKE_POST_SUCCESS,
        payload: numOfLikes,
        
    }
}

const likePostFailure=(error)=>{
    return{
        type: LIKE_POST_FAILURE,
        payload: error
    }
}

export const likePost=(id,likedBy,dateTime)=>{
    return (dispatch)=>{
        dispatch(likePostRequest())
        const payload = {postId:id, likedBy:likedBy, likedOn: dateTime}
        axios.request({
            url: "/api/forum/like-post",
            method: 'POST',
            data: payload
        })
        .then((resp)=>{
            if(resp.data.error){
                dispatch(likePostFailure(resp.data.error))
            }
            else{
                dispatch(likePostSuccess(resp.data.numOfLikes))
            }
        })
        .catch((err)=>{
             dispatch(likePostFailure(err))
        })
    }
}