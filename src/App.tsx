import Contacts from "./Components/Contacts/Contacts";
import Delicious from "./Components/Delicious/Delicious";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Main from "./Components/Main/Main";
import Products from "./Components/Products/Products";
import cls from "./Style/App.module.css";

function App() {
  return (
    <div className={cls.App}>
      <Layout>
        <Header />
        <Main />
        <Delicious />
        <Products />
        <Events />
        <Contacts />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
