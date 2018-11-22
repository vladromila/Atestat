import React from 'react';
import Spinner from 'react-spinkit';
import { data } from './data';

class PP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            res: { output: 'Nu a fost nimic compilat inca!' },
            problem: data[this.props.match.params.handle]||{},
            loading: false
        }
    }
    onButtonClick = () => {
        let data = {
            script: this.state.value,
            language: "cpp",
            versionIndex: "3",
            clientId: "3ab058b2c56e83895ea733b3e0449bf5",
            clientSecret: "9f0db5c8938a159a2a11dfb279ea32152c3a0ad715a2c201441a3b347f90fcb0",
            stdin: "5 5 2 1 2 5 1 3 2 4 5 1 4"
        }
        this.setState({ loading: true })
        fetch('https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data)
        }
        ).then(res => res.json())
            .then(res => this.setState({ res: res, loading: false }))
    }
    render() {
        return (
            <React.Fragment>
                {this.state.problem.title !== undefined ?
                    <article className="article" style={{ paddingTop: 20 }}>
                        <h1 className="article-title" style={{ textDecoration: true }}>{this.state.problem.title}</h1>
                        <p className="text-lead">
                            {this.state.problem.description}
                        </p>
                        <h3 className="article-title">Cerinta</h3>
                        <p className="text-lead">
                            {this.state.problem.cerinta}
                        </p>
                        <h3 className="article-title">Date de intrare</h3>
                        <p className="text-lead">
                            {this.state.problem.din}
                        </p>
                        <h3 className="article-title">Date de iesire</h3>
                        <p className="text-lead">
                            {this.state.problem.dout}
                        </p>
                        <h3 className="article-title">Rezolvare</h3>
                        <pre><code>
                            {`${this.state.problem.rezolvare}`}
                        </code></pre>
                        <h3 className="article-title">Compilare(nu functioneaza cu fisiere, doar citire de la tastatura)</h3>
                        <textarea style={{ width: '100%' }} rows={15}
                            value={this.state.value}
                            onChange={(event) => this.setState({ value: event.target.value })}
                            disabled={this.state.loading}
                        ></textarea>
                        <div className="col-12 col" style={{ textAlign: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <button disabled={this.state.loading} className="btn-block" onClick={this.onButtonClick}>Trimite</button>
                        </div>
                        <h3 className="article-title">Date de iesire</h3>
                        <div className="sm-3 col border border-primary">{this.state.loading === false ? this.state.res.output : <Spinner name="pacman" style={{ alignSelf: 'center' }} />}</div>
                    </article> : <article className="article" style={{ paddingTop: 20 }}>
                        <h1 className="article-title" style={{ textDecoration: true }}>Linkul accesat nu este valabil</h1> </article>}</React.Fragment>
        )
    }
}
export default PP;