import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound.js/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';
import UserDetail from './components/UserDetail/UserDetail';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
        <Route path='user/:userId' element={<UserDetail></UserDetail>}></Route>
        <Route path='posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
