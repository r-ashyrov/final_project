import React, { Component } from "react";
import AppHeader from "../app-header";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css"
import "../style.scss"



export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: this.getLocalStorage()
        }

        // [{label: 'sddsddds', important: false, like: false, id: 0}]
        // this.addItem = this.addItem.bind(this)
    }

    setLocalStorage = arr => {
        localStorage.setItem('data', JSON.stringify(arr))
    }

    getLocalStorage = () => {
        return JSON.parse(localStorage.getItem('data'))
    }


    addItem = body => {
        this.setState(({data}) => {
            const newItem = {
                label: body,
                important: false,
                id: data.length + 1 
            }

            const newArr = [...data, newItem]

            this.setLocalStorage(newArr)

            return {
                data: newArr
            }
        })
    }



    deleteItem = id => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            this.setLocalStorage(newArr)

            return {
                data: newArr
            }
        })
    }

    onToggleImportant = id => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]

            const newItem = {...old, important:! old.important}

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            this.setLocalStorage(newArr)

            return {
                data: newArr
            }
        })
    }

    


    render() {
        return (

            <div className="app max-w-[900px] tablet:max-w-[500px] phone:max-w-[380px] phone-m:max-w-[330px] phone-s:max-w-[290px]">
                <AppHeader/>
                <PostList
                posts={this.state.data}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                />
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}



/*
import React from "react";
import AppHeader from "../app-header/app-header";
import PostAddForm from "../post-add-form";
import PostList from "../post-list";
import "./style.scss"
import "./app.css"

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}
export default App
*/