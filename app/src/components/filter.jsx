import React from 'react'
import styled from 'styled-components';

const  Filter=({data})=> {
  const filteredBook=(type)=>{
    if(type==='all'){
      setFiltered(data);
      setSelectedBtn('all');
      return;
    }
    const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      FilteredData(filter);
      setSelectedBtn(type);
    
    
  }
      
    // console.log('Filter component is rendering');
  return (
    

  
        <FilterContainer>
            
       <Button onClick={()=>filteredBook('all')}   >All</Button>

       <Button onClick={()=>filteredBook('Children')}>Children</Button>
       <Button onClick={()=>filteredBook('Horror')}>Horror</Button>
       <Button onClick={()=>filteredBook('Romance')}>Romance</Button>
       <Button onClick={()=>filteredBook('Self-Help')}>Self-Help</Button>
       <Button onClick={()=>filteredBook('Thriller')}>Thriller</Button>


            </FilterContainer>



 
  )
}

export default Filter;
export const FilterContainer= styled.div`
height:100%;
width: 100%;
display: flex;
justify-content: center;
gap:12px;
margin-bottom: 30px;
    
`
export const Button=styled.button`
    background-color:#e59e10;
    border-radius: 7px;
    padding: 6px 10px;
    color:var(--primary-color);
    
    font-size: 16px;
    font-weight: 400;
    border: none;
    cursor:pointer;
    &:hover {
  background-color: #f7c14c;
}



`