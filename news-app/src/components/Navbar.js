import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState({
        status: "",
        totalarticles: 0,
        articles: []
    });

    const handleSubmit = async () => {
        if (!query.trim()) {
            alert("Please enter a search query");
            return;
        }
        setLoading(true);
        console.log("Search for:", query);
        navigate(`/s?key=${query}`)
        setLoading(false);
    };

    const handleLoginClick = () => {
        navigate('/login')
    }

    useEffect(() => {
        console.log("Updated search results:", searchResults);
    }, [searchResults]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/">Swift News</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <input
                            className='form-control shadow-none me-2'
                            type='text'
                            placeholder='Search news'
                            onChange={(e) => { setQuery(e.target.value) }}
                            style={{ width: "350px" }}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        />
                        <button
                            className='btn btn-light rounded-pill shadow-none me-2'
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Search"}
                        </button>
                        <button className='btn btn-light rounded-pill' onClick={handleLoginClick}>Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
