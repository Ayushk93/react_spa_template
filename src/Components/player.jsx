import React from 'react'
import PlayerAPI from '../playerAPI'
import { Link } from 'react-router-dom'

const Player = (props) => {
     const player = PlayerAPI.get(parseInt(props.match.params.id));
     if(!player) {
          return <div>Sorry, but player not found!</div>
     }
     return (
          <div id='playerDiv' className='container'>
               <h1>{player.name} (#{player.id})</h1>
               <h2>Position: {player.position}</h2>
               <Link className='btn btn-danger' to='/cricketer'>
                    Back
               </Link>
          </div>
     )
}

export default Player;