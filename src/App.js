import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Post from './post/post';
import Header from './layout/headers';
import Footer from './layout/footer';
import Read from './post/read';

function App() {
  return (
    <div>
      <Header />
      <div>
        <main ClassName="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Post />} />
            <Route path="/blog/:fileName" element={<Read />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;