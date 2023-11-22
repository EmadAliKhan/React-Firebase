import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from '../SignUp/SignIn'
import Card from '../Card/Card'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/card' element={<Card />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter
