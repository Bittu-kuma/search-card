import React from 'react'

const InputBox = (props) => {
    return (
        <div className='searchbox'>
            
            <form>
            <label style={{color:"red"}}>{props.itemData}</label>
                <input type="text" 
                placeholder='Search Keywords' 
                onChange={props.filterData} 
                value={props.itemData}
                />
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    )
}

export default InputBox
