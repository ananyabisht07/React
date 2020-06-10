import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    // state = {
    //    post: null
    // }
    // componentDidMount(){
    //     let id =  this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //            console.log(res)
    //        })
    // }
    render(){
         const post =this.props.post ? (
             <div className="post">
                 <h3 className="center">{this.props.post.title}</h3>
                 <p>{this.props.post.body}</p>
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

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post);