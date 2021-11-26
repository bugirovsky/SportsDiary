import React, { Component } from 'react'
import './navbar.css'
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import Diary from '../components/Diary/Diary'
import Product from '../components/Product/Product'
import Calendars from '../components/Calendar/Calendar'

export default class Navbar extends Component{
    render(){
        return(
            <Router>
                <nav className="navbar navbar-inverse navbar-expand-xl navbar-dark">
                    <div className="navbar-header">
                        <NavLink to="/diary"><b className="navbar-brand"><i className="fa fa-sticky-note"></i>Мой Дневник</b></NavLink>
                     </div>
        
                    <div id="navbarCollapse" className="collapse navbar-collapse">		
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink to="/product">Продукты</NavLink>
                            </li>
                            <li>
                                <NavLink to="/calendar">Календарь</NavLink>
                            </li>
                            <li>
                                <NavLink to="product/addProduct"></NavLink>
                            </li>
                            <li>
                                <NavLink to="diary/addNotation"></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            <Switch>
                <Route path="/Calendar">
                   <Calendars/>
                </Route>

                <Route path="/Product">
                    <Product/>
                </Route>
                
                <Route path="/">
                    <Diary/>
                </Route>
            </Switch>
        </Router>
        ) 
    }    
}