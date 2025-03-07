import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import NotFound from '../assets/not-found.png';
import { Link, useSearchParams } from "react-router-dom";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("key");
    const category = searchParams.get("cat");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchnews = async () => {
            const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-02-07&sortBy=publishedAt&apiKey=2411e323f4e144b08e9690253cba7b85`
            const responce = await fetch(url);
            const data = await responce.json();
            setArticles(data.articles);
            console.log(articles);
        }
        if (query) fetchnews();
    }, [query])

    return (
        <div>
            <Categories />
            <div className="container p-2 border">
                <div className="row g-2">
                    {articles.map((article) => (
                        <div className="col-md-6 mb-1" key={article.url}>
                            <div className="d-flex m-1 border rounded shadow-sm p-1">
                                <div className="p-1">
                                    {article.urlToImage &&
                                        <img
                                            className="rounded"
                                            src={article?.urlToImage || NotFound}
                                            alt="Show me"
                                            style={{ width: "256px", height: "170px" }}
                                        />
                                    }
                                </div>
                                <div className="p-1">
                                    <Link
                                        to={article.url}
                                        target="_blank"
                                        className="title-link text-decoration-none text-dark"
                                    >
                                        <h5>{article.title}</h5>
                                    </Link>
                                    <p>
                                        {article.description && article.description.length > 100
                                            ? article.description.slice(0, 100) + "..."
                                            : article.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
