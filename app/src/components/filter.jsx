import React from 'react'
import styled from 'styled-components';

const  Filter=()=> {
    // console.log('Filter component is rendering');
  return (
    

  
        <FilterContainer>
            
       <Button>All</Button>

       <Button>Children</Button>
       <Button>Horror</Button>
       <Button>Romance</Button>
       <Button>Self-Help</Button>
       <Button>Thriller</Button>


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