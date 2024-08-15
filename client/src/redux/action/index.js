import  { createActions,createAction } from 'redux-actions'
export const getType = (typeAction)=>{
    return typeAction().type
}
export const getPosts = createActions({
    getPostRequest:undefined,
    getPostSuccess:(payload)=>payload,
    getPostFail:(err)=>err
})

export const createPosts = createActions({
    createPostRequest:(payload)=>payload,
    createPostSuccess:(payload)=>payload,
    createPostFail:(err)=>err
})
export const updatePosts = createActions({
    updatePostRequest:(payload)=>payload,
    updatePostSuccess:(payload)=>payload,
    updatePostFail:(err)=>err
})
export const showModal = createAction('SHOW_CREATE_POST_MODAL')
export const hideModal = createAction('HIDE_CREATE_POST_MODAL')

/*format
    bởi vì getPostRequest là một func nên k để trong action.type trong reducer dc
    getType(getPosts.getPostRequest)
    ==>
    {
        type:getPostSuccess
        payload:
    }
*/ 
// export const getPostRequest = (payload)=>{
//     return{
//         type:'GETPOSTREQUEST',
//         payload:undefined
//     }
// }
// export const getPostSuccess = (payload)=>{
//     return{
//         type:'GETPOSTSUCCESS',
//         payload
//     }
// }
// export const getPostFail = (err)=>{
//     return{
//         type:'GETPOSTFAIL',
//         err
//     }
// }