import { Routes, Route } from 'react-router-dom';
import News from './components/news.jsx'
import NewsDetails from './components/newsDetails.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
    );
}

export default App;
