import Reviews from "./Reviews";
import Home from "./Home";
import ReviewPage from "./ReviewPage";
import ReviewForm from "./ReviewForm";
import App from "./App";
import ErrorPage from "./ErrorPage";

const routes = [
            {
                    path:"/",
                    element: <App/>,
                    errorElement: <ErrorPage/>,
                    children: [
                  
                        
                { 
                    path:"/",
                    element: <Home />,
                },  
                {
                    path:"/reviews",
                    element: <Reviews/>                
                },      
                
            
                {
                    path: "/reviews/new/:id",
                    element: <ReviewForm/>      
                },  
                {      
                    path:"/reviews/:id",
                    element: <ReviewPage />
                },
        ]
    }    
];

export default routes;

              
                 
              
              
              
              
            
              