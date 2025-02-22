import React from "react";
import Categories from "../components/Categories";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("key");

    return (
        <div>
            <Categories />
            <div className="container-fluid border p-2">
                You are searching for {keyword}
            </div>
        </div>
    );
}

export default SearchPage;
