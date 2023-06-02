import Game from "../pages/Game/index.jsx";
import Home from "../pages/Home/index.jsx";

export const routes = {
    Home : {
        path: '/',
        element: <Home/>, 
    },
    GAME : {
        path: '/game',
        element: <Game />, 
    }
}