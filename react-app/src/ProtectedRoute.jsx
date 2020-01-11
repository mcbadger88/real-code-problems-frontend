import React, {useState,useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './api/auth'

//HOC design may seems very confusing 
const ProtectedRoute = ({component:Component, ...rest}) => {

        const [authStatus, setAuthStatus] = useState(false)

        return (
            <Route 
            {...rest} 
            render={
                (props) => (auth.isAuthenticated() ? 
                <Component {...props}/> : 
                <Redirect to="/unauthorised" />)
                }
            />
        )
    }


export default ProtectedRoute