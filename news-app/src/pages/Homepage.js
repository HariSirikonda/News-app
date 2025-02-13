import React, { useEffect, useState } from 'react'
import SearchResults from '../components/SearchResults';

function Homepage() {
    const [query, steQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState({
        status: "",
        totalResults: 0,
        articles: [],
    });

    const SearchClick = async () => {
        setLoading(true);
        console.log("Search for :", query)
        const url = `https://api.mediastack.com/v1/news?access_key=f96538fca203b0b69a67517e28b08f27&keywords=${query}&countries=us,gb,de`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            alert(data.message);
            setLoading(false);
            return;
        }
        setSearchResults(data);
        setLoading(false);
    };

    useEffect(() => {
        console.log("Updated search results:", searchResults);
    }, [searchResults]);

    return (
        <div className='container text-center'>
            <h1>This is home page</h1>
            <div className='d-flex align-items-center justify-content-center border'>
                <input
                    className='form-control shadow-none m-2'
                    type='text'
                    placeholder='Enter the query'
                    onChange={(e) => { steQuery(e.target.value) }}
                />
                <button
                    className='btn btn-primary rounded-pill shadow-none m-2'
                    onClick={SearchClick}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Search"}
                </button>
            </div>
            <SearchResults loading={loading} searchResults={searchResults} />
        </div>
    )
}

export default Homepage
