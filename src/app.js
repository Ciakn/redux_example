import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import CakeCounter from "./CakeCounter";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeCounter />
      </Provider>
    </div>
  );
};

export default App;
