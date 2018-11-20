
export const data = [
    {
        title:'Afisare matrice de adiacenta dupa citirea a m muchii',
        cerinta:'Sa se afiseze matricea de adiacenta in urma citirii de la tastatura a unui numar n=numar de noduri si un numar m=numar de muchii si a m perechi de extremitati de muchii',
        din:'Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii',
        dout:'Sa se afiseze matricea de adiacenta',
        rezolvare:
        `#include <iostream>
        using namespace std;
        int a[120][120],n,m;
        void citire()
        {
            cin>>n>>m;
            int x,y;
            for(int i=1; i<=m; i++)
            {
                cin>>x>>y;
                a[x][y]=a[y][x]=1;//la graf orientat spunem ca doar a[x][y]=1;
            }
        }
        void afisare()
        {
            for(int i=1; i<=n; i++)
            {
                for(int j=1; j<=n; j++)
                    cout<<a[i][j]<<" ";
                cout<<endl;
            }
        }
        int main()
        {
            citire();
            afisare();
        }
        `
    },
    {
        title:'Afisare matrice de incidenta dupa citirea a m muchii',
        cerinta:'Sa se afiseze matricea de incidenta in urma citirii de la tastatura a unui numar n=numar de noduri si un numar m=numar de muchii si a m perechi de extremitati de muchii',
        din:'Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii',
        dout:'Sa se afiseze matricea de incidenta',
        rezolvare:
        `#include <iostream>
        using namespace std;
        int in[120][120],n,m;
        void citire()
        {
            cin>>n>>m;
            int x,y;
            for(int i=1; i<=m; i++)
            {
                cin>>x>>y;
                in[y][i]=in[x][i]=1;
            }
        }
        void afisare()
        {
            for(int i=1; i<=n; i++)
            {
                for(int j=1; j<=m; j++)
                    cout<<in[i][j]<<" ";
                cout<<endl;
            }
        }
        int main()
        {
            citire();
            afisare();
        }        
        `
    },
    {
        title:'Graf neorientat conex',
        description: 'Vlad Romila pe Facebook doreste sa afle daca un graf neorientat este conex.',
        cerinta:'Sa se verifice daca graful neorientat dat este conex.',
        din:'Se citeste de la tastatura un numar n=numar de noduri si un numar m=numar de muchii si m perechi de extremitati de muchii',
        dout:'Sa se verifice daca graful dat este conex',
        rezolvare:
        `#include <bits/stdc++.h>

        using namespace std;
        ifstream fin("grafconex.in");
        ofstream fout("grafconex.out");
        int a[21][21],viz[120],gr[120],n,m,marc;
        
        void citire()
        {
            cin>>n>>m;
            int x,y;
            for(int i=1; i<=m; i++)
            {
                cin>>x>>y;
                a[x][y]=a[y][x]=1;
                gr[x]++;
                gr[y]++;
            }
        
        }
        void df(int x)
        {
            viz[x]=marc;
            for(int i=1; i<=n; i++)
            {
                if(i!=x&&viz[i]==0&&a[i][x]==1)
                {
                    df(i);
                }
            }
        }
        
        int main()
        {
            citire();
            for(int i=1; i<=n; i++)
                if(viz[i]==0)
                {
                    marc++;
                    df(i);
                }
            if(marc==1)
                cout<<"Graful este conex";
            else
                cout<<"Graful nu este conex";
            return 0;
        }
        `
    },
    {
        title: 'Componente T.C/Graf T.C',
        description: 'Vlad Romila pe Facebook doreste sa afle daca un graf este tare conex sau daca nu care sunt componentele tare conexe',
        cerinta: 'Sa se creeze un program care sa afiseze componentele tare conexe si daca graful dat este sau nu este tare conex (nu prea are sens cerinta dar nu imi bat capul)',
        din: 'Se citeste din fisierul n,m si m arce ale unui graf',
        dout: 'Sa se afiseze componentele tare conexe ale grafului dat si sa se verifice daca graful este tare conex',
        rezolvare:
        `#include <bits/stdc++.h>
        using namespace std;
        ifstream fin("ctc.in");
        ofstream fout("ctc.out");
        
        int a[21][21],atr[21][21],n,m,intersectie[21][21],viz[21];
        void citire()
        {
            int x,y;
            fin>>n>>m;
            for(int i=1; i<=m; i++)
            {
                fin>>x>>y;
                a[x][y]=1;
                atr[y][x]=1;
            }
        }
        void roy(int a[21][21], int n)
        {
            for(int k=1; k<=n; k++)
                for(int i=1; i<=n; i++)
                    for(int j=1; j<=n; j++)
                        if(i!=k&&j!=k&&a[i][j]==0)
                            a[i][j]=a[i][k]*a[k][j];
        }
        int main()
        {
            citire();
            roy(a,n);
            roy(atr,n);
            for(int i=1; i<=n; i++)
                for(int j=1; j<=n; j++)
                    intersectie[i][j]=a[i][j]&&atr[i][j];
            int nr=0;
            for(int i=1; i<=n; i++)
            {
                if(viz[i]==0)
                {
                    viz[i]=1;
                    nr++;
                    fout<<"Componenta conexa "<<nr<<" este: "<<i<<" ";
                    for(int j=1; j<=n; j++)
                    {
                        if(i!=j&&intersectie[i][j]==1)
                        {
                            fout<<j<<" ";
                            viz[j]=1;
                        }
                    }
                    fout<<endl;
                }
            }
            fout<<"Asadar, numarul total de componente tare conexe este: "<<nr<<endl;
            if(nr==1)
                fout<<"Graful este tare conex";
            else
                fout<<"Deoarece graful are mai multe componente tare conexe, nu este tare conex";
            return 0;
        }
        `
    },
    {
        title: "Facebook_FMI",
        description: ` Ionuț tocmai a terminat liceul și susține examenul de admitere la facultate. Știind că s-a pregătit foarte bine pentru examen, el dorește să își anunțe reușita după examen printr-o postare pe Facebook.
    Ionuț cunoaște n utilizatori reprezentați de numerele de la 1 la n, între care există m relații de prietenie de forma i j, unde i și j sunt utilizatori, iar n și m sunt numere naturale nenule. Un utilizator nu poate fi prieten cu el însuși, iar o relație de prietenie între doi utilizatori ne spune că fiecare dintre ei este prieten cu celălalt.
Întrucât dorește ca postarea lui să fie cât mai răspândită, Ionuț vrea să afle care sunt utilizatorii cei mai bine conectați din mulțimea sa de cunoscuți, pentru ca eventual să le ceară prietenia. Pentru aceasta, Ionuț trebuie să găsească cea mai mare submulțime de utilizatori cunoscuți, în care fiecare utilizator din această submulțime are cel puțin k prieteni aflați la rândul lor în submulțime, unde k este un număr natural nenul.`,
        cerinta: ` Ajutați-l pe Ionuț să se determine și să se afișeze, printr-o soluție de complexitate timp cât mai bună, în funcție de datele de intrare, membrii celei mai mari submulțimi de utilizatori, cu proprietatea că fiecare utilizator din această submulțime are cel puțin k prieteni aflați la rândul lor în submulțime.`,
        din: `   Fișierul de intrare fb_fmi.in conține pe prima linie numerele n, m și k, separate prin spațiu, iar pe a doua linie 2•m numere naturale cuprinse între 1 și n, separate prin spațiu, reprezentând în ordine cele m relații de prietenie între cei n utilizatori.`,
        dout: `Fișierul de ieșire fb_fmi.out va conține pe prima linie numărul natural Q ce reprezintă numărul maxim de membrii ai submulțimii de utilizatori care au cel puțin k prieteni, aflați la rândul lor în submulțime.
    Pe următoarea linie, în ordine crescătoare, sunt enumerați utilizatori submulțimii. În cazul în care nu există o astfel de submulțime pentru k dat, în fișier se va scrie valoarea 0.`,
        rezolvare:
            `#include <fstream>
    using namespace std;
    ifstream fin("fb_fmi.in");
    ofstream fout("fb_fmi.out");
    int n,m,k,D[1005],nr;
    bool A[1005][1005],VIZ[1005];
    void citire()
    {
        fin>>n>>m>>k;
        int x,y,i;
        for(i=1;i<=m;i++)
        {
            fin>>x>>y;
            A[x][y]=A[y][x]=1;
            D[x]++;
            D[y]++;
        }
    }
    void df(int x)
    {
        VIZ[x]=1;
        nr++;
        for(int i=1;i<=n;i++)
            if(A[x][i])
        {
            D[i]--;
            if(D[i]<k&&VIZ[i]==0)
                df(i);
        }
    }
    int main()
    {
        citire();
        for(int i=1;i<=n;i++)
            if(D[i]<k&&VIZ[i]==0)
            df(i);
        fout<<n-nr<<endl;
        for(int i=1;i<=n;i++)
            if(VIZ[i]==0)
            fout<<i<<' ';
        return 0;
    }`
    }
]