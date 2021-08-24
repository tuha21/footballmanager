import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute ({component: Component, isLogin, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => isLogin === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}
export default PrivateRoute