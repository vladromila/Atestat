(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,i){e.exports=i(58)},21:function(e,n,i){},58:function(e,n,i){"use strict";i.r(n);var a=i(0),t=i.n(a),r=i(12),c=i.n(r),o=(i(21),i(5)),l=i(6),u=i(8),s=i(7),m=i(9),d=i(62),f=i(60),p=i(61),x=i(13),h=i.n(x),v=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this))).onButtonClick=function(){var n={script:e.state.value,language:"cpp",versionIndex:"3",clientId:"3ab058b2c56e83895ea733b3e0449bf5",clientSecret:"9f0db5c8938a159a2a11dfb279ea32152c3a0ad715a2c201441a3b347f90fcb0",stdin:"5 5 2 1 2 5 1 3 2 4 5 1 4"};e.setState({loading:!0}),fetch("https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json",Origin:"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(n){return e.setState({res:n,loading:!1})})},e.state={value:"",res:{output:"Nu a fost nimic compilat inca!"},loading:!1},e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement("article",{className:"article",style:{paddingTop:20}},t.a.createElement("h1",{className:"article-title"},t.a.createElement("a",{href:""},this.props.location.state.title)),t.a.createElement("p",{className:"article-meta"},"Scrisa de ",t.a.createElement("a",{href:"https://www.facebook.com/vladromila"},"Vlad Romila")),t.a.createElement("p",{className:"text-lead"},this.props.location.state.description),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Cerinta")),t.a.createElement("p",{className:"text-lead"},this.props.location.state.cerinta),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Date de intrare")),t.a.createElement("p",{className:"text-lead"},this.props.location.state.din),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Date de iesire")),t.a.createElement("p",{className:"text-lead"},this.props.location.state.dout),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Rezolvare")),t.a.createElement("pre",null,t.a.createElement("code",null,"".concat(this.props.location.state.rezolvare))),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Compilare(nu functioneaza cu fisiere, doar citire de la tastatura)")),t.a.createElement("textarea",{style:{width:"100%"},rows:15,value:this.state.value,onChange:function(n){return e.setState({value:n.target.value})},disabled:this.state.loading}),t.a.createElement("div",{className:"col-12 col",style:{textAlign:"center",alignContent:"center",justifyContent:"center"}},t.a.createElement("button",{disabled:this.state.loading,className:"btn-block",onClick:this.onButtonClick},"Trimite")),t.a.createElement("h3",{className:"article-title"},t.a.createElement("a",{href:""},"Date de iesire")),t.a.createElement("div",{className:"sm-3 col border border-primary"},!1===this.state.loading?this.state.res.output:t.a.createElement(h.a,{name:"pacman",style:{alignSelf:"center"}})))}}]),n}(t.a.Component),b=function(){return t.a.createElement("div",{id:"landingdiv",style:{width:"100%",height:"100%",textAlign:"center"}},t.a.createElement("h1",{style:{position:"absolute",top:"30%",left:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)"}},"Teoria grafurilor"))},j=[{title:"Afisare matrice de adiacenta dupa citirea a m muchii",cerinta:"Sa se afiseze matricea de adiacenta in urma citirii de la tastatura a unui numar n=numar de noduri si un numar m=numar de muchii si a m perechi de extremitati de muchii",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se afiseze matricea de adiacenta",rezolvare:'#include <iostream>\n        using namespace std;\n        int a[120][120],n,m;\n        void citire()\n        {\n            cin>>n>>m;\n            int x,y;\n            for(int i=1; i<=m; i++)\n            {\n                cin>>x>>y;\n                a[x][y]=a[y][x]=1;//la graf orientat spunem ca doar a[x][y]=1;\n            }\n        }\n        void afisare()\n        {\n            for(int i=1; i<=n; i++)\n            {\n                for(int j=1; j<=n; j++)\n                    cout<<a[i][j]<<" ";\n                cout<<endl;\n            }\n        }\n        int main()\n        {\n            citire();\n            afisare();\n        }\n        '},{title:"Afisare matrice de incidenta dupa citirea a m muchii",cerinta:"Sa se afiseze matricea de incidenta in urma citirii de la tastatura a unui numar n=numar de noduri si un numar m=numar de muchii si a m perechi de extremitati de muchii",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se afiseze matricea de incidenta",rezolvare:'#include <iostream>\n        using namespace std;\n        int in[120][120],n,m;\n        void citire()\n        {\n            cin>>n>>m;\n            int x,y;\n            for(int i=1; i<=m; i++)\n            {\n                cin>>x>>y;\n                in[y][i]=in[x][i]=1;\n            }\n        }\n        void afisare()\n        {\n            for(int i=1; i<=n; i++)\n            {\n                for(int j=1; j<=m; j++)\n                    cout<<in[i][j]<<" ";\n                cout<<endl;\n            }\n        }\n        int main()\n        {\n            citire();\n            afisare();\n        }        \n        '},{title:"Afisarea lanturilor unui graf neorientat",cerinta:"Sa se afiseze lanturile unui graf neorientat",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se afiseze lanturile grafului neorientat dat",rezolvare:'#include <bits/stdc++.h>\n\n        using namespace std;\n        ifstream fin("date.in");\n        ofstream fout("date.out");\n        int a[120][120],n,m,viz[120];\n        void citire()\n        {\n            fin>>n>>m;\n            int x,y;\n            for(int i=1; i<=m; i++)\n            {\n                fin>>x>>y;\n                a[x][y]=a[y][x]=1;\n            }\n        }\n        void rw(int a[120][120])\n        {\n            for(int i=1; i<=n; i++)\n                for(int j=1; j<=n; j++)\n                    for(int k=1; k<=n; k++)\n                        if(i!=k&&j!=k&&j!=i&&a[i][j]==0)\n                        {\n                            a[i][j]=a[i][k]*a[k][j];\n                        }\n        }\n        int main()\n        {\n            citire();\n            rw(a);\n            for(int i=1;i<=n;i++)\n            {\n                if(viz[i]==0)\n                { viz[i]=1;\n                    fout<<i<<" ";\n                    for(int j=1;j<=n;j++)\n                    {\n                        if(a[i][j]==1)\n                        {\n                            fout<<j<<" ";\n                            viz[j]=1;\n                        }\n                    }\n                    fout<<endl;\n                }\n            }\n        }        \n        '},{title:"Graf neorientat conex",description:"Vlad Romila pe Facebook doreste sa afle daca un graf neorientat este conex.",cerinta:"Sa se verifice daca graful neorientat dat este conex.",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se verifice daca graful dat este conex",rezolvare:'#include <bits/stdc++.h>\n\n        using namespace std;\n        ifstream fin("grafconex.in");\n        ofstream fout("grafconex.out");\n        int a[21][21],viz[120],gr[120],n,m,marc;\n        \n        void citire()\n        {\n            cin>>n>>m;\n            int x,y;\n            for(int i=1; i<=m; i++)\n            {\n                cin>>x>>y;\n                a[x][y]=a[y][x]=1;\n                gr[x]++;\n                gr[y]++;\n            }\n        \n        }\n        void df(int x)\n        {\n            viz[x]=marc;\n            for(int i=1; i<=n; i++)\n            {\n                if(i!=x&&viz[i]==0&&a[i][x]==1)\n                {\n                    df(i);\n                }\n            }\n        }\n        \n        int main()\n        {\n            citire();\n            for(int i=1; i<=n; i++)\n                if(viz[i]==0)\n                {\n                    marc++;\n                    df(i);\n                }\n            if(marc==1)\n                cout<<"Graful este conex";\n            else\n                cout<<"Graful nu este conex";\n            return 0;\n        }\n        '},{title:"Graf neorientat conex cu BF",description:"Vlad Romila pe Facebook doreste sa afle daca un graf neorientat este conex.",cerinta:"Sa se verifice daca graful neorientat dat este conex.",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se verifice daca graful dat este conex",rezolvare:'#include<fstream>\n        using namespace std;\n        ifstream fin("date.in");\n        ofstream fout("date.out");\n        int a[101][101],viz[101],c[101],x,y,n,ok=1;\n        \n        void Bf(int x)\n        {\n            int p=1;\n            int u=1;\n            int z;\n            c[1]=x;\n            viz[x]=1;\n            while(p<=u)\n            {\n                z=c[p];\n                p++;\n        \n                for(int i=1; i<=n; i++)\n                    if(a[z][i]==1&& viz[i]==0)\n                    {\n                        u++;\n                        c[u]=i;\n                        viz[i]=1;\n                    }\n            }\n        \n        }\n        int main()\n        {\n            fin>>n;\n            while(fin>>x>>y)\n                a[x][y]=a[y][x]=1;\n            Bf(1);\n            for(int i=1;i<=n;i++)\n        if(viz[i]==0)\n        ok=0;\n        \n        if (ok)\n            fout<<"conex";\n        if(ok==0) fout<<" nu e conex";\n        }        \n        '},{title:"Graf neorientat eulerian",description:"Vlad Romila pe Facebook doreste sa afle daca un graf neorientat este eulerian.",cerinta:"Sa se verifice daca graful neorientat dat este eulerian.",din:"Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii",dout:"Sa se verifice daca graful dat este eulerian.",rezolvare:'#include <bits/stdc++.h>\n\n        using namespace std;\n        ifstream fin("grafconex.in");\n        ofstream fout("grafconex.out");\n        int a[21][21],viz[120],gr[120],n,m,marc;\n        \n        void citire()\n        {\n            cin>>n>>m;\n            int x,y;\n            for(int i=1; i<=m; i++)\n            {\n                cin>>x>>y;\n                a[x][y]=a[y][x]=1;\n                gr[x]++;\n                gr[y]++;\n            }\n        \n        }\n        void df(int x)\n        {\n            viz[x]=marc;\n            for(int i=1; i<=n; i++)\n            {\n                if(i!=x&&viz[i]==0&&a[i][x]==1)\n                {\n                    df(i);\n                }\n            }\n        }\n        \n        int main()\n        {\n            citire();\n            for(int i=1; i<=n; i++)\n                if(viz[i]==0)\n                {\n                    marc++;\n                    df(i);\n                }\n        \n            if(marc==1)\n            {\n                int ok=1;\n                for(int i=1; i<=n; i++)\n                {\n                    if(gr[i]%2==1)\n                    {\n                        ok=0;\n                        break;\n                    }\n                }\n                if(ok==1)\n                {\n                    cout<<"Graful este eulerian!";\n                }\n                else\n                    cout<<"Chiar daca graful este conex, nu este eulerian deoarece are noduri care au graduri impare!";\n            }\n            else\n                cout<<"Graful nu este conex asadar nu este nici eulerian!";\n            return 0;\n        }        \n        '},{title:"ROY FLOYD",description:"Vlad Romila pe Facebook doreste sa afle costul minim de la orice nod la altul",cerinta:"Sa se creeze un program care sa afiseze matricea de costuri",din:"Se citeste din fisierul n,m si m arce ale unui graf cu costurile lor",dout:"Sa se afiseze matricea de costuri a grafului dat",rezolvare:'#include <bits/stdc++.h>\n        using namespace std;\n        ifstream fin("rf.in");\n        ofstream fout("rf.out");\n        int a[101][101],d[101][101],n,m;\n        void citire();\n        int main()\n        {\n            fin>>n>>m;\n            for(int i=1; i<=n; i++)\n                for(int j=1; j<=n; j++)\n                    d[i][j] = 999999;\n            citire();\n            for(int k=1; k<=n; k++)\n                for(int i=1; i<=n; i++)\n                    for(int j=1; j<=n; j++)\n                        if(d[i][j]>d[i][k]+d[k][j] && (d[i][k]+d[k][j]!=0))\n                            d[i][j] = d[i][k]+d[k][j];\n            for(int i=1; i<=n; i++)\n            {\n                for(int j=1; j<=n; j++)\n                    if(i==j)\n                        fout<<0<<" ";\n                    else if(d[i][j] == 999999)\n                        fout<<-1<<" ";\n                    else\n                        fout<<d[i][j]<<" ";\n                fout<<endl;\n            }\n            return 0;\n        }\n        \n        void citire()\n        {\n            int x,y,c;\n            for(int i=1; i<=m; i++)\n            {\n                fin>>x>>y>>c;\n                a[x][y] = d[x][y] = c;\n            }\n        }        \n        '},{title:"Componente T.C/Graf T.C",description:"Vlad Romila pe Facebook doreste sa afle daca un graf este tare conex sau daca nu care sunt componentele tare conexe",cerinta:"Sa se creeze un program care sa afiseze componentele tare conexe si daca graful dat este sau nu este tare conex (nu prea are sens cerinta dar nu imi bat capul)",din:"Se citeste din fisierul n,m si m arce ale unui graf",dout:"Sa se afiseze componentele tare conexe ale grafului dat si sa se verifice daca graful este tare conex",rezolvare:'#include <bits/stdc++.h>\n        using namespace std;\n        ifstream fin("ctc.in");\n        ofstream fout("ctc.out");\n        \n        int a[21][21],atr[21][21],n,m,intersectie[21][21],viz[21];\n        void citire()\n        {\n            int x,y;\n            fin>>n>>m;\n            for(int i=1; i<=m; i++)\n            {\n                fin>>x>>y;\n                a[x][y]=1;\n                atr[y][x]=1;\n            }\n        }\n        void roy(int a[21][21], int n)\n        {\n            for(int k=1; k<=n; k++)\n                for(int i=1; i<=n; i++)\n                    for(int j=1; j<=n; j++)\n                        if(i!=k&&j!=k&&a[i][j]==0)\n                            a[i][j]=a[i][k]*a[k][j];\n        }\n        int main()\n        {\n            citire();\n            roy(a,n);\n            roy(atr,n);\n            for(int i=1; i<=n; i++)\n                for(int j=1; j<=n; j++)\n                    intersectie[i][j]=a[i][j]&&atr[i][j];\n            int nr=0;\n            for(int i=1; i<=n; i++)\n            {\n                if(viz[i]==0)\n                {\n                    viz[i]=1;\n                    nr++;\n                    fout<<"Componenta conexa "<<nr<<" este: "<<i<<" ";\n                    for(int j=1; j<=n; j++)\n                    {\n                        if(i!=j&&intersectie[i][j]==1)\n                        {\n                            fout<<j<<" ";\n                            viz[j]=1;\n                        }\n                    }\n                    fout<<endl;\n                }\n            }\n            fout<<"Asadar, numarul total de componente tare conexe este: "<<nr<<endl;\n            if(nr==1)\n                fout<<"Graful este tare conex";\n            else\n                fout<<"Deoarece graful are mai multe componente tare conexe, nu este tare conex";\n            return 0;\n        }\n        '},{title:"Facebook_FMI",description:" Ionu\u021b tocmai a terminat liceul \u0219i sus\u021bine examenul de admitere la facultate. \u0218tiind c\u0103 s-a preg\u0103tit foarte bine pentru examen, el dore\u0219te s\u0103 \xee\u0219i anun\u021be reu\u0219ita dup\u0103 examen printr-o postare pe Facebook.\n    Ionu\u021b cunoa\u0219te n utilizatori reprezenta\u021bi de numerele de la 1 la n, \xeentre care exist\u0103 m rela\u021bii de prietenie de forma i j, unde i \u0219i j sunt utilizatori, iar n \u0219i m sunt numere naturale nenule. Un utilizator nu poate fi prieten cu el \xeensu\u0219i, iar o rela\u021bie de prietenie \xeentre doi utilizatori ne spune c\u0103 fiecare dintre ei este prieten cu cel\u0103lalt.\n\xcentruc\xe2t dore\u0219te ca postarea lui s\u0103 fie c\xe2t mai r\u0103sp\xe2ndit\u0103, Ionu\u021b vrea s\u0103 afle care sunt utilizatorii cei mai bine conecta\u021bi din mul\u021bimea sa de cunoscu\u021bi, pentru ca eventual s\u0103 le cear\u0103 prietenia. Pentru aceasta, Ionu\u021b trebuie s\u0103 g\u0103seasc\u0103 cea mai mare submul\u021bime de utilizatori cunoscu\u021bi, \xeen care fiecare utilizator din aceast\u0103 submul\u021bime are cel pu\u021bin k prieteni afla\u021bi la r\xe2ndul lor \xeen submul\u021bime, unde k este un num\u0103r natural nenul.",cerinta:" Ajuta\u021bi-l pe Ionu\u021b s\u0103 se determine \u0219i s\u0103 se afi\u0219eze, printr-o solu\u021bie de complexitate timp c\xe2t mai bun\u0103, \xeen func\u021bie de datele de intrare, membrii celei mai mari submul\u021bimi de utilizatori, cu proprietatea c\u0103 fiecare utilizator din aceast\u0103 submul\u021bime are cel pu\u021bin k prieteni afla\u021bi la r\xe2ndul lor \xeen submul\u021bime.",din:"   Fi\u0219ierul de intrare fb_fmi.in con\u021bine pe prima linie numerele n, m \u0219i k, separate prin spa\u021biu, iar pe a doua linie 2\u2022m numere naturale cuprinse \xeentre 1 \u0219i n, separate prin spa\u021biu, reprezent\xe2nd \xeen ordine cele m rela\u021bii de prietenie \xeentre cei n utilizatori.",dout:"Fi\u0219ierul de ie\u0219ire fb_fmi.out va con\u021bine pe prima linie num\u0103rul natural Q ce reprezint\u0103 num\u0103rul maxim de membrii ai submul\u021bimii de utilizatori care au cel pu\u021bin k prieteni, afla\u021bi la r\xe2ndul lor \xeen submul\u021bime.\n    Pe urm\u0103toarea linie, \xeen ordine cresc\u0103toare, sunt enumera\u021bi utilizatori submul\u021bimii. \xcen cazul \xeen care nu exist\u0103 o astfel de submul\u021bime pentru k dat, \xeen fi\u0219ier se va scrie valoarea 0.",rezolvare:'#include <fstream>\n    using namespace std;\n    ifstream fin("fb_fmi.in");\n    ofstream fout("fb_fmi.out");\n    int n,m,k,D[1005],nr;\n    bool A[1005][1005],VIZ[1005];\n    void citire()\n    {\n        fin>>n>>m>>k;\n        int x,y,i;\n        for(i=1;i<=m;i++)\n        {\n            fin>>x>>y;\n            A[x][y]=A[y][x]=1;\n            D[x]++;\n            D[y]++;\n        }\n    }\n    void df(int x)\n    {\n        VIZ[x]=1;\n        nr++;\n        for(int i=1;i<=n;i++)\n            if(A[x][i])\n        {\n            D[i]--;\n            if(D[i]<k&&VIZ[i]==0)\n                df(i);\n        }\n    }\n    int main()\n    {\n        citire();\n        for(int i=1;i<=n;i++)\n            if(D[i]<k&&VIZ[i]==0)\n            df(i);\n        fout<<n-nr<<endl;\n        for(int i=1;i<=n;i++)\n            if(VIZ[i]==0)\n            fout<<i<<\' \';\n        return 0;\n    }'}],g=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this))).state={},e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{class:"col-12 col",style:{marginTop:80}},t.a.createElement("a",{href:"http://liis.ro/~infosuport/12/grafuri.pdf"},t.a.createElement("button",{style:{marginTop:2},class:"btn-block"},"PENTRU TEORIE!")),j.map(function(e,n){return t.a.createElement(f.a,{key:n,to:{pathname:"/pb",state:e}},t.a.createElement("button",{style:{marginTop:2},class:"btn-block"},e.title))}))}}]),n}(t.a.Component),y=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return console.log(j),t.a.createElement(d.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("nav",{className:"border fixed split-nav"},t.a.createElement("div",{className:"nav-brand"},t.a.createElement("h3",null,t.a.createElement(f.a,{to:"/"},"Teoria Grafurilor"))),t.a.createElement("div",{className:"collapsible"},t.a.createElement("input",{id:"collapsible1",type:"checkbox",name:"collapsible1"}),t.a.createElement("button",null,t.a.createElement("label",{htmlFor:"collapsible1"},t.a.createElement("div",{className:"bar1"}),t.a.createElement("div",{className:"bar2"}),t.a.createElement("div",{className:"bar3"}))),t.a.createElement("div",{className:"collapsible-body"},t.a.createElement("ul",{className:"inline"},t.a.createElement("li",null,t.a.createElement(f.a,{to:"/pbs"},"Probleme")))))),t.a.createElement(p.a,{path:"atestat/",exact:!0,component:b}),t.a.createElement(p.a,{path:"atestat/pbs",exact:!0,component:g}),t.a.createElement(p.a,{path:"atestat/pb",exact:!0,component:v})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.2e5907c3.chunk.js.map