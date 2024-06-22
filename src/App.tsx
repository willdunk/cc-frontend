import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import Protected from './pages/Protected';
import ReverseProtected from './pages/ReverseProtected';
import NewListing from './pages/NewListing';
import ListingComponent from './components/ListingComponent';
import UserComponent from './components/UserComponent';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<Protected />}>
                        {/* You MUST be logged IN */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/new/listing" element={<NewListing />} />
                    </Route>
                    <Route path="/login" element={<ReverseProtected />}>
                        {/* You MUST be logged OUT */}
                        <Route index element={<Login />} />
                    </Route>
                    <Route path="/new" element={<ReverseProtected />}>
                        {/* You MUST be logged OUT */}
                        <Route index element={<NewUser />} />
                    </Route>
                    {/* Below routes do not care about login status, but also CAN take it into account */}
                    <Route path="/user/:userId" element={<UserComponent />} />
                    <Route path="/user/:userId/:listingId" element={<ListingComponent />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
