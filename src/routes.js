import { Switch, Route } from "react-router-dom";
import Home from '../src/pages/Home.js'
import Produto from '../src/pages/Produto.js'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/produto/:id" component={Produto}/>
        </Switch>
    )
}