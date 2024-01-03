import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from './components/feed'
import IndexPage from './components/index'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<IndexPage/>}/>
                <Route exact path='/feed' element={<PostList/>}/>
            </Routes>
        </div>
    )
}

export default App