import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
//import Post from './Post'
//import PostLayout from './PostLayout';
import { useState,useEffect } from 'react';
import { format } from 'date-fns'
import api from "./api/posts"
import EditPost from './EditPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';
import { DataProvider } from './context/DataContext';


function App() {
  


  return (
    <div className="App">
      <DataProvider>
          <Header title="Dhuddu Social Media" />
          <Nav 
            search={search} setSearch={setSearch} />
          <Routes>
            <Route path="/" element={
            <Home posts={searchResults} 
            fetchError= {fetchError}
            isLoading={isLoading}
            />} />
              <Route path="post" > 
                <Route index element={<NewPost 
                  handleSubmit={handleSubmit}
                  postTitle={postTitle}
                  setPostTitle={setPostTitle}
                  postBody={postBody}
                  setPostBody={setPostBody}
                  /> } />
                
                <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
              </Route>
              <Route path="/edit/:id" element={<EditPost posts={posts} handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTitle={editTitle} setEditTitle={setEditTitle} />} />

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
             
    
    
