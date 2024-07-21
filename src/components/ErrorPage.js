import React from 'react';
import NavBar from './NavBar';
import { useRouteError } from 'react-router-dom';
function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <>
          <header>
            <NavBar/>
          </header>
          <main>
            <h1>404 Not Found</h1>
          </main>
        </>
    )
}

export default ErrorPage;

