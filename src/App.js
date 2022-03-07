import data from './data';
import './App.css';
import Search from './component/search/Search';
import CourseCard from './component/cardComponent/CourseCard';
import React, {useState} from 'react';
import UseReducer from './Hooks/UseReducer';

const  App = ()=> {
    

    const [filter, setFilter] = useState("");

  const search = (event) => {
    setFilter(event.target.value);
  }
 

  const searchData = data.cardData.filter(arr =>{
    return Object.keys(arr).some(arrayIndexValue =>
        arr[arrayIndexValue].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })
console.log(searchData);

  return (
    <div className="App">
      {/* <h1 style={{color:"red"}}>{course.cardData[0].title}</h1> */}

      <Search filter={search} searchData={filter} />
      {/* <UseReducer/> */}

      <div className='course'>
        {
          searchData.map((item, index)=>
            ( <CourseCard courseData={item} key={index} />)
          )
        }
        
        
      </div>
    </div>
  );
}

export default App;
