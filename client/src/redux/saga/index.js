import {takeLatest,call,put} from 'redux-saga/effects'
import * as actions  from '../action/index'
import * as api from '../../api'

function* fetchPostSaga(action){
    try {
        const post = yield call(api.fetchPosts)
    // console.log('[post]',post)
        yield put(actions.getPosts.getPostSuccess(post.data))
    } catch (error) {
        console.error(error)
        yield put(actions.getPosts.getPostFail(error))
    }
}

function* createPostSaga(action){
    try {
        const post = yield call(api.createPosts,action.payload)
    console.log('[create-post]',post)
        yield put(actions.createPosts.createPostSuccess(post.data))
    } catch (error) {
        console.error(error)
        yield put(actions.createPosts.createPostFail(error))
    }
}
function* updatePostSaga(action){
    try {
        const post = yield call(api.updatePosts,action.payload)
    console.log('[create-post]',post)
        yield put(actions.updatePosts.updatePostSuccess(post.data))
    } catch (error) {
        console.error(error)
        yield put(actions.updatePosts.updatePostFail(error))
    }
}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostRequest,fetchPostSaga)
    yield takeLatest(actions.createPosts.createPostRequest,createPostSaga)
    yield takeLatest(actions.updatePosts.updatePostRequest,updatePostSaga)


}
export default mySaga