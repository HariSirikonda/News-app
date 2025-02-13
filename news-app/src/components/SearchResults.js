import React from "react";

function SearchResults({ loading, searchResults }) {
    return (
        <div className="container text-start border mt-2 p-2">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div>
                    {searchResults.data.map((article, index) => (
                        <div className="border mb-2 p-2 shadow-sm">
                            <h4>{article.title}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResults;
