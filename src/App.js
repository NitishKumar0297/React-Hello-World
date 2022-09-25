import Products from "./components/Products/Products";
import Header from "./components/Layouts/Header";
import SubHeader from "./components/Layouts/SubHeader";


const App = () => {
  return(
    <div>
      <Header></Header>
      <SubHeader></SubHeader>
      <Products></Products>
    </div>
  );
}

export default App;
