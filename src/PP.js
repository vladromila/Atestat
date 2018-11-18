import React from 'react';
import Spinner from 'react-spinkit';

class PP extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            res: { output: 'Nu a fost nimic compilat inca!' },
            loading:false
        }
    }
    onButtonClick = () => {
        let data = {
            script: this.state.value,
            language: "cpp",
            versionIndex: "3",
            clientId: "3ab058b2c56e83895ea733b3e0449bf5",
            clientSecret: "9f0db5c8938a159a2a11dfb279ea32152c3a0ad715a2c201441a3b347f90fcb0",
            stdin:"5 5 2 1 2 5 1 3 2 4 5 1 4"
        }
        this.setState({loading:true})
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
            .then(res => this.setState({ res:res,loading:false }))
    }
    render() {console.log(this.state.res.output)
        return (
            <article class="article" style={{ paddingTop: 20 }}>
                <h1 class="article-title"><a href="">Facebook_FMI</a></h1>
                <p class="article-meta">Scrisa de <a href="#">Vlad Romila</a></p>
                <p class="text-lead">
                    Ionuț tocmai a terminat liceul și susține examenul de admitere la facultate. Știind că s-a pregătit foarte bine pentru examen, el dorește să își anunțe reușita după examen printr-o postare pe Facebook.
                    Ionuț cunoaște n utilizatori reprezentați de numerele de la 1 la n, între care există m relații de prietenie de forma i j, unde i și j sunt utilizatori, iar n și m sunt numere naturale nenule. Un utilizator nu poate fi prieten cu el însuși, iar o relație de prietenie între doi utilizatori ne spune că fiecare dintre ei este prieten cu celălalt.
Întrucât dorește ca postarea lui să fie cât mai răspândită, Ionuț vrea să afle care sunt utilizatorii cei mai bine conectați din mulțimea sa de cunoscuți, pentru ca eventual să le ceară prietenia. Pentru aceasta, Ionuț trebuie să găsească cea mai mare submulțime de utilizatori cunoscuți, în care fiecare utilizator din această submulțime are cel puțin k prieteni aflați la rândul lor în submulțime, unde k este un număr natural nenul.</p>
                <h3 class="article-title"><a href="">Cerinta</a></h3>
                <p class="text-lead">
                    Ajutați-l pe Ionuț să se determine și să se afișeze, printr-o soluție de complexitate timp cât mai bună, în funcție de datele de intrare, membrii celei mai mari submulțimi de utilizatori, cu proprietatea că fiecare utilizator din această submulțime are cel puțin k prieteni aflați la rândul lor în submulțime.
                </p>
                <h3 class="article-title"><a href="">Date de intrare</a></h3>
                <p class="text-lead">
                    Fișierul de intrare fb_fmi.in conține pe prima linie numerele n, m și k, separate prin spațiu, iar pe a doua linie 2•m numere naturale cuprinse între 1 și n, separate prin spațiu, reprezentând în ordine cele m relații de prietenie între cei n utilizatori.
                </p>
                <h3 class="article-title"><a href="">Date de iesire</a></h3>
                <p class="text-lead">
                    Fișierul de ieșire fb_fmi.out va conține pe prima linie numărul natural Q ce reprezintă numărul maxim de membrii ai submulțimii de utilizatori care au cel puțin k prieteni, aflați la rândul lor în submulțime.
    Pe următoarea linie, în ordine crescătoare, sunt enumerați utilizatori submulțimii. În cazul în care nu există o astfel de submulțime pentru k dat, în fișier se va scrie valoarea 0.
                </p>
                <textarea style={{ width: '100%' }} rows={15}
                value={this.state.value}
                onChange={(event) => this.setState({ value: event.target.value })}
                disabled={this.state.loading}
                ></textarea>
                <div class="col-12 col" style={{textAlign:'center',alignContent:'center',justifyContent:'center'}}>
                    <button disabled={this.state.loading} class="btn-block" onClick={this.onButtonClick}>Trimite</button>
                </div>
                <h3 class="article-title"><a href="">Date de iesire</a></h3>
                <div class="sm-3 col border border-primary">{this.state.loading===false?this.state.res.output:<Spinner name="pacman" style={{alignSelf:'center'}} />}</div>
            </article>
        )
    }
}
export default PP;