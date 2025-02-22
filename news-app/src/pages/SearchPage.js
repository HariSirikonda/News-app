import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("key");
    const [articles, setArticles] = useState([]);
    const fetchnews = async () => {
        const url = `https://newsapi.org/v2/everything?q=${keyword}&from=2025-01-22&sortBy=publishedAt&apiKey=2411e323f4e144b08e9690253cba7b85`
        const responce = await fetch(url);
        const data = await responce.json();
        setArticles(data.articles);
        console.log(articles);
    }

    useEffect(() => {
        fetchnews();
    }, [keyword])

    return (
        <div>
            <Categories />
            <div className="container p-2 border">
                <div>
                    {articles.map((article) => (
                        <div className="border mb-1">
                            <h6>{article.title}</h6>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
