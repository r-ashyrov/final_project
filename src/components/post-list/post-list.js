import React from "react";
import PostListItem from '../post-list-item/'
import "./post-list.css"

const PostList = ({posts, onDelete, onToggleImportant}) => {

    const elems = posts.map( item => {
        const {id, ...itemProps} = item
        console.log(itemProps);

        return (
            <li key={id} className="list-group-item">
                <PostListItem
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}
export default PostList;




/*import React from "react";
import PostListItem from "../post-list-item/post-list-item.js"
import "./post-list"

const PostList = () => {
    return(
        <ul className="app-list list-group">
            <PostListItem/>
        </ul>
    )
}

export default PostList*/