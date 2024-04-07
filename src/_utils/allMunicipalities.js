// @ts-check

/** @type {Array<{id: string; name: string; url: string;}>} */
const municipalities = [
  {
    id: "301",
    name: "Oslo",
    url: "https://oslo.kommune.no",
  },
  {
    id: "1101",
    name: "Eigersund",
    url: "https://eigersund.kommune.no",
  },
  {
    id: "1103",
    name: "Stavanger",
    url: "https://stavanger.kommune.no",
  },
  {
    id: "1106",
    name: "Haugesund",
    url: "https://haugesund.kommune.no",
  },
  {
    id: "1108",
    name: "Sandnes",
    url: "https://sandnes.kommune.no",
  },
  {
    id: "1111",
    name: "Sokndal",
    url: "https://sokndal.kommune.no",
  },
  {
    id: "1112",
    name: "Lund",
    url: "https://lund.kommune.no",
  },
  {
    id: "1114",
    name: "Bjerkreim",
    url: "https://bjerkreim.kommune.no",
  },
  {
    id: "1119",
    name: "Hå",
    url: "https://www.ha.no",
  },
  {
    id: "1120",
    name: "Klepp",
    url: "https://klepp.kommune.no",
  },
  {
    id: "1121",
    name: "Time",
    url: "https://time.kommune.no",
  },
  {
    id: "1122",
    name: "Gjesdal",
    url: "https://www.gjesdal.kommune.no",
  },
  {
    id: "1124",
    name: "Sola",
    url: "https://sola.kommune.no",
  },
  {
    id: "1127",
    name: "Randaberg",
    url: "https://randaberg.kommune.no",
  },
  {
    id: "1130",
    name: "Strand",
    url: "https://strand.kommune.no",
  },
  {
    id: "1133",
    name: "Hjelmeland",
    url: "https://hjelmeland.kommune.no",
  },
  {
    id: "1134",
    name: "Suldal",
    url: "https://suldal.kommune.no",
  },
  {
    id: "1135",
    name: "Sauda",
    url: "https://sauda.kommune.no",
  },
  {
    id: "1144",
    name: "Kvitsøy",
    url: "https://kvitsoy.kommune.no",
  },
  {
    id: "1145",
    name: "Bokn",
    url: "https://bokn.kommune.no",
  },
  {
    id: "1146",
    name: "Tysvær",
    url: "https://tysver.kommune.no",
  },
  {
    id: "1149",
    name: "Karmøy",
    url: "https://karmoy.kommune.no",
  },
  {
    id: "1151",
    name: "Utsira",
    url: "https://utsira.kommune.no",
  },
  {
    id: "1160",
    name: "Vindafjord",
    url: "https://www.vindafjord.kommune.no",
  },
  {
    id: "1505",
    name: "Kristiansund",
    url: "https://kristiansund.kommune.no",
  },
  {
    id: "1506",
    name: "Molde",
    url: "https://molde.kommune.no",
  },
  {
    id: "1507",
    name: "Ålesund",
    url: "https://alesund.kommune.no",
  },
  {
    id: "1511",
    name: "Vanylven",
    url: "https://vanylven.kommune.no",
  },
  {
    id: "1514",
    name: "Sande",
    url: "https://sande-mr.kommune.no",
  },
  {
    id: "1515",
    name: "Herøy",
    url: "https://heroy.kommune.no",
  },
  {
    id: "1516",
    name: "Ulstein",
    url: "https://ulstein.kommune.no",
  },
  {
    id: "1517",
    name: "Hareid",
    url: "https://hareid.kommune.no",
  },
  {
    id: "1520",
    name: "Ørsta",
    url: "https://orsta.kommune.no",
  },
  {
    id: "1525",
    name: "Stranda",
    url: "https://www.stranda.kommune.no",
  },
  {
    id: "1528",
    name: "Sykkylven",
    url: "https://www.sykkylven.kommune.no",
  },
  {
    id: "1531",
    name: "Sula",
    url: "https://sula.kommune.no",
  },
  {
    id: "1532",
    name: "Giske",
    url: "https://giske.kommune.no",
  },
  {
    id: "1535",
    name: "Vestnes",
    url: "https://vestnes.kommune.no",
  },
  {
    id: "1539",
    name: "Rauma",
    url: "https://rauma.kommune.no",
  },
  {
    id: "1547",
    name: "Aukra",
    url: "https://aukra.kommune.no",
  },
  {
    id: "1554",
    name: "Averøy",
    url: "https://averoy.kommune.no",
  },
  {
    id: "1557",
    name: "Gjemnes",
    url: "https://gjemnes.kommune.no",
  },
  {
    id: "1560",
    name: "Tingvoll",
    url: "https://tingvoll.kommune.no",
  },
  {
    id: "1563",
    name: "Sunndal",
    url: "https://sunndal.kommune.no",
  },
  {
    id: "1566",
    name: "Surnadal",
    url: "https://surnadal.kommune.no",
  },
  {
    id: "1573",
    name: "Smøla",
    url: "https://smola.kommune.no",
  },
  {
    id: "1576",
    name: "Aure",
    url: "https://aure.kommune.no",
  },
  {
    id: "1577",
    name: "Volda",
    url: "https://volda.kommune.no",
  },
  {
    id: "1578",
    name: "Fjord",
    url: "https://fjord.kommune.no",
  },
  {
    id: "1579",
    name: "Hustadvika",
    url: "https://hustadvika.kommune.no",
  },
  {
    id: "1804",
    name: "Bodø",
    url: "https://bodo.kommune.no",
  },
  {
    id: "1806",
    name: "Narvik",
    url: "https://narvik.kommune.no",
  },
  {
    id: "1811",
    name: "Bindal",
    url: "https://bindal.kommune.no",
  },
  {
    id: "1812",
    name: "Sømna",
    url: "https://somna.kommune.no",
  },
  {
    id: "1813",
    name: "Brønnøy",
    url: "https://bronnoy.kommune.no",
  },
  {
    id: "1815",
    name: "Vega",
    url: "https://vega.kommune.no",
  },
  {
    id: "1816",
    name: "Vevelstad",
    url: "http://www.vevelstad.kommune.no",
  },
  {
    id: "1818",
    name: "Herøy",
    url: "https://heroy.kommune.no",
  },
  {
    id: "1820",
    name: "Alstahaug",
    url: "https://alstahaug.kommune.no",
  },
  {
    id: "1822",
    name: "Leirfjord",
    url: "https://leirfjord.kommune.no",
  },
  {
    id: "1824",
    name: "Vefsn",
    url: "https://vefsn.kommune.no",
  },
  {
    id: "1825",
    name: "Grane",
    url: "https://grane.kommune.no",
  },
  {
    id: "1826",
    name: "Aarborte - Hattfjelldal",
    url: "https://hattfjelldal.kommune.no",
  },
  {
    id: "1827",
    name: "Dønna",
    url: "https://donna.kommune.no",
  },
  {
    id: "1828",
    name: "Nesna",
    url: "https://nesna.kommune.no",
  },
  {
    id: "1832",
    name: "Hemnes",
    url: "https://www.hemnes.kommune.no",
  },
  {
    id: "1833",
    name: "Rana",
    url: "https://rana.kommune.no",
  },
  {
    id: "1834",
    name: "Lurøy",
    url: "https://luroy.kommune.no",
  },
  {
    id: "1835",
    name: "Træna",
    url: "https://trana.kommune.no",
  },
  {
    id: "1836",
    name: "Rødøy",
    url: "http://www.rodoy.kommune.no",
  },
  {
    id: "1837",
    name: "Meløy",
    url: "https://meloy.kommune.no",
  },
  {
    id: "1838",
    name: "Gildeskål",
    url: "https://gildeskal.kommune.no",
  },
  {
    id: "1839",
    name: "Beiarn",
    url: "https://beiarn.kommune.no",
  },
  {
    id: "1840",
    name: "Saltdal",
    url: "https://www.saltdal.kommune.no",
  },
  {
    id: "1841",
    name: "Fauske - Fuossko",
    url: "https://fauske.kommune.no",
  },
  {
    id: "1845",
    name: "Sørfold",
    url: "https://sorfold.kommune.no",
  },
  {
    id: "1848",
    name: "Steigen",
    url: "https://steigen.kommune.no",
  },
  {
    id: "1851",
    name: "Lødingen",
    url: "https://lodingen.kommune.no",
  },
  {
    id: "1853",
    name: "Evenes - Evenášši",
    url: "https://evenes.kommune.no",
  },
  {
    id: "1856",
    name: "Røst",
    url: "https://rost.kommune.no",
  },
  {
    id: "1857",
    name: "Værøy",
    url: "https://varoy.kommune.no",
  },
  {
    id: "1859",
    name: "Flakstad",
    url: "https://flakstad.kommune.no",
  },
  {
    id: "1860",
    name: "Vestvågøy",
    url: "https://vestvagoy.kommune.no",
  },
  {
    id: "1865",
    name: "Vågan",
    url: "https://vagan.kommune.no",
  },
  {
    id: "1866",
    name: "Hadsel",
    url: "https://hadsel.kommune.no",
  },
  {
    id: "1867",
    name: "Bø",
    url: "https://boe.kommune.no",
  },
  {
    id: "1868",
    name: "Øksnes",
    url: "https://oksnes.kommune.no",
  },
  {
    id: "1870",
    name: "Sortland - Suortá",
    url: "https://sortland.kommune.no",
  },
  {
    id: "1871",
    name: "Andøy",
    url: "https://www.andoy.kommune.no",
  },
  {
    id: "1874",
    name: "Moskenes",
    url: "https://moskenes.kommune.no",
  },
  {
    id: "1875",
    name: "Hábmer - Hamarøy",
    url: "https://hamaroy.kommune.no",
  },
  {
    id: "3001",
    name: "Halden",
    url: "https://halden.kommune.no",
  },
  {
    id: "3002",
    name: "Moss",
    url: "https://moss.kommune.no",
  },
  {
    id: "3003",
    name: "Sarpsborg",
    url: "https://www.sarpsborg.com",
  },
  {
    id: "3004",
    name: "Fredrikstad",
    url: "https://www.fredrikstad.kommune.no",
  },
  {
    id: "3005",
    name: "Drammen",
    url: "https://drammen.kommune.no",
  },
  {
    id: "3006",
    name: "Kongsberg",
    url: "https://kongsberg.kommune.no",
  },
  {
    id: "3007",
    name: "Ringerike",
    url: "https://ringerike.kommune.no",
  },
  {
    id: "3011",
    name: "Hvaler",
    url: "https://www.hvaler.kommune.no",
  },
  {
    id: "3012",
    name: "Aremark",
    url: "https://aremark.kommune.no",
  },
  {
    id: "3013",
    name: "Marker",
    url: "https://marker.kommune.no",
  },
  {
    id: "3014",
    name: "Indre Østfold",
    url: "https://io.kommune.no",
  },
  {
    id: "3015",
    name: "Skiptvet",
    url: "https://skiptvet.kommune.no",
  },
  {
    id: "3016",
    name: "Rakkestad",
    url: "https://rakkestad.kommune.no",
  },
  {
    id: "3017",
    name: "Råde",
    url: "https://rade.kommune.no",
  },
  {
    id: "3018",
    name: "Våler",
    url: "https://valer-of.kommune.no",
  },
  {
    id: "3019",
    name: "Vestby",
    url: "https://vestby.kommune.no",
  },
  {
    id: "3020",
    name: "Nordre Follo",
    url: "https://nordrefollo.kommune.no",
  },
  {
    id: "3021",
    name: "Ås",
    url: "https://as.kommune.no",
  },
  {
    id: "3022",
    name: "Frogn",
    url: "https://frogn.kommune.no",
  },
  {
    id: "3023",
    name: "Nesodden",
    url: "https://nesodden.kommune.no",
  },
  {
    id: "3024",
    name: "Bærum",
    url: "https://baerum.kommune.no",
  },
  {
    id: "3025",
    name: "Asker",
    url: "https://asker.kommune.no",
  },
  {
    id: "3026",
    name: "Aurskog-Høland",
    url: "https://aurskog-holand.kommune.no",
  },
  {
    id: "3027",
    name: "Rælingen",
    url: "https://ralingen.kommune.no",
  },
  {
    id: "3028",
    name: "Enebakk",
    url: "https://enebakk.kommune.no",
  },
  {
    id: "3029",
    name: "Lørenskog",
    url: "https://lorenskog.kommune.no",
  },
  {
    id: "3030",
    name: "Lillestrøm",
    url: "https://lillestrom.kommune.no",
  },
  {
    id: "3031",
    name: "Nittedal",
    url: "https://nittedal.kommune.no",
  },
  {
    id: "3032",
    name: "Gjerdrum",
    url: "https://www.gjerdrum.kommune.no",
  },
  {
    id: "3033",
    name: "Ullensaker",
    url: "https://ullensaker.kommune.no",
  },
  {
    id: "3034",
    name: "Nes",
    url: "https://www.nes.kommune.no",
  },
  {
    id: "3035",
    name: "Eidsvoll",
    url: "https://www.eidsvoll.kommune.no",
  },
  {
    id: "3036",
    name: "Nannestad",
    url: "https://www.nannestad.kommune.no",
  },
  {
    id: "3037",
    name: "Hurdal",
    url: "https://www.hurdal.kommune.no",
  },
  {
    id: "3038",
    name: "Hole",
    url: "https://hole.kommune.no",
  },
  {
    id: "3039",
    name: "Flå",
    url: "https://flaa.kommune.no",
  },
  {
    id: "3040",
    name: "Nesbyen",
    url: "https://nesbyen.kommune.no",
  },
  {
    id: "3041",
    name: "Gol",
    url: "https://gol.kommune.no",
  },
  {
    id: "3042",
    name: "Hemsedal",
    url: "https://hemsedal.kommune.no",
  },
  {
    id: "3043",
    name: "Ål",
    url: "https://aal.kommune.no",
  },
  {
    id: "3044",
    name: "Hol",
    url: "https://hol.kommune.no",
  },
  {
    id: "3045",
    name: "Sigdal",
    url: "https://sigdal.kommune.no",
  },
  {
    id: "3046",
    name: "Krødsherad",
    url: "https://krodsherad.kommune.no",
  },
  {
    id: "3047",
    name: "Modum",
    url: "https://modum.kommune.no",
  },
  {
    id: "3048",
    name: "Øvre Eiker",
    url: "https://ovre-eiker.kommune.no",
  },
  {
    id: "3049",
    name: "Lier",
    url: "https://lier.kommune.no",
  },
  {
    id: "3050",
    name: "Flesberg",
    url: "https://flesberg.kommune.no",
  },
  {
    id: "3051",
    name: "Rollag",
    url: "https://rollag.kommune.no",
  },
  {
    id: "3052",
    name: "Nore og Uvdal",
    url: "https://nore-og-uvdal.kommune.no",
  },
  {
    id: "3053",
    name: "Jevnaker",
    url: "https://jevnaker.kommune.no",
  },
  {
    id: "3054",
    name: "Lunner",
    url: "https://lunner.kommune.no",
  },
  {
    id: "3401",
    name: "Kongsvinger",
    url: "https://kongsvinger.kommune.no",
  },
  {
    id: "3403",
    name: "Hamar",
    url: "https://hamar.kommune.no",
  },
  {
    id: "3405",
    name: "Lillehammer",
    url: "https://lillehammer.kommune.no",
  },
  {
    id: "3407",
    name: "Gjøvik",
    url: "https://gjovik.kommune.no",
  },
  {
    id: "3411",
    name: "Ringsaker",
    url: "https://www.ringsaker.kommune.no",
  },
  {
    id: "3412",
    name: "Løten",
    url: "https://loten.kommune.no",
  },
  {
    id: "3413",
    name: "Stange",
    url: "https://stange.kommune.no",
  },
  {
    id: "3414",
    name: "Nord-Odal",
    url: "https://nord-odal.kommune.no",
  },
  {
    id: "3415",
    name: "Sør-Odal",
    url: "https://sor-odal.kommune.no",
  },
  {
    id: "3416",
    name: "Eidskog",
    url: "https://eidskog.kommune.no",
  },
  {
    id: "3417",
    name: "Grue",
    url: "https://grue.kommune.no",
  },
  {
    id: "3418",
    name: "Åsnes",
    url: "https://www.asnes.kommune.no",
  },
  {
    id: "3419",
    name: "Våler",
    url: "https://vaaler-he.kommune.no",
  },
  {
    id: "3420",
    name: "Elverum",
    url: "https://www.elverum.kommune.no",
  },
  {
    id: "3421",
    name: "Trysil",
    url: "https://trysil.kommune.no",
  },
  {
    id: "3422",
    name: "Åmot",
    url: "https://amot.kommune.no",
  },
  {
    id: "3423",
    name: "Stor-Elvdal",
    url: "https://stor-elvdal.kommune.no",
  },
  {
    id: "3424",
    name: "Rendalen",
    url: "https://rendalen.kommune.no",
  },
  {
    id: "3425",
    name: "Engerdal",
    url: "https://engerdal.kommune.no",
  },
  {
    id: "3426",
    name: "Tolga",
    url: "https://tolga.kommune.no",
  },
  {
    id: "3427",
    name: "Tynset",
    url: "https://tynset.kommune.no",
  },
  {
    id: "3428",
    name: "Alvdal",
    url: "https://alvdal.kommune.no",
  },
  {
    id: "3429",
    name: "Folldal",
    url: "https://folldal.kommune.no",
  },
  {
    id: "3430",
    name: "Os",
    url: "https://os.kommune.no",
  },
  {
    id: "3431",
    name: "Dovre",
    url: "https://dovre.kommune.no",
  },
  {
    id: "3432",
    name: "Lesja",
    url: "https://lesja.kommune.no",
  },
  {
    id: "3433",
    name: "Skjåk",
    url: "https://skjaak.kommune.no",
  },
  {
    id: "3434",
    name: "Lom",
    url: "https://lom.kommune.no",
  },
  {
    id: "3435",
    name: "Vågå",
    url: "https://vaga.kommune.no",
  },
  {
    id: "3436",
    name: "Nord-Fron",
    url: "https://nord-fron.kommune.no",
  },
  {
    id: "3437",
    name: "Sel",
    url: "https://sel.kommune.no",
  },
  {
    id: "3438",
    name: "Sør-Fron",
    url: "https://sor-fron.kommune.no",
  },
  {
    id: "3439",
    name: "Ringebu",
    url: "https://ringebu.kommune.no",
  },
  {
    id: "3440",
    name: "Øyer",
    url: "https://oyer.kommune.no",
  },
  {
    id: "3441",
    name: "Gausdal",
    url: "https://gausdal.kommune.no",
  },
  {
    id: "3442",
    name: "Østre Toten",
    url: "https://ostre-toten.kommune.no",
  },
  {
    id: "3443",
    name: "Vestre Toten",
    url: "https://www.vestre-toten.kommune.no/",
  },
  {
    id: "3446",
    name: "Gran",
    url: "https://gran.kommune.no",
  },
  {
    id: "3447",
    name: "Søndre Land",
    url: "https://sondre-land.kommune.no",
  },
  {
    id: "3448",
    name: "Nordre Land",
    url: "https://nordre-land.kommune.no",
  },
  {
    id: "3449",
    name: "Sør-Aurdal",
    url: "https://sor-aurdal.kommune.no",
  },
  {
    id: "3450",
    name: "Etnedal",
    url: "https://etnedal.kommune.no",
  },
  {
    id: "3451",
    name: "Nord-Aurdal",
    url: "https://nord-aurdal.kommune.no",
  },
  {
    id: "3452",
    name: "Vestre Slidre",
    url: "https://vestre-slidre.kommune.no",
  },
  {
    id: "3453",
    name: "Øystre Slidre",
    url: "https://oystre-slidre.kommune.no",
  },
  {
    id: "3454",
    name: "Vang",
    url: "https://vang.kommune.no",
  },
  {
    id: "3801",
    name: "Horten",
    url: "https://horten.kommune.no",
  },
  {
    id: "3802",
    name: "Holmestrand",
    url: "https://holmestrand.kommune.no",
  },
  {
    id: "3803",
    name: "Tønsberg",
    url: "https://tonsberg.kommune.no",
  },
  {
    id: "3804",
    name: "Sandefjord",
    url: "https://sandefjord.kommune.no",
  },
  {
    id: "3805",
    name: "Larvik",
    url: "https://larvik.kommune.no",
  },
  {
    id: "3806",
    name: "Porsgrunn",
    url: "https://www.porsgrunn.kommune.no",
  },
  {
    id: "3807",
    name: "Skien",
    url: "https://skien.kommune.no",
  },
  {
    id: "3808",
    name: "Notodden",
    url: "https://notodden.kommune.no",
  },
  {
    id: "3811",
    name: "Færder",
    url: "https://faerder.kommune.no",
  },
  {
    id: "3812",
    name: "Siljan",
    url: "https://siljan.kommune.no",
  },
  {
    id: "3813",
    name: "Bamble",
    url: "https://www.bamble.kommune.no",
  },
  {
    id: "3814",
    name: "Kragerø",
    url: "https://kragero.kommune.no",
  },
  {
    id: "3815",
    name: "Drangedal",
    url: "https://drangedal.kommune.no",
  },
  {
    id: "3816",
    name: "Nome",
    url: "https://nome.kommune.no",
  },
  {
    id: "3817",
    name: "Midt-Telemark",
    url: "https://midt-telemark.kommune.no",
  },
  {
    id: "3818",
    name: "Tinn",
    url: "https://tinn.kommune.no",
  },
  {
    id: "3819",
    name: "Hjartdal",
    url: "https://hjartdal.kommune.no",
  },
  {
    id: "3820",
    name: "Seljord",
    url: "https://seljord.kommune.no",
  },
  {
    id: "3821",
    name: "Kviteseid",
    url: "https://kviteseid.kommune.no",
  },
  {
    id: "3822",
    name: "Nissedal",
    url: "https://nissedal.kommune.no",
  },
  {
    id: "3823",
    name: "Fyresdal",
    url: "https://fyresdal.kommune.no",
  },
  {
    id: "3824",
    name: "Tokke",
    url: "https://tokke.kommune.no",
  },
  {
    id: "3825",
    name: "Vinje",
    url: "https://vinje.kommune.no",
  },
  {
    id: "4201",
    name: "Risør",
    url: "https://risor.kommune.no",
  },
  {
    id: "4202",
    name: "Grimstad",
    url: "https://grimstad.kommune.no",
  },
  {
    id: "4203",
    name: "Arendal",
    url: "https://arendal.kommune.no",
  },
  {
    id: "4204",
    name: "Kristiansand",
    url: "https://www.kristiansand.kommune.no",
  },
  {
    id: "4205",
    name: "Lindesnes",
    url: "https://lindesnes.kommune.no",
  },
  {
    id: "4206",
    name: "Farsund",
    url: "https://farsund.kommune.no",
  },
  {
    id: "4207",
    name: "Flekkefjord",
    url: "https://flekkefjord.kommune.no",
  },
  {
    id: "4211",
    name: "Gjerstad",
    url: "https://gjerstad.kommune.no",
  },
  {
    id: "4212",
    name: "Vegårshei",
    url: "https://vegarshei.kommune.no",
  },
  {
    id: "4213",
    name: "Tvedestrand",
    url: "https://tvedestrand.kommune.no",
  },
  {
    id: "4214",
    name: "Froland",
    url: "https://froland.kommune.no",
  },
  {
    id: "4215",
    name: "Lillesand",
    url: "https://lillesand.kommune.no",
  },
  {
    id: "4216",
    name: "Birkenes",
    url: "https://birkenes.kommune.no",
  },
  {
    id: "4217",
    name: "Åmli",
    url: "https://amli.kommune.no",
  },
  {
    id: "4218",
    name: "Iveland",
    url: "https://iveland.kommune.no",
  },
  {
    id: "4219",
    name: "Evje og Hornnes",
    url: "https://e-h.kommune.no",
  },
  {
    id: "4220",
    name: "Bygland",
    url: "https://bygland.kommune.no",
  },
  {
    id: "4221",
    name: "Valle",
    url: "https://valle.kommune.no",
  },
  {
    id: "4222",
    name: "Bykle",
    url: "https://bykle.kommune.no",
  },
  {
    id: "4223",
    name: "Vennesla",
    url: "https://vennesla.kommune.no",
  },
  {
    id: "4224",
    name: "Åseral",
    url: "https://aseral.kommune.no",
  },
  {
    id: "4225",
    name: "Lyngdal",
    url: "https://lyngdal.kommune.no",
  },
  {
    id: "4226",
    name: "Hægebostad",
    url: "https://haegebostad.kommune.no",
  },
  {
    id: "4227",
    name: "Kvinesdal",
    url: "https://kvinesdal.kommune.no",
  },
  {
    id: "4228",
    name: "Sirdal",
    url: "https://sirdal.kommune.no",
  },
  {
    id: "4601",
    name: "Bergen",
    url: "https://www.bergen.kommune.no",
  },
  {
    id: "4602",
    name: "Kinn",
    url: "https://kinn.kommune.no",
  },
  {
    id: "4611",
    name: "Etne",
    url: "https://www.etne.kommune.no",
  },
  {
    id: "4612",
    name: "Sveio",
    url: "https://sveio.kommune.no",
  },
  {
    id: "4613",
    name: "Bømlo",
    url: "https://bomlo.kommune.no",
  },
  {
    id: "4614",
    name: "Stord",
    url: "https://stord.kommune.no",
  },
  {
    id: "4615",
    name: "Fitjar",
    url: "https://fitjar.kommune.no",
  },
  {
    id: "4616",
    name: "Tysnes",
    url: "https://tysnes.kommune.no",
  },
  {
    id: "4617",
    name: "Kvinnherad",
    url: "https://kvinnherad.kommune.no",
  },
  {
    id: "4618",
    name: "Ullensvang",
    url: "https://ullensvang.kommune.no",
  },
  {
    id: "4619",
    name: "Eidfjord",
    url: "https://eidfjord.kommune.no",
  },
  {
    id: "4620",
    name: "Ulvik",
    url: "https://www.ulvik.kommune.no",
  },
  {
    id: "4621",
    name: "Voss",
    url: "https://voss.kommune.no",
  },
  {
    id: "4622",
    name: "Kvam",
    url: "https://www.kvam.kommune.no",
  },
  {
    id: "4623",
    name: "Samnanger",
    url: "https://samnanger.kommune.no",
  },
  {
    id: "4624",
    name: "Bjørnafjorden",
    url: "https://bjornafjorden.kommune.no",
  },
  {
    id: "4625",
    name: "Austevoll",
    url: "https://austevoll.kommune.no",
  },
  {
    id: "4626",
    name: "Øygarden",
    url: "https://oygarden.kommune.no",
  },
  {
    id: "4627",
    name: "Askøy",
    url: "https://askoy.kommune.no",
  },
  {
    id: "4628",
    name: "Vaksdal",
    url: "https://vaksdal.kommune.no",
  },
  {
    id: "4629",
    name: "Modalen",
    url: "https://modalen.kommune.no",
  },
  {
    id: "4630",
    name: "Osterøy",
    url: "https://osteroy.kommune.no",
  },
  {
    id: "4631",
    name: "Alver",
    url: "https://alver.kommune.no",
  },
  {
    id: "4632",
    name: "Austrheim",
    url: "https://austrheim.kommune.no",
  },
  {
    id: "4633",
    name: "Fedje",
    url: "https://fedje.kommune.no",
  },
  {
    id: "4634",
    name: "Masfjorden",
    url: "https://masfjorden.kommune.no",
  },
  {
    id: "4635",
    name: "Gulen",
    url: "https://gulen.kommune.no",
  },
  {
    id: "4636",
    name: "Solund",
    url: "https://solund.kommune.no",
  },
  {
    id: "4637",
    name: "Hyllestad",
    url: "https://hyllestad.kommune.no",
  },
  {
    id: "4638",
    name: "Høyanger",
    url: "https://hoyanger.kommune.no",
  },
  {
    id: "4639",
    name: "Vik",
    url: "https://vik.kommune.no",
  },
  {
    id: "4640",
    name: "Sogndal",
    url: "https://sogndal.kommune.no",
  },
  {
    id: "4641",
    name: "Aurland",
    url: "https://aurland.kommune.no",
  },
  {
    id: "4642",
    name: "Lærdal",
    url: "https://laerdal.kommune.no",
  },
  {
    id: "4643",
    name: "Årdal",
    url: "https://ardal.kommune.no",
  },
  {
    id: "4644",
    name: "Luster",
    url: "https://luster.kommune.no",
  },
  {
    id: "4645",
    name: "Askvoll",
    url: "https://askvoll.kommune.no",
  },
  {
    id: "4646",
    name: "Fjaler",
    url: "https://fjaler.kommune.no",
  },
  {
    id: "4647",
    name: "Sunnfjord",
    url: "https://sunnfjord.kommune.no",
  },
  {
    id: "4648",
    name: "Bremanger",
    url: "https://bremanger.kommune.no",
  },
  {
    id: "4649",
    name: "Stad",
    url: "https://stad.kommune.no",
  },
  {
    id: "4650",
    name: "Gloppen",
    url: "https://gloppen.kommune.no",
  },
  {
    id: "4651",
    name: "Stryn",
    url: "https://stryn.kommune.no",
  },
  {
    id: "5001",
    name: "Trondheim",
    url: "https://trondheim.kommune.no",
  },
  {
    id: "5006",
    name: "Steinkjer",
    url: "https://steinkjer.kommune.no",
  },
  {
    id: "5007",
    name: "Namsos - Nåavmesjenjaelmie",
    url: "https://namsos.kommune.no",
  },
  {
    id: "5014",
    name: "Frøya",
    url: "https://www.froya.kommune.no",
  },
  {
    id: "5020",
    name: "Osen",
    url: "https://osen.kommune.no",
  },
  {
    id: "5021",
    name: "Oppdal",
    url: "https://oppdal.kommune.no",
  },
  {
    id: "5022",
    name: "Rennebu",
    url: "https://rennebu.kommune.no",
  },
  {
    id: "5025",
    name: "Rossen - Røros",
    url: "https://roros.kommune.no",
  },
  {
    id: "5026",
    name: "Holtålen",
    url: "https://holtalen.kommune.no",
  },
  {
    id: "5027",
    name: "Midtre Gauldal",
    url: "https://midtre-gauldal.kommune.no",
  },
  {
    id: "5028",
    name: "Melhus",
    url: "https://melhus.kommune.no",
  },
  {
    id: "5029",
    name: "Skaun",
    url: "https://skaun.kommune.no",
  },
  {
    id: "5031",
    name: "Malvik",
    url: "https://malvik.kommune.no",
  },
  {
    id: "5032",
    name: "Selbu",
    url: "https://selbu.kommune.no",
  },
  {
    id: "5033",
    name: "Tydal",
    url: "https://tydal.kommune.no",
  },
  {
    id: "5034",
    name: "Meråker",
    url: "https://meraker.kommune.no",
  },
  {
    id: "5035",
    name: "Stjørdal",
    url: "https://stjordal.kommune.no",
  },
  {
    id: "5036",
    name: "Frosta",
    url: "https://frosta.kommune.no",
  },
  {
    id: "5037",
    name: "Levanger",
    url: "https://levanger.kommune.no",
  },
  {
    id: "5038",
    name: "Verdal",
    url: "https://verdal.kommune.no",
  },
  {
    id: "5041",
    name: "Snåase - Snåsa",
    url: "https://snasa.kommune.no",
  },
  {
    id: "5042",
    name: "Lierne",
    url: "https://lierne.kommune.no",
  },
  {
    id: "5043",
    name: "Raarvihke - Røyrvik",
    url: "https://royrvik.kommune.no",
  },
  {
    id: "5044",
    name: "Namsskogan",
    url: "https://namsskogan.kommune.no",
  },
  {
    id: "5045",
    name: "Grong",
    url: "https://grong.kommune.no",
  },
  {
    id: "5046",
    name: "Høylandet",
    url: "https://hoylandet.kommune.no",
  },
  {
    id: "5047",
    name: "Overhalla",
    url: "https://overhalla.kommune.no",
  },
  {
    id: "5049",
    name: "Flatanger",
    url: "https://flatanger.kommune.no",
  },
  {
    id: "5052",
    name: "Leka",
    url: "https://www.leka.kommune.no",
  },
  {
    id: "5053",
    name: "Inderøy",
    url: "https://inderoy.kommune.no",
  },
  {
    id: "5054",
    name: "Indre Fosen",
    url: "https://www.indrefosen.kommune.no",
  },
  {
    id: "5055",
    name: "Heim",
    url: "https://heim.kommune.no",
  },
  {
    id: "5056",
    name: "Hitra",
    url: "https://hitra.kommune.no",
  },
  {
    id: "5057",
    name: "Ørland",
    url: "https://orland.kommune.no",
  },
  {
    id: "5058",
    name: "Åfjord",
    url: "https://afjord.kommune.no",
  },
  {
    id: "5059",
    name: "Orkland",
    url: "https://orkland.kommune.no",
  },
  {
    id: "5060",
    name: "Nærøysund",
    url: "https://naroysund.kommune.no",
  },
  {
    id: "5061",
    name: "Rindal",
    url: "https://rindal.kommune.no",
  },
  {
    id: "5401",
    name: "Tromsø",
    url: "https://tromso.kommune.no",
  },
  {
    id: "5402",
    name: "Harstad - Hárstták",
    url: "https://www.harstad.kommune.no",
  },
  {
    id: "5403",
    name: "Alta",
    url: "https://alta.kommune.no",
  },
  {
    id: "5404",
    name: "Vardø",
    url: "https://vardo.kommune.no",
  },
  {
    id: "5405",
    name: "Vadsø",
    url: "https://vadso.kommune.no",
  },
  {
    id: "5406",
    name: "Hammerfest - Hámmerfeasta",
    url: "https://hammerfest.kommune.no",
  },
  {
    id: "5411",
    name: "Kvæfjord",
    url: "https://kvafjord.kommune.no",
  },
  {
    id: "5412",
    name: "Tjeldsund - Dielddanuorri",
    url: "https://tjeldsund.kommune.no",
  },
  {
    id: "5413",
    name: "Ibestad",
    url: "https://ibestad.kommune.no",
  },
  {
    id: "5414",
    name: "Rivttága - Gratangen",
    url: "https://gratangen.kommune.no",
  },
  {
    id: "5415",
    name: "Loabák - Lavangen",
    url: "https://lavangen.kommune.no",
  },
  {
    id: "5416",
    name: "Bardu",
    url: "https://bardu.kommune.no",
  },
  {
    id: "5417",
    name: "Salangen",
    url: "https://salangen.kommune.no",
  },
  {
    id: "5418",
    name: "Målselv",
    url: "https://malselv.kommune.no",
  },
  {
    id: "5419",
    name: "Sørreisa",
    url: "https://sorreisa.kommune.no",
  },
  {
    id: "5420",
    name: "Dyrøy",
    url: "https://dyroy.kommune.no",
  },
  {
    id: "5421",
    name: "Senja",
    url: "https://senja.kommune.no",
  },
  {
    id: "5422",
    name: "Balsfjord",
    url: "https://balsfjord.kommune.no",
  },
  {
    id: "5423",
    name: "Karlsøy",
    url: "https://karlsoy.kommune.no",
  },
  {
    id: "5424",
    name: "Lyngen",
    url: "https://lyngen.kommune.no",
  },
  {
    id: "5425",
    name: "Storfjord - Omasvuotna - Omasvuono",
    url: "https://storfjord.kommune.no",
  },
  {
    id: "5426",
    name: "Gáivuotna - Kåfjord - Kaivuono",
    url: "https://kafjord.kommune.no",
  },
  {
    id: "5427",
    name: "Skjervøy",
    url: "https://skjervoy.kommune.no",
  },
  {
    id: "5428",
    name: "Nordreisa - Ráisa - Raisi",
    url: "https://nordreisa.kommune.no",
  },
  {
    id: "5429",
    name: "Kvænangen",
    url: "https://www.kvanangen.kommune.no",
  },
  {
    id: "5430",
    name: "Guovdageaidnu - Kautokeino",
    url: "https://www.guovdageainnu.suohkan.no/",
  },
  {
    id: "5432",
    name: "Loppa",
    url: "https://loppa.kommune.no",
  },
  {
    id: "5433",
    name: "Hasvik",
    url: "https://hasvik.kommune.no",
  },
  {
    id: "5434",
    name: "Måsøy",
    url: "https://masoy.kommune.no",
  },
  {
    id: "5435",
    name: "Nordkapp",
    url: "https://nordkapp.kommune.no",
  },
  {
    id: "5436",
    name: "Porsanger - Porsáŋgu - Porsanki",
    url: "https://porsanger.kommune.no",
  },
  {
    id: "5437",
    name: "Kárášjohka - Karasjok",
    url: "https://karasjok.kommune.no",
  },
  {
    id: "5438",
    name: "Lebesby",
    url: "https://lebesby.kommune.no",
  },
  {
    id: "5439",
    name: "Gamvik",
    url: "https://gamvik.kommune.no",
  },
  {
    id: "5440",
    name: "Berlevåg",
    url: "https://berlevag.kommune.no",
  },
  {
    id: "5441",
    name: "Deatnu - Tana",
    url: "https://tana.kommune.no",
  },
  {
    id: "5442",
    name: "Unjárga - Nesseby",
    url: "https://nesseby.kommune.no",
  },
  {
    id: "5443",
    name: "Båtsfjord",
    url: "https://batsfjord.kommune.no",
  },
  {
    id: "5444",
    name: "Sør-Varanger",
    url: "https://sor-varanger.kommune.no",
  },
];

export default municipalities;
