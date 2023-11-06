import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from "../App";
import { Button } from './filter';


const Search= ({data})=> {
    if (!Array.isArray(data)) {
        return <div>No data available</div>; // or handle the case when data is not an array
      }
      // Assuming data is an array of arrays, accessing the first element
  const books = data[0];
//   When you are mapping over this data in your Search component, you need to access the first element of the outer array to access the inner array.

  return (
    <>
     <BookContainer>
     <BookCards>{books.map((book)=>
        {
            
            if (book.text) {
                return <BookCard key={book.id}>
                <div className='Book_img'>
                    
                 <img src={BASE_URL + book.image} alt="book" /> </div>
                 <div className="book_info">
                    <div className="info">

                    
                    <h2>{book.name} </h2>
                    <p>{book.text}</p>

                    </div>
                    {/* inf0 */}

               <Button>Rs {book.price}</Button>
                </div> 
                {/* book info */}


                </BookCard>
              } else {
                return <div>Loading...</div>;
              }


        }
              )//map
        } 
       
      
        

        </BookCards>




     </BookContainer>
   

    
    
    </>
  )
}

export default Search;

const BookCard = styled.div`
display: flex;
width: 340px;
height: 167px ;



border: 0.66px solid;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #9A6AB2 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #000000 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


.Book_img img{
    height: 100px;
    width:80px;
    margin: 20px 7px;
}
.book_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

   h2{
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
    font-family: 'Dancing Script';
    font-size: 19px;
       }
       p{
        margin-top: 4px;
        font-size: 12px;
        margin-left: 20px;
       
       }
       Button{
        margin-bottom: 10px;
       }

}





/* Rectangle 1 */



background: url(.png), 
radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(134, 233, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 19.4467px;





`
const BookCards = styled.div`
display:flex;
flex-wrap: wrap;
row-gap: 30px;
column-gap: 20px;
padding-top: 70px;




`;


const BookContainer = styled.section`
    background-image:URL('background.jpeg');
   
    border-top: 6px solid var(--secondary-color);

    ;
background-size:  cover;

height:calc(100vh - 190px) ;


`


