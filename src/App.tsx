import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import NewUserPage from './components/NewUserPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route index element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/new" element={<NewUserPage />} />
                </Routes>
            </Router>
        </QueryClientProvider>

    );
}

export default App;
