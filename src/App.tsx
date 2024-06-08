import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/new" element={<NewUser />} />
                </Routes>
            </Router>
        </QueryClientProvider>

    );
}

export default App;
