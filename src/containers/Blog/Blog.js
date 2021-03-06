import React, { Component } from 'react';
// import axios from 'axios';
// import { Route, Link } from 'react-router-dom';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    state = {
        auth: false 
    }


  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact 
                // activeClassName="my-active"
                >
                 Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Switch>

        <Route path="/" exact component={Posts} />
       {this.state.auth ? <Route path="/userLogged" exact component={Posts} /> : null}
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
        <Route render={() => <h1>404</h1>}/>
                </Switch>

      </div>
    );
  }
}

export default Blog;
