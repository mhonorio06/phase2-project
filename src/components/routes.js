import Reviews from "./Reviews";
import Home from "./Home";
import ReviewPage from "./ReviewPage";
import ReviewForm from "./ReviewForm";

const routes = [
                 {
                    path:"/",
                    element: <Home/>
                }, 
                {
                    path: "/reviews/new/:id",
                    element: <ReviewForm/>      
                },  
                
                { 
                    path:"/reviews",
                    element: <Reviews />
                },
                {
                    path:"/reviews/:id",
                    element: <ReviewPage />
                },
                {
                    path:"*",
                    element: <h2>404 not found</h2>

                },
                
              ]

export default routes;

              
                 
              
              
              
              
            
              