import { useDispatch } from "react-redux";
import * as actions from './redux/action'
import HomePage from "./pages/HomePages";
function App() {
  // const dispatch = useDispatch()
  // dispatch(actions.getPosts.getPostRequest())
  return (
      <HomePage></HomePage>
  );
}

export default App;
