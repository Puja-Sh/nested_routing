import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './styles/style.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Content from "./pages/Content";
import {SearchKeyProvider} from "./globalContext/SearchKeyContext";

const App = () => {

    return (
        <SearchKeyProvider>
                <div>
                    <Header/>
                    <Router>
                        <Routes>
                            <Route path="/" exact element={<Home/>}/>
                            <Route path="/section/:id" exact element={<Section/>}/>
                            <Route path="/section/:id/content/:id" exact element={<Content/>}/>
                        </Routes>
                    </Router>
                </div>
        </SearchKeyProvider>
    );
}

export default App;
