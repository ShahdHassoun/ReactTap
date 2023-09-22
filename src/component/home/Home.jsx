import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function Home() {
const[webTopics,setWebTopics]=useState(null)


useEffect(()=>{
    async function fetchData() {
    try {
        const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        const result = await response.json();
    
       setWebTopics(result);
    
       
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
},[])

  return (
    <>
    <main>

    <div class="webTobics-sec">
    <div class="container">
        <div class="search-container">
            <div class="search-input">
              <ion-icon name="search-outline"></ion-icon>
              <input type="text" placeholder="Search the website..." />
            </div>
            <div class="search-bar-actions">
              <div class="drop-down-menu">
                <label for="sort">Sort by:</label>
                <select name="sort" id="sort">
                  <option value="default" selected>Default</option>
                  <option value="TopicTitle">Topic Title</option>
                  <option value="AuthorName">Author Name</option>
                </select>
              </div>
              <div class="drop-down-menu">
                <label for="filter">Filter by:</label>
                <select name="filter" id="filter">
                  <option value="default" selected>Default</option>
                </select>
              </div>
            </div>
          </div>
        <div class="webTopics-info">
            <h2>"24" Web Topics Found</h2>
        </div>
        <div class="cards-container" id="cards-container">
          {webTopics?.map((topic)=>{
            return <Card key={topic.id} id={topic.id}
                         name={topic.name} image={topic.image} 
                         category={topic.category} topic={topic.topic}/>
       })}
            
        </div>
        
    </div>
    
</div>
</main>
    
    </>
  )
}
