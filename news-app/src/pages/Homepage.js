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
        const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-01-10&sortBy=publishedAt&apiKey=2411e323f4e144b08e9690253cba7b85`;
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
