import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';
import img from './asd.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = () => {
    return (
        <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>

            <AnchorLink href='#things'><img width="5%" src={img} style={{
                scale: 0,
                position: 'absolute',
                top: '90%',
                left: '50%',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }} /></AnchorLink>
            <div id="landingdiv" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                <h1 style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }}>Teoria grafurilor</h1>
            </div>
            <div style={{height:80}} id="things"></div>
            <div className="col-12 col">
                <a href="http://liis.ro/~infosuport/12/grafuri.pdf"><button style={{ marginTop: 2 }} className="btn-block">PENTRU TEORIE!</button></a>
                {data.map((obj, i) => {
                    return <Link key={i} to={{ pathname: `pb/${i}`, state: obj }}><button style={{ marginTop: 2 }} className="btn-block">{obj.title}</button></Link>
                })}
            </div>
        </div>
    )
}
export default Landing