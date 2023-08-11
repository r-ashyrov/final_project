import React, { Component } from "react";
import "./post-list-item.css"
export default class PostListItem extends Component {

    render() {

        const { label, important, onDelete, onToggleImportant } = this.props

        let classNames = 'app-list-item flex justify-between'

        if (important) {
            classNames += ' important'
        }

        return (
            <div className={classNames}>

                <div className="wrapper flex justify-between shadow-2xl mr-3 ">

                    <span className="app-list-item-label relative">
                        {label}
                    </span>
                    
                    <div className="cross absolute w-[150px] h-[2px] bg-white mt-[30px] ml-2 opacity-0"></div>
                        
                    <span className="task text-[10px] text-[#fafafa] font-bold mt-[5px]">Task Completed!</span>

                    <div className="flex justify-center items-center mr-3">
                        <button
                            type="button"
                            className="btn-star btn-sm action-button tic"
                            onClick={onToggleImportant}
                        >
                            ✅
                        </button>

                        <button
                            type="button"
                            className="btn-trash btn-sm action-button x ml-3"
                            onClick={onDelete}>
                            ❌
                        </button>
                    </div>


                </div>
            </div>
        )
    }

}














/*import React from "react"
import "./post-list-item.css"

const PostListItem = () => {
    return(
        <>
            <div className="wrapper flex justify-between shadow-2xl">
                <span className="app-list-item-label">Buy Groceries!</span>

                <div className="flex justify-center items-center mr-3">
                    <button className="action-button tic">✅</button>
                    <button className="action-button x ml-3">❌</button>
                </div>
            </div>
        </>
    )
}

export default PostListItem*/