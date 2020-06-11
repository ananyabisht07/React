import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deletePost } from '../actions/postAction';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
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
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);