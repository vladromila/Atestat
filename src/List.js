import React from 'react';
import {Link} from 'react-router-dom';
import {data} from './data.js'
class List extends React.Component
{
    constructor()
    {
        super();
        this.state={
        }
    }
    render()
    {
        return(
            <div class="col-12 col" style={{marginTop:80}}>
            {data.map((obj,i)=>{
                return<Link key={i} to={{ pathname: '/pb', state: obj }}><button style={{marginTop:2}}  class="btn-block">{obj.title}</button></Link>
            })}
            </div>
            
        )
    }
}
export default List;