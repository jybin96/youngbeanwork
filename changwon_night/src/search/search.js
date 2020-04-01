import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    render(){
        return(
            <div className="searchbox">
                <div className="search">
                    <p>찾기</p>
                </div>
                <div className="box">
                    <input type="text" placeholder="검색어"></input>
                </div>
            </div>
        )
    }
}



export default Search;