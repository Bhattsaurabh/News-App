import { Link } from "react-router-dom";
import React from "react";


export default function Nav(props) {

    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className ="navbar-brand" to="/" >Newsapp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li ><Link className ="nav-link" aria-current="page"   to="/sports"> Sports</Link></li>
                            <li> <Link className ="nav-link"  aria-current="page"  to="/entertainment"> Entertainment</Link></li>
                            <li> <Link className ="nav-link"  aria-current="page"  to="/health"> Health</Link></li>
                            <li> <Link className ="nav-link"  aria-current="page"  to="/politics" >Politics</Link></li>
                            <li> <Link className ="nav-link"  aria-current="page"  to="/weather" >Weather</Link></li>
                            <li> <Link className ="nav-link"  aria-current="page"  to="/education">Education</Link></li>
                        </ul>
                    </div>
                     <input className="form-control mr-sm-2" id="search" type="search"
                     onChange={(e)=>{props.handleInput(e.target.value)}} placeholder="Search" aria-label="Search"
                         />
                        <Link className="btn btn-outline-success my-2 my-sm-0" aria-current="page"   to="/search" 
                       >search</Link>
                    

                </div>



            </nav>

        </>
    );
}