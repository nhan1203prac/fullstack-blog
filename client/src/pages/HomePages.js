import { Container, Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Header from "../component/header";
import PostList from "../component/postList";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/action";
import CreatePostModel from '../component/createPostModel';
import { useCallback } from "react";

function HomePage() {
    const dispatch = useDispatch(); 
    const classes = useStyles();

    const openCreateOpenModal = useCallback(() => {
        // console.log("Fab button clicked");
        dispatch(showModal());
    }, [dispatch]);
    

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreatePostModel />
            <Fab
                color="primary"
                className={classes.fab}
                onClick={openCreateOpenModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
}

export default HomePage;
