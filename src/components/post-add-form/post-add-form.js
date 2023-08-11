import React, { Component } from "react";
import "./post-add-form.css"


export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onValueChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        if (document.querySelector('.form-control').value) {
            this.props.onAdd(this.state.text)
            this.setState({
                text: ''
            })
        }

    }

    render() {
        return (
            <div className="relative tablet:ml-[-58px] phone:ml-[-45px] phone-m:ml-[-45px] phone-s:ml-[-50px]">
                <form className="btn-panel container w-[500px] h-[60px] bg-[#892CDC] rounded-xl absolute tablet:w-[370px] pt-[4px] phone:w-[300px] pr-[11px] phone-m:w-[270px] phone-s:w-[240px]" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Task Name:"
                        className="input bg-[#BC6FF1] placeholder-white ml-[16%] mt-[3%] w-[250px] form-control new-post-label tablet:w-[180px] phone:w-[150px] phone-m:w-[120px] phone-s:w-[100px]"
                        onChange={this.onValueChange}
                        value={this.state.text} />
                    <button
                        type="submit"
                        className="add-btn bg-[#BC6FF1] w-[80px] h-[35px] text-white rounded-xl ml-3 btn btn-outline-secondary">
                        Add
                    </button>
                </form>
            </div>
        )
    }
}


/*import React from "react";
import "./post-add-form.css"

const PostAddForm = () => {
    return (
        <div className="relative">

            <form className="container w-[500px] h-[60px] bg-[#892CDC] rounded-xl absolute">
                <input
                    type="text"
                    placeholder="Enter Task Name:"
                    className="input bg-[#BC6FF1] placeholder-white ml-[16%] mt-[3%] form-control new-post-label">
                </input>

                <button
                    type="submit"
                    className="add-btn bg-[#BC6FF1] w-[80px] h-[35px] text-white rounded-xl ml-3 btn btn-outline-secondary">Add</button>
            </form>
        </div>
    )
}

export default PostAddForm*/