import './App.css'
import Footer from './reusableComponents/footer'
import Routing from "./Routing";
import Header from "./reusableComponents/header";

function App() {

    return (
        <>
            {/*<Header></Header>*/}
            <div className="container">
                <Routing/>
            </div>
            {/*<Table2></Table2>*/}
            <Footer/>
        </>
    )
}

export default App