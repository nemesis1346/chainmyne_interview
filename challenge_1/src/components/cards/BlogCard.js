import React from 'react';
import '../styles/blogCard.css';


class BlogCard extends React.Component {

    render() {
        const { post } = this.props;
        console.log('BlogCard')
        // console.log(this.props);
        return (
            <div className="post card">
                <div className="img-container">
                <a href={post.url} target="_blank"> 
                    <img src={post.imageUrl}></img> </a>
                </div>
                <div className="card-body">
                    <p >{post.date}</p>
                    <h2>{post.title}</h2>
                    <p >{post.titleText}</p>
                       <a href={post.url}  target="_blank"><i className="waves-effect waves-light btn">Read more...</i></a> 
                </div>
            </div>
        )
    }
}

export default BlogCard;