import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
       post: null
    }
    componentDidMount(){
        let id =  this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
               console.log(res)
           })
        
    }
    render(){
         const post =this.state.post ? (
             <div className="post">
                 <h3 className="center">{this.state.post.title}</h3>
                 <p>{this.state.post.body}</p>
             </div>
         ) : (
             <div className="center"><h3>Loading post...</h3></div>
         )
        return(
            <div className="container">
                {post}
            </div>
        );
    }
}
export default Post;