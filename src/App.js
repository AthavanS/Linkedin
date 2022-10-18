import logo from './logo.svg';
import './App.css';
import { Header } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css';
import Head from './Components/Header/header';
import Foot from './Components/Footer/footer';
import { Upload } from 'antd';
import Page from "./Components/Upload";


function App() {
  return (
    <div>
      {/* <Head/>
      <Foot/> */}
      <Page/>
    </div>
  );
}

export default App;
