import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MyLikes from './pages/MyLikes';
import MyPosts from './pages/MyPosts';
import NotFound from './pages/NotFound';
import PostRegister from './pages/PostRegister';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route path='/register'>
          <PostRegister /> {/* 글 등록 */}
        </Route>
        <Route path='/profile'>
          <Profile /> {/* 나의 정보 수정 */}
        </Route>
        <Route path='/myPosts'>
          <MyPosts /> {/* 나의 게시글 목록 */}
        </Route>
        <Route path='/myLikes'>
          <MyLikes /> {/*  내가 좋아요 한 게시글 목록   */}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
