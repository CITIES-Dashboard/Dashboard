import React from 'react';
import Detail from '../../Components/Detail/Detail'
import Vis from '../../Components/Vis/Vis';
import "./Project.css"

export default function Project({LinkChange,setLinkChange}) {
  return (
    <div className='project1'>
      <div className = 'visual'>
          <div className = "title"><h3>PROJECT NAME</h3> </div>
          <Vis
              title1 = "Graph 1"
              detail1= "abcd"

              title2 = "Graph 2"
              detail2="efgh"

              title3 = "Graph 3"
              detail3="ijklmn"
          />
      </div>
    
      <div className='project-detail'>
        <Detail
            body="There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.

            Devon couldn't figure out the color of her eyes. He initially would have guessed that they were green, but the more he looked at them he almost wanted to say they were a golden yellow. Then there were the flashes of red and orange that seemed to be streaked throughout them. It was almost as if her eyes were made of opal with the sun constantly glinting off of them and bringing out more color. They were definitely the most unusual pair of eyes he'd ever seen.
            
            It was a good idea. At least, they all thought it was a good idea at the time. Hindsight would reveal that in reality, it was an unbelievably terrible idea, but it would take another week for them to understand that. Right now, at this very moment. they all agreed that it was the perfect course of action for the current situation."
        />
      </div>
        
    </div>
  )
}

