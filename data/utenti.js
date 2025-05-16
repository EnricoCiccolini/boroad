const utenti = [
    {
        id: 1,
        nome: "Marco",
        cognome: "Rossi",
        email: "marco.rossi@email.com",
        telefono: "+393401234567",
        codiceFiscale: "RSSMRC90A01H501Z",
        slugViaggio: "roma-2025"
    },
    {
        id: 2,
        nome: "Lucia",
        cognome: "Bianchi",
        email: "lucia.bianchi@email.com",
        telefono: "+393497654321",
        codiceFiscale: "BNCLCU85C41F205X",
        slugViaggio: "parigi-2025"
    },
    {
        id: 3,
        nome: "Giovanni",
        cognome: "Verdi",
        email: "giovanni.verdi@email.com",
        telefono: "+393481234890",
        codiceFiscale: "VRDGNN70D10L219Q",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 4,
        nome: "Sara",
        cognome: "Neri",
        email: "sara.neri@email.com",
        telefono: "+393491234111",
        codiceFiscale: "NRSRA95E41F205L",
        slugViaggio: "new-york-2025"
    },
    {
        id: 5,
        nome: "Alessandro",
        cognome: "Ferrari",
        email: "alessandro.ferrari@email.com",
        telefono: "+393409998877",
        codiceFiscale: "FRRLSS88C10H501Y",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 6,
        nome: "Chiara",
        cognome: "Moretti",
        email: "chiara.moretti@email.com",
        telefono: "+393401112233",
        codiceFiscale: "MRTCHR92A01H501T",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 7,
        nome: "Davide",
        cognome: "Galli",
        email: "davide.galli@email.com",
        telefono: "+393488889999",
        codiceFiscale: "GLLDVD89D20F205X",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 8,
        nome: "Francesca",
        cognome: "Conti",
        email: "francesca.conti@email.com",
        telefono: "+393402223344",
        codiceFiscale: "CNTFNC91B15H501T",
        slugViaggio: "new-york-2025"
    },
    {
        id: 9,
        nome: "Luca",
        cognome: "Romano",
        email: "luca.romano@email.com",
        telefono: "+393477771111",
        codiceFiscale: "RMNLUC87C01L219Q",
        slugViaggio: "new-york-2025"
    },
    {
        id: 10,
        nome: "Elisa",
        cognome: "Fontana",
        email: "elisa.fontana@email.com",
        telefono: "+393409996655",
        codiceFiscale: "FNTLSA93E41F205Y",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 11,
        nome: "Federico",
        cognome: "Russo",
        email: "federico.russo@email.com",
        telefono: "+393401234879",
        codiceFiscale: "RSSFRC85D22H501B",
        slugViaggio: "roma-2025"
    },
    {
        id: 12,
        nome: "Anna",
        cognome: "Greco",
        email: "anna.greco@email.com",
        telefono: "+393491238888",
        codiceFiscale: "GRCANN94A10F205K",
        slugViaggio: "roma-2025"
    },
    {
        id: 13,
        nome: "Nicola",
        cognome: "Martini",
        email: "nicola.martini@email.com",
        telefono: "+393471239000",
        codiceFiscale: "MRTNCL83D30F205W",
        slugViaggio: "parigi-2025"
    },
    {
        id: 14,
        nome: "Ilaria",
        cognome: "Testa",
        email: "ilaria.testa@email.com",
        telefono: "+393468888222",
        codiceFiscale: "TSTLRI90E50H501V",
        slugViaggio: "roma-2025"
    },
    {
        id: 15,
        nome: "Stefano",
        cognome: "De Luca",
        email: "stefano.deluca@email.com",
        telefono: "+393407777333",
        codiceFiscale: "DLCSTF84C01H501A",
        slugViaggio: "new-york-2025"
    },
    {
        id: 16,
        nome: "Giulia",
        cognome: "Barbieri",
        email: "giulia.barbieri@email.com",
        telefono: "+393401234100",
        codiceFiscale: "BRBGLI90C01H501Z",
        slugViaggio: "roma-2025"
    },
    {
        id: 17,
        nome: "Paolo",
        cognome: "Silvestri",
        email: "paolo.silvestri@email.com",
        telefono: "+393491234200",
        codiceFiscale: "SLVPLA85A01F205X",
        slugViaggio: "parigi-2025"
    },
    {
        id: 18,
        nome: "Martina",
        cognome: "Ricci",
        email: "martina.ricci@email.com",
        telefono: "+393488888100",
        codiceFiscale: "RCCMTN91B20H501Y",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 19,
        nome: "Roberto",
        cognome: "Costa",
        email: "roberto.costa@email.com",
        telefono: "+393409999100",
        codiceFiscale: "CSTRBT86E15F205K",
        slugViaggio: "new-york-2025"
    },
    {
        id: 20,
        nome: "Serena",
        cognome: "De Angelis",
        email: "serena.deangelis@email.com",
        telefono: "+393477771010",
        codiceFiscale: "DNGSRN93A01H501P",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 21,
        nome: "Matteo",
        cognome: "Pellegrini",
        email: "matteo.pellegrini@email.com",
        telefono: "+393402224455",
        codiceFiscale: "PLLMTO84D01F205J",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 22,
        nome: "Valentina",
        cognome: "Riva",
        email: "valentina.riva@email.com",
        telefono: "+393401118899",
        codiceFiscale: "RVAVLT95C41H501U",
        slugViaggio: "new-york-2025"
    },
    {
        id: 23,
        nome: "Alberto",
        cognome: "Colombo",
        email: "alberto.colombo@email.com",
        telefono: "+393489990011",
        codiceFiscale: "CLMBRT83D20F205W",
        slugViaggio: "parigi-2025"
    },
    {
        id: 24,
        nome: "Elena",
        cognome: "Guerra",
        email: "elena.guerra@email.com",
        telefono: "+393409998900",
        codiceFiscale: "GRRLNE91A10H501T",
        slugViaggio: "roma-2025"
    },
    {
        id: 25,
        nome: "Simone",
        cognome: "Leoni",
        email: "simone.leoni@email.com",
        telefono: "+393471239001",
        codiceFiscale: "LNESMN85B15F205L",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 26,
        nome: "Alessia",
        cognome: "Fabbri",
        email: "alessia.fabbri@email.com",
        telefono: "+393468888444",
        codiceFiscale: "FBBLSS90C10H501M",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 27,
        nome: "Franco",
        cognome: "Serra",
        email: "franco.serra@email.com",
        telefono: "+393407777999",
        codiceFiscale: "SRRFNC87D01F205H",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 28,
        nome: "Silvia",
        cognome: "Morelli",
        email: "silvia.morelli@email.com",
        telefono: "+393407775555",
        codiceFiscale: "MRLSLV93E41F205G",
        slugViaggio: "roma-2025"
    },
    {
        id: 29,
        nome: "Carlo",
        cognome: "Esposito",
        email: "carlo.esposito@email.com",
        telefono: "+393408888111",
        codiceFiscale: "SPSCRL86D20H501R",
        slugViaggio: "new-york-2025"
    },
    {
        id: 30,
        nome: "Laura",
        cognome: "Rinaldi",
        email: "laura.rinaldi@email.com",
        telefono: "+393409990022",
        codiceFiscale: "RNLLRA90A10H501N",
        slugViaggio: "parigi-2025"
    },
    {
        id: 31,
        nome: "Fabio",
        cognome: "Orlando",
        email: "fabio.orlando@email.com",
        telefono: "+393409991111",
        codiceFiscale: "RLNFBO88C01F205Z",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 32,
        nome: "Angela",
        cognome: "Gatti",
        email: "angela.gatti@email.com",
        telefono: "+393409991112",
        codiceFiscale: "GTTNGL91A01H501T",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 33,
        nome: "Cristiano",
        cognome: "Longo",
        email: "cristiano.longo@email.com",
        telefono: "+393409991113",
        codiceFiscale: "LNGCST87C01F205B",
        slugViaggio: "roma-2025"
    },
    {
        id: 34,
        nome: "Beatrice",
        cognome: "Martino",
        email: "beatrice.martino@email.com",
        telefono: "+393409991114",
        codiceFiscale: "MRTBRC92D10H501L",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 35,
        nome: "Daniele",
        cognome: "Parisi",
        email: "daniele.parisi@email.com",
        telefono: "+393409991115",
        codiceFiscale: "PRSDNL85C20F205C",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 36,
        nome: "Federica",
        cognome: "Villa",
        email: "federica.villa@email.com",
        telefono: "+393409991116",
        codiceFiscale: "VLLFDR91E41H501D",
        slugViaggio: "parigi-2025"
    },
    {
        id: 37,
        nome: "Riccardo",
        cognome: "Monti",
        email: "riccardo.monti@email.com",
        telefono: "+393409991117",
        codiceFiscale: "MNTRCR83D30F205F",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 38,
        nome: "Veronica",
        cognome: "De Santis",
        email: "veronica.desantis@email.com",
        telefono: "+393409991118",
        codiceFiscale: "DSNVRC95B15H501G",
        slugViaggio: "new-york-2025"
    },
    {
        id: 39,
        nome: "Gabriele",
        cognome: "Fiore",
        email: "gabriele.fiore@email.com",
        telefono: "+393409991119",
        codiceFiscale: "FRAGBL84C01F205N",
        slugViaggio: "roma-2025"
    },
    {
        id: 40,
        nome: "Chiara",
        cognome: "Romani",
        email: "chiara.romani@email.com",
        telefono: "+393409991120",
        codiceFiscale: "RMNCHR93E41H501V",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 41,
        nome: "Lorenzo",
        cognome: "Bianco",
        email: "lorenzo.bianco@email.com",
        telefono: "+393409991121",
        codiceFiscale: "BNCLNZ89A10F205M",
        slugViaggio: "parigi-2025"
    },
    {
        id: 42,
        nome: "Francesco",
        cognome: "Lombardi",
        email: "francesco.lombardi@email.com",
        telefono: "+393409991122",
        codiceFiscale: "LMBFRC88D20H501S",
        slugViaggio: "roma-2025"
    },
    {
        id: 43,
        nome: "Sara",
        cognome: "Amato",
        email: "sara.amato@email.com",
        telefono: "+393409991123",
        codiceFiscale: "MTASRA91A01F205R",
        slugViaggio: "new-york-2025"
    },
    {
        id: 44,
        nome: "Michele",
        cognome: "Gentile",
        email: "michele.gentile@email.com",
        telefono: "+393409991124",
        codiceFiscale: "GNTMHL84C01H501T",
        slugViaggio: "lisbona-2025"
    },
    {
        id: 45,
        nome: "Isabella",
        cognome: "Mariani",
        email: "isabella.mariani@email.com",
        telefono: "+393409991125",
        codiceFiscale: "MRNISB90B10F205L",
        slugViaggio: "barcellona-2025"
    },
    {
        id: 46,
        nome: "Davide",
        cognome: "Caruso",
        email: "davide.caruso@email.com",
        telefono: "+393409991126",
        codiceFiscale: "CRSDVD88D10F205G",
        slugViaggio: "parigi-2025"
    },
    {
        id: 47,
        nome: "Camilla",
        cognome: "De Rosa",
        email: "camilla.derosa@email.com",
        telefono: "+393409991127",
        codiceFiscale: "DRSCML93E01H501B",
        slugViaggio: "new-york-2025"
    },
    {
        id: 48,
        nome: "Giorgio",
        cognome: "Rossi",
        email: "giorgio.rossi@email.com",
        telefono: "+393409991128",
        codiceFiscale: "RSSGRG87C01F205Q",
        slugViaggio: "roma-2025"
    },
    {
        id: 49,
        nome: "Eleonora",
        cognome: "Grechi",
        email: "eleonora.grechi@email.com",
        telefono: "+393409991129",
        codiceFiscale: "GRCLNR92D20H501N",
        slugViaggio: "tokyo-2025"
    },
    {
        id: 50,
        nome: "Emanuele",
        cognome: "Neri",
        email: "emanuele.neri@email.com",
        telefono: "+393409991130",
        codiceFiscale: "NREMNL85B15F205E",
        slugViaggio: "lisbona-2025"
    }
];

export default utenti;