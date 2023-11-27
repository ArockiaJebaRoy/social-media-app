import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';

import EditPost from './EditPost';

import { DataProvider } from './context/DataContext';


function App() {
  


  return (
    <div className="App">
      <DataProvider>
          <Header title="Dhuddu Social Media" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home  />} />
              <Route path="post" > 
                <Route index element={<NewPost /> } /> 
                <Route path=":id" element={<PostPage />} />
              </Route>
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="about" element={<About />} /> 
              <Route path="*" element={<Missing />} />
          </Routes>
          <Footer /> 
      </DataProvider>

   </div>
  );
}

export default App;


    /*<nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          <li><Link to="/postpage">Postpage</Link></li>
          </ul>
      </nav>

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/newpost" element={<NewPost />} />
         <Route path="/postpage" element={<PostLayout />}>
            <Route index element={<PostPage />} />
            <Route path=":id" element={<Post />} />
            <Route path="newpost" element={<NewPost />} />
         </Route>
         <Route path="*" element={<Missing />} />
  </Routes> */
             
    
    
