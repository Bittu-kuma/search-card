import React from 'react'
import InputBox from './InputBox';
import './search.css';

const Search = (props) => {
    return (
        <>
            <div className='searchCourse'>
                <div>
                    <h2>Search for courses</h2>
                    <div className='title-divider'></div>
                    <p>Fill keywords to seek for courses</p>
                    <InputBox filterData={props.filter} itemData={props.searchData} />
                </div>            
            </div>
            
        </>
    )
}

export default Search;
