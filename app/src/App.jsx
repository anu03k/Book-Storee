import styled from 'styled-components'
import React, { useState } from 'react';
import './App.css'
import Filter from './components/filter';
import Book_cards from './components/Book_cards';


export const BASE_URL="http://localhost:9000/";


import { useEffect } from 'react';
import Search from './components/Search';
// call network


const App = () => {
  const [data,SetData]=useState([]);
  const [loading, setLoading] = useState(true);
  let error=null;
  const[FilteredData, setFiltered]=useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  

   
   useEffect(()=>{
    const FetchBookData = async ()=>{
      try{ 
      const response =await fetch(BASE_URL);
      const json= await response.json();
      console.log(json);
      SetData(json);
      setFiltered(json);
      
      //set the received json as data using setData 
        setLoading(false);

    } catch(error){
      console.log(error);
      setLoading(false);
      
    };
  
  
    }
    FetchBookData();
    
  },[])
  //  trigers this funxtion before UI rendered  empty array set then renders only once
  if(error)return <div>{error}</div>
  if(loading) return <div>Loading....</div>
  
  // Wait for the data to be fetched before rendering the rest of the app.
  if (data === null) {
    return <div>Loading...</div>;
  }




  // let filter=null;
//   const SearchBook = (e) => {
//     const searchValue = e.target.value;

//     console.log(searchValue);
//        if(searchValue=== ''){
//       setFiltered(null);
//                               }
    
//     const filter = data?.filter((book) =>
//     book.name.toLowerCase().includes(searchValue.toLowerCase())
//   );
//   setFiltered(filter);
  
// };
// const SearchBook = (e) => {
//   const searchValue = e.target.value.toLowerCase();

//   if (!data) {
//     return;
//   }

//   if (searchValue === '') {
//     setFiltered(data);
//     return;
//   }

//   const filter = data.filter((book) =>
//     book.name.includes(searchValue)
//   );
//   setFiltered(filter);
// };

 
    


  


  return ( <>
  hi app
  <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="logo.png" alt="logo" srcset="" /> THE BOOKSTORE
      </div>

      <div className="search">
        <input type="text" onChange={(e)=>SearchBook(e)}   placeholder='Search Book' />
      </div>
    </TopContainer>
    <Filter data={data} />
    
      
  </MainContainer>
  <Search  data ={FilteredData}/>
  {/* since data ra filtered data duitai ma json nai pathako xa */}



  
  
  
  
  </>
  )
};




export default App;


const MainContainer = styled.div`
background-color:#45382f



`;
const TopContainer = styled.section`
.logo img{
  height:70px;}
  .logo{
    color:white;
  }
  min-height: 140px;
  display: flex;
  justify-content:space-between;
  align-items :center ;


  .search input{
    border:2px solid #DA9100;
    background-color: transparent;
    font-size: 16px;
    color:white;
    height:40px; 
    border-radius:10px;
    text-align: center;
    padding: 0 10px;

  }
  .search input:active{
    border: none;
  }

  
`;
