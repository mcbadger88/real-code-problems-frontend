import React, {useState,useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './api/auth'

//HOC design may seems very confusing 
const ProtectedRoute = ({component:Component, ...rest}) => {
        
        return (
            <Route 
            {...rest} 
            render={

                (props) => {
                    if(auth.fetching){
                        return <h2>Fetch Auth Data</h2>
                    }else{
                    if(auth.isAuthenticated()) {
                        return <Component {...props}/>
                    }else{
                        return  <Redirect to="/unauthorised" />
                    }
                }
            }
                // (props) => (
                    
                // auth.isAuthenticated() ? 
                // <Component {...props}/> : 
                // <Redirect to="/unauthorised" />
                // )
                }
            />
        )
    }


export default ProtectedRoute