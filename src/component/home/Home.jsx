import React, { useEffect, useState } from 'react'
import Card from './Card';
import { loadTopics } from '../shared/api';
export default function Home() {
const[topics,setTopics]=useState(null);
const[viewTopics,setViewTopics]=useState(null);

const[loading,setLoading]=useState(false);
const[error,setError]=useState(null);

const[search,setSearch]=useState('');
const[sortBy,setSortBy]=useState('');

const[filterBy,setFilterBy]=useState('')
const[filterOptions,setFilterOptions]=useState(null);



useEffect(()=>{
  setLoading(true);
  setTopics(null);
  loadTopics(search)
  .then((data)=>{
    setTopics(data);
  })
  .catch((error)=>{
    setError(error);

  })
  .finally(()=>{
    setLoading(false);
  });
},[search]);

useEffect(()=>{
  if (topics) {
    let categories = new Set(); 
    topics.forEach(card => categories.add(card.category));
    setFilterOptions([...categories]);

    let updatedCards = [...topics];
    if (sortBy) {
      updatedCards.sort((a, b) => {
        switch (sortBy) {
          case "AUTHOR":
            return a['name'] < b['name'] ? -1 : 1;
          case "TOPIC":
            return a['topic'] < b['topic'] ? -1 : 1;
          default:
            throw `unknown sort by object ${sortBy}`;
        }
      });
    }

    if (filterBy) {
      updatedCards = updatedCards.filter(card => card.category === filterBy);
    }
    setViewTopics(updatedCards);
  }
}, [topics, sortBy, filterBy]);


return (
    <>
    <main>
    <div className="webTobics-sec">
    <div className="container">
        <div className="search-container">
            <div className="search-input">
              <ion-icon name="search-outline"></ion-icon>
              <input type="text" placeholder="Search the website..."onChange={(event)=>{setSearch(event.target.value)}} />
            </div>
            <div className="search-bar-actions">
              <div className="drop-down-menu">
                <label htmlFor="sort">Sort by:</label>
                <select name="sort" id="sort"onChange={(event)=>{setSortBy(event.target.value)}}>
                  <option value="default" selected>Default</option>
                  <option value="TOPIC">Topic Title</option>
                  <option value="AUTHOR">Author Name</option>
                </select>
              </div>
              <div className="drop-down-menu">
                <label for="filter">Filter by:</label>
                <select name="filter" id="filter"onChange={(event)=>setFilterBy(event.target.value)}>
                     <option value="default" selected>
                        Default
                    </option>
                    {filterOptions?.map((option) => (
                      <option key={option} value={option}>
                           {option}
                     </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        <div className="webTopics-info">
            <h2>"24" Web Topics Found</h2>
        </div>
        <div className="cards-container" id="cards-container">
          {viewTopics?.map((topic)=>{
            return <Card key={topic.id} id={topic.id}
                         name={topic.name} image={topic.image} 
                         category={topic.category} topic={topic.topic}
                         rating={topic.rating}/>
       })}
            
        </div>
        
    </div>
    
</div>
</main>
    
    </>
  )
}
