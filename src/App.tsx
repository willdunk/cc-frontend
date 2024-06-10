import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import Protected from './pages/Protected';
import ReverseProtected from './pages/ReverseProtected';
import NewListing from './pages/NewListing';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Protected />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/new/listing" element={<NewListing />} />
                    </Route>
                    <Route path="/login" element={<ReverseProtected />}>
                        <Route index element={<Login />} />
                    </Route>
                    <Route path="/new" element={<ReverseProtected />}>
                        <Route index element={<NewUser />} />
                    </Route>
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
