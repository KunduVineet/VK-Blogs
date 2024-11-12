import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


//Step 1 :Create context
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[post,setPost] = useState([]);
    const[page,setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    //Data 

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("Error while fetching data", error);
            setPage(1);
            setPost([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }


    const value = {
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts
    }

    //Step 2:- Provider
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}