import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data.js'
class List extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="col-12 col" style={{ marginTop: 80 }}>
                <a href="http://liis.ro/~infosuport/12/grafuri.pdf"><button style={{ marginTop: 2 }} className="btn-block">PENTRU TEORIE!</button></a>
                {data.map((obj, i) => {
                    return <Link key={i} to={{ pathname: `Atestat/pb/${i}`, state: obj }}><button style={{ marginTop: 2 }} className="btn-block">{obj.title}</button></Link>
                })}
            </div>

        )
    }
}
export default List;