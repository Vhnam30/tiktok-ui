import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { BrowerRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Home />
            <Following />
        </div>
    );
}

export default App;
