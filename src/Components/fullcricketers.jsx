import React from 'react';
import PlayerAPI from '../playerAPI'
import { Link } from 'react-router-dom'

const FullCricketers = () => (
     <div className='container'>
          <h1>List of Cricketers!</h1>
          <ul>
               {
                    PlayerAPI.all().map(p => (
                         <li key={p.id}>
                              <Link to={`./cricketer/${p.id}`}>
                                   {p.name}
                              </Link>
                         </li>
                    ))
               }
          </ul>
     </div>
)

export default FullCricketers;