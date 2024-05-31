import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NewUserPage from './components/NewUserPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/new" element={<NewUserPage />} />
            </Routes>
        </Router>
    );
}

export default App;
