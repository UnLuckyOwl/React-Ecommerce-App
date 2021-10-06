import React from 'react'
import './style.css'
import bleachLogo from '../../assets/bleachLogo.png'
// import bg from '../../assets/bleachCollage-2.jpeg'
import { Button } from '@material-ui/core'
import { Link } from 'react-scroll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <div className="home-title">
                    <img src={bleachLogo} alt="" />
                    <h1>Handmade replica swords inpired by bleach</h1>
                    {/* <p>SCROLL TO SHOP</p> */}

                    <Router>
                        <Link to="shop" spy={true} smooth={true}>
                            <Button variant="contained" size="medium">
                                <p>Shop Swords</p>
                            </Button>
                        </Link>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default Home
