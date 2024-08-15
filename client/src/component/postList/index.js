import { Grid } from "@material-ui/core"
import Post from "./post"
import { useDispatch, useSelector } from "react-redux"
import * as action from '../../redux/action'
import { useEffect } from "react"
export default function PostList(){
    const dispatch = useDispatch()
    const posts = useSelector((state)=>state.posts.data)
    // console.log('post-list' ,posts)
    useEffect(()=>{
        dispatch(action.getPosts.getPostRequest())
    },[dispatch])
    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.map((post,index)=>(
                <Grid item xs={12} sm={6}>
                    <Post key={index} post={post}/>
                </Grid>
            ))}
            
        </Grid>
    )
}