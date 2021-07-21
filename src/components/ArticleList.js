import React from "react";
import Article from "./Article.js"

function ArticleList({posts}){
    return(
        <main>
            {
                posts.map(message => {
                    return <Article key = {message.id} title = {message.title} date = {message.date} preview = {message.preview} minutes = {message.minutes}/>
                    // return <Article key = {message.id} post = {}
                })
            }
        </main>
    )
}

export default ArticleList