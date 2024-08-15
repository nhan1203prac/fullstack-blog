import { Button, Modal, TextField, TextareaAutosize } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from './styles'
import FileBase64 from 'react-file-base64';
import { useCallback,useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/action";
import { createPosts } from "../../redux/action";
export default function CreatePostModel(){
    const isShow = useSelector((state) => state.modal.isShow);
    const [data, setDate] = useState({title:'',content:'',attachment:''})
    const classes = useStyles()
    const dispatch = useDispatch()
    // console.log('[show]',isShow)
    const onclose = useCallback(()=>{
        dispatch(hideModal())
        setDate({title:'',content:'',attachment:''})
    },[dispatch])

    const onSubmit = useCallback(()=>{
        console.log({data})
        dispatch(createPosts.createPostRequest(data))
        onclose()
    },[data, dispatch,onclose])
    const body=(
    <div className={classes.paper} id="simple-modal-title">
        <h2>Create New Post</h2>
        <form noValidate autoComplete="off" className={classes.form}>
            <TextField
            className={classes.title}
            required
            label="Title"
            value={data.title}
            onChange={(e)=>setDate({...data,title:e.target.value})}
            />
            <TextareaAutosize
            className={classes.textarea}
            rowsMin={10}
            rowsMax={15}
            placeholder="Content..."
            value={data.content}
            onChange={(e)=>setDate({...data,content:e.target.value})}
            />
            <FileBase64 accept='image/*' multiple={false} type="file" onDone={({base64})=>setDate({...data,attachment:base64})}/>
            <div className={classes.footer}>
                <Button variant="contained" color="primary" component="span" fullWidth onClick={onSubmit}>Create</Button>
            </div>
        </form>
    </div>
    )
    return(
        <div>
            <Modal open={isShow} onClose={onclose}>
                {body}
            </Modal>
        </div>
    )
}