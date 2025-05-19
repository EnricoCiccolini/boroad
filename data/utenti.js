const utenti = [
    {
        id: 1,
        nome: "Marco",
        cognome: "Rossi",
        email: "marco.rossi@email.com",
        telefono: "+393401234567",
        codiceFiscale: "RSSMRC90A01H501Z",
        slugViaggio: ["roma-2025", "parigi-2025"]
    },
    {
        id: 2,
        nome: "Lucia",
        cognome: "Bianchi",
        email: "lucia.bianchi@email.com",
        telefono: "+393497654321",
        codiceFiscale: "BNCLCU85C41F205X",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 3,
        nome: "Giovanni",
        cognome: "Verdi",
        email: "giovanni.verdi@email.com",
        telefono: "+393481234890",
        codiceFiscale: "VRDGNN70D10L219Q",
        slugViaggio: ["tokyo-2025", "roma-2025"]
    },
    {
        id: 4,
        nome: "Sara",
        cognome: "Neri",
        email: "sara.neri@email.com",
        telefono: "+393491234111",
        codiceFiscale: "NRSRA95E41F205L",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 5,
        nome: "Alessandro",
        cognome: "Ferrari",
        email: "alessandro.ferrari@email.com",
        telefono: "+393409998877",
        codiceFiscale: "FRRLSS88C10H501Y",
        slugViaggio: ["barcellona-2025", "lisbona-2025"]
    },
    {
        id: 6,
        nome: "Chiara",
        cognome: "Moretti",
        email: "chiara.moretti@email.com",
        telefono: "+393401112233",
        codiceFiscale: "MRTCHR92A01H501T",
        slugViaggio: ["lisbona-2025"]
    },
    {
        id: 7,
        nome: "Davide",
        cognome: "Galli",
        email: "davide.galli@email.com",
        telefono: "+393488889999",
        codiceFiscale: "GLLDVD89D20F205X",
        slugViaggio: ["barcellona-2025", "tokyo-2025"]
    },
    {
        id: 8,
        nome: "Francesca",
        cognome: "Conti",
        email: "francesca.conti@email.com",
        telefono: "+393402223344",
        codiceFiscale: "CNTFNC91B15H501T",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 9,
        nome: "Luca",
        cognome: "Romano",
        email: "luca.romano@email.com",
        telefono: "+393477771111",
        codiceFiscale: "RMNLUC87C01L219Q",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 10,
        nome: "Elisa",
        cognome: "Fontana",
        email: "elisa.fontana@email.com",
        telefono: "+393409996655",
        codiceFiscale: "FNTLSA93E41F205Y",
        slugViaggio: ["tokyo-2025", "parigi-2025"]
    },
    {
        id: 11,
        nome: "Federico",
        cognome: "Russo",
        email: "federico.russo@email.com",
        telefono: "+393401234879",
        codiceFiscale: "RSSFRC85D22H501B",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 12,
        nome: "Anna",
        cognome: "Greco",
        email: "anna.greco@email.com",
        telefono: "+393491238888",
        codiceFiscale: "GRCANN94A10F205K",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 13,
        nome: "Nicola",
        cognome: "Martini",
        email: "nicola.martini@email.com",
        telefono: "+393471239000",
        codiceFiscale: "MRTNCL83D30F205W",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 14,
        nome: "Ilaria",
        cognome: "Testa",
        email: "ilaria.testa@email.com",
        telefono: "+393468888222",
        codiceFiscale: "TSTLRI90E50H501V",
        slugViaggio: ["roma-2025", "new-york-2025"]
    },
    {
        id: 15,
        nome: "Stefano",
        cognome: "De Luca",
        email: "stefano.deluca@email.com",
        telefono: "+393407777333",
        codiceFiscale: "DLCSTF84C01H501A",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 16,
        nome: "Giulia",
        cognome: "Barbieri",
        email: "giulia.barbieri@email.com",
        telefono: "+393401234100",
        codiceFiscale: "BRBGLI90C01H501Z",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 17,
        nome: "Paolo",
        cognome: "Silvestri",
        email: "paolo.silvestri@email.com",
        telefono: "+393491234200",
        codiceFiscale: "SLVPLA85A01F205X",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 18,
        nome: "Martina",
        cognome: "Ricci",
        email: "martina.ricci@email.com",
        telefono: "+393488888100",
        codiceFiscale: "RCCMTN91B20H501Y",
        slugViaggio: ["tokyo-2025", "barcellona-2025"]
    },
    {
        id: 19,
        nome: "Roberto",
        cognome: "Costa",
        email: "roberto.costa@email.com",
        telefono: "+393409999100",
        codiceFiscale: "CSTRBT86E15F205K",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 20,
        nome: "Serena",
        cognome: "De Angelis",
        email: "serena.deangelis@email.com",
        telefono: "+393477771010",
        codiceFiscale: "DNGSRN93A01H501P",
        slugViaggio: ["barcellona-2025", "roma-2025"]
    },
    {
        id: 21,
        nome: "Andrea",
        cognome: "Lombardi",
        email: "andrea.lombardi@email.com",
        telefono: "+393406666777",
        codiceFiscale: "LMBNDR85D10H501D",
        slugViaggio: ["lisbona-2025"]
    },
    {
        id: 22,
        nome: "Beatrice",
        cognome: "Marini",
        email: "beatrice.marini@email.com",
        telefono: "+393409955544",
        codiceFiscale: "MRNBRC91C01H501R",
        slugViaggio: ["tokyo-2025", "parigi-2025"]
    },
    {
        id: 23,
        nome: "Giorgio",
        cognome: "Fabbri",
        email: "giorgio.fabbri@email.com",
        telefono: "+393488887700",
        codiceFiscale: "FBBGRG87C10F205Z",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 24,
        nome: "Elena",
        cognome: "Santoro",
        email: "elena.santoro@email.com",
        telefono: "+393403332211",
        codiceFiscale: "SNTLNE92B10H501W",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 25,
        nome: "Daniele",
        cognome: "De Rosa",
        email: "daniele.derosa@email.com",
        telefono: "+393404445566",
        codiceFiscale: "DRSDNL89A01H501E",
        slugViaggio: ["barcellona-2025"]
    },
    {
        id: 26,
        nome: "Veronica",
        cognome: "Colombo",
        email: "veronica.colombo@email.com",
        telefono: "+393405556677",
        codiceFiscale: "CLMVRC90A01H501L",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 27,
        nome: "Massimo",
        cognome: "Gatti",
        email: "massimo.gatti@email.com",
        telefono: "+393406667788",
        codiceFiscale: "GTTMSS85C01F205F",
        slugViaggio: ["tokyo-2025"]
    },
    {
        id: 28,
        nome: "Simona",
        cognome: "Martini",
        email: "simona.martini@email.com",
        telefono: "+393407778899",
        codiceFiscale: "MRTSMN91A01H501Y",
        slugViaggio: ["lisbona-2025"]
    },
    {
        id: 29,
        nome: "Alberto",
        cognome: "Sanna",
        email: "alberto.sanna@email.com",
        telefono: "+393408889900",
        codiceFiscale: "SNNLBR88B10F205T",
        slugViaggio: ["barcellona-2025", "tokyo-2025"]
    },
    {
        id: 30,
        nome: "Irene",
        cognome: "Farina",
        email: "irene.farina@email.com",
        telefono: "+393409991122",
        codiceFiscale: "FRNRNE93C10H501U",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 31,
        nome: "Tommaso",
        cognome: "Serra",
        email: "tommaso.serra@email.com",
        telefono: "+393401234555",
        codiceFiscale: "SRRTMS87D01H501L",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 32,
        nome: "Valentina",
        cognome: "Riva",
        email: "valentina.riva@email.com",
        telefono: "+393401234556",
        codiceFiscale: "RVAVNT91A41F205X",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 33,
        nome: "Enrico",
        cognome: "Moro",
        email: "enrico.moro@email.com",
        telefono: "+393401234557",
        codiceFiscale: "MRONRC85B01H501S",
        slugViaggio: ["tokyo-2025", "lisbona-2025"]
    },
    {
        id: 34,
        nome: "Angela",
        cognome: "Ferri",
        email: "angela.ferri@email.com",
        telefono: "+393401234558",
        codiceFiscale: "FRRNGN90D20F205R",
        slugViaggio: ["barcellona-2025"]
    },
    {
        id: 35,
        nome: "Riccardo",
        cognome: "Grassi",
        email: "riccardo.grassi@email.com",
        telefono: "+393401234559",
        codiceFiscale: "GRSRCD88C11H501K",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 36,
        nome: "Alessia",
        cognome: "Villa",
        email: "alessia.villa@email.com",
        telefono: "+393401234560",
        codiceFiscale: "VLLLSS92A01F205U",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 37,
        nome: "Fabio",
        cognome: "Bernardi",
        email: "fabio.bernardi@email.com",
        telefono: "+393401234561",
        codiceFiscale: "BRNFBA84E10H501Z",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 38,
        nome: "Eleonora",
        cognome: "Rizzo",
        email: "eleonora.rizzo@email.com",
        telefono: "+393401234562",
        codiceFiscale: "RZZLNR89A01F205N",
        slugViaggio: ["barcellona-2025", "lisbona-2025"]
    },
    {
        id: 39,
        nome: "Matteo",
        cognome: "De Santis",
        email: "matteo.desantis@email.com",
        telefono: "+393401234563",
        codiceFiscale: "DSNMTT86C01H501P",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 40,
        nome: "Caterina",
        cognome: "Amato",
        email: "caterina.amato@email.com",
        telefono: "+393401234564",
        codiceFiscale: "MTACTN90B20H501V",
        slugViaggio: ["tokyo-2025"]
    },
    {
        id: 41,
        nome: "Edoardo",
        cognome: "Bassi",
        email: "edoardo.bassi@email.com",
        telefono: "+393401234565",
        codiceFiscale: "BSSDRD87D01F205J",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 42,
        nome: "Monica",
        cognome: "Leone",
        email: "monica.leone@email.com",
        telefono: "+393401234566",
        codiceFiscale: "LNEMNC91A10H501M",
        slugViaggio: ["roma-2025", "parigi-2025"]
    },
    {
        id: 43,
        nome: "Giuseppe",
        cognome: "Palmieri",
        email: "giuseppe.palmieri@email.com",
        telefono: "+393401234567",
        codiceFiscale: "PLMGPP88C11F205C",
        slugViaggio: ["lisbona-2025"]
    },
    {
        id: 44,
        nome: "Laura",
        cognome: "Fiore",
        email: "laura.fiore@email.com",
        telefono: "+393401234568",
        codiceFiscale: "FRULRA90D01H501Z",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 45,
        nome: "Gabriele",
        cognome: "Coppola",
        email: "gabriele.coppola@email.com",
        telefono: "+393401234569",
        codiceFiscale: "CPPGLL85A20F205N",
        slugViaggio: ["barcellona-2025"]
    },
    {
        id: 46,
        nome: "Marta",
        cognome: "Valenti",
        email: "marta.valenti@email.com",
        telefono: "+393401234570",
        codiceFiscale: "VLNMRT91E15H501Y",
        slugViaggio: ["tokyo-2025", "lisbona-2025"]
    },
    {
        id: 47,
        nome: "Leonardo",
        cognome: "Giuliani",
        email: "leonardo.giuliani@email.com",
        telefono: "+393401234571",
        codiceFiscale: "GLLLNR90A01F205Q",
        slugViaggio: ["roma-2025"]
    },
    {
        id: 48,
        nome: "Sofia",
        cognome: "De Simone",
        email: "sofia.desimone@email.com",
        telefono: "+393401234572",
        codiceFiscale: "DSMSFA93C01H501H",
        slugViaggio: ["parigi-2025"]
    },
    {
        id: 49,
        nome: "Lorenzo",
        cognome: "Benedetti",
        email: "lorenzo.benedetti@email.com",
        telefono: "+393401234573",
        codiceFiscale: "BNDLNZ84B20F205X",
        slugViaggio: ["new-york-2025"]
    },
    {
        id: 50,
        nome: "Camilla",
        cognome: "Grechi",
        email: "camilla.grechi@email.com",
        telefono: "+393401234574",
        codiceFiscale: "GRCCML92E10H501T",
        slugViaggio: ["lisbona-2025"]
    }
];

export default utenti;

