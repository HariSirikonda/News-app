import React from "react";

function SearchResults({ loading, searchResults }) {
    return (
        <div className="container text-start border mt-2 p-2">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : !Array.isArray(searchResults) ? ( // Ensure searchResults is an array
                <p className="text-center">No results found.</p>
            ) : (
                <div>
                    {searchResults.map((article, index) => (
                        <div key={article.url || index} className="border mb-2 p-2 shadow-sm d-flex">
                            <div>
                                <p>{article.source}</p>
                                <h5>{article.title}</h5>
                            </div>
                            <div className="mx-2">
                                <img src={article.image} style={{ width: "150px", height: "150px" }}></img>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResults;
