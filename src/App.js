import PrivateRouting from "./routing/PrivateRouting";
import '../src/style/sytle.scss'
import {useSelector} from "react-redux";

function App() {

    const {user} = useSelector((store) => store.persistedReducer.user)
    console.log(user.name)
  return (
    <div className="App">
        {/*{*/}
        {/*    !user.name.length ?*/}
        {/*}*/}
        <PrivateRouting/>
    </div>
  );
}

export default App;
