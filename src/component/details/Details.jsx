import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsInfo from './DetailsInfo';


export default function Details() {
  const { id } = useParams();
  const [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
        const result = await response.json();
        setCardInfo(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);


  return (
    <>

      {cardInfo ? (
        <DetailsInfo category={cardInfo?.category} description={cardInfo?.description}
                     id={cardInfo?.id} image={cardInfo?.image}
                     name={cardInfo?.name} topic={cardInfo?.topic}
                     subtopics={cardInfo?.subtopics} rating={cardInfo?.rating}
        />
      ) : (
        'loading...'
      )}
    </>
  );
}
