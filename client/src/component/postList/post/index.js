import { Avatar,Card, CardActions, CardContent,CardHeader,CardMedia,IconButton,Typography } 
from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { updatePosts } from "../../../redux/action"
export default function Post({post}){
    const classes=useStyles()
    const dispatch = useDispatch()
    const clickbtn = useCallback(()=>{
        dispatch(updatePosts.updatePostRequest({...post,likeCount:post.likeCount + 1}))
    },[dispatch,post])
    return(
        <Card>
            <CardHeader 
                avatar={<Avatar>A</Avatar>} 
                title={post.author}
                subheader={moment(post.createdAt).format('HH:MM MMM DD, YYYY')}
                action={
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>}/>
            <CardMedia image={post.attachment} title='Title' className={classes.media}/>
            <CardContent>
                <Typography variant="h5" color="textPrimary">{post.title} </Typography>
                <Typography variant="body2" component='p' color="textSecondary">{post.content}</Typography>

            </CardContent>
            <CardActions>
                <IconButton onClick={clickbtn}>
                    <FavoriteIcon/>
                    <Typography component='span' color="textSecondary">{post.likeCount}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}