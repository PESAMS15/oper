import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from './components/StateLifting/Users';
import Event from './Event';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Calculator from './components/Calculator';
import TodoApp from './components/Todo';
import SignUser from './components/Formik/SignUser';
import UseEffect from './components/UseEffect';
import useFetch from './components/CustomHooks/Fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HttpFetch from './components/HTTPMethods/HttpFetch';
import FetchedItems from './components/UseEfffect2';
import AddP from './components/HTTPMethods/AddP';
import "antd/dist/antd"
import AudioPlayer from './components/HTTPMethods/Aud';
import VideoPlayer from './components/HTTPMethods/Vid';
import Onepost from './components/HTTPMethods/Onepost';
import Signup from './components/CustomHooks/Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddP />} />
      <Route path="/event" element={<Event />} />
      <Route path="/users" element={<Users />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/todo" element={<TodoApp />} />
      <Route path="/http" element={< HttpFetch/>} />
      <Route path="/aud" element={< AudioPlayer/>} />
      <Route path="/signup" element={< Signup/>} />
      <Route path="/signuser" element={< SignUser/>} />
      <Route path="/use" element={< useFetch/>} />
      <Route path="/vid" element={< VideoPlayer/>} />

      <Route path="/onepost/:id" element={< Onepost/>} />

      <Route path="/morning" element={<FetchedItems />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    {/* <App /> */}
    {/* <Users /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
