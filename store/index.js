import Vuex from 'vuex'

const createstore = () => {
    return new Vuex.Store({
        state: {
            images: [               
                {
                    id: 1, 
                    src: "/img/creano.jpg", 
                    img1: "/img/creano1.jpg", 
                    img2: "/img/creano2.jpg", 
                    title: "Creano Web", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 2, 
                    src: "/img/catchcarrie.jpg", 
                    img1: "/img/catchcarrie1.jpg", 
                    img2: "/img/catchcarrie2.jpg", 
                    title: "Catch Carrie", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 3, 
                    src: "/img/blue-fox.jpg", 
                    img1: "/img/blue-fox1.jpg", 
                    img2: "/img/blue-fox2.jpg", 
                    title: "Blue Fox", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 4, 
                    src: "/img/black-bear.jpg", 
                    img1: "/img/black-bear1.jpg", 
                    img2: "/img/black-bear2.jpg", 
                    title: "Black Bear Outdoor", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 5, 
                    src: "/img/marcia.jpg", 
                    img1: "/img/marcia1.jpg", 
                    img2: "/img/marcia2.jpg", 
                    title: "Marcia Reis", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 6, 
                    src: "/img/phoenix2.jpg", 
                    img1: "/img/phoenix1.jpg", 
                    img2: "/img/phoenix3.jpg", 
                    title: "Phoenix inc.", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 7, 
                    src: "/img/rusa.jpg", 
                    img1: "/img/rusa1.jpg", 
                    img2: "/img/rusa2.jpg", 
                    title: "The Abide Farm", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 8, 
                    src: "/img/WL4.jpg", 
                    img1: "/img/wilma.jpg", 
                    img2: "/img/wilma2.jpg", 
                    title: "Wilma & Louise", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 9, 
                    src: "/img/tppi.jpg", 
                    img1: "/img/tppi1.jpg", 
                    img2: "/img/tppi2.jpg", 
                    title: "TPPI", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 10, 
                    src: "/img/kresna.jpg", 
                    img1: "/img/kresna1.jpg", 
                    img2: "/img/kresna2.jpg", 
                    title: "Kresna Insurance", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 11, 
                    src: "/img/enseval.jpg", 
                    img1: "/img/enseval1.jpg", 
                    img2: "/img/enseval2.jpg", 
                    title: "Enseval Insurance", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 12, 
                    src: "/img/kmi.jpg", 
                    img1: "/img/kmi1.jpg", 
                    img2: "/img/kmi2.jpg", 
                    title: "KMI Wire & Cable", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 13, 
                    src: "/img/pjb.jpg", 
                    img1: "/img/pjb1.jpg", 
                    img2: "/img/pjb2.jpg", 
                    title: "PJB Indonesia", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 14, 
                    src: "/img/mareincover.jpg", 
                    img1: "/img/marein.jpg", 
                    img2: "/img/marein1.jpg", 
                    title: "Marein Insurance", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 15, 
                    src: "/img/ozymandias2.jpg", 
                    img1: "/img/ozymandias.jpg", 
                    img2: "/img/ozymandias1.jpg", 
                    title: "Ozymandias Capital", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 16, 
                    src: "/img/Dig2.jpg", 
                    img1: "/img/livetodig.jpg", 
                    img2: "/img/livetodig2.jpg", 
                    title: "Live to Dig", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 17, 
                    src: "/img/falken-cover.jpg", 
                    img1: "/img/falken.jpg", 
                    img2: "/img/falken1.jpg", 
                    title: "Falken Indonesia", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 18, 
                    src: "/img/lariat1.jpg", 
                    img1: "/img/lariat2.jpg", 
                    img2: "/img/lariat.jpg", 
                    title: "Lariat", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 19, 
                    src: "/img/woolf.jpg", 
                    img1: "/img/woolf1.jpg", 
                    img2: "/img/woolf2.jpg", 
                    title: "Woolf Aircraft inc.", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 20, 
                    src: "/img/dunlop2021.jpg", 
                    img1: "/img/dunlop2021-1.jpg", 
                    img2: "/img/dunlop2021-2.jpg", 
                    title: "Dunlop", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 21, 
                    src: "/img/falken2020.jpg", 
                    img1: "/img/falken20201.jpg", 
                    img2: "/img/falken20202.jpg", 
                    title: "Falken Indonesia", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 22, 
                    src: "/img/waskita.jpg", 
                    img1: "/img/waskita1.jpg", 
                    img2: "/img/waskita2.jpg", 
                    title: "Waskita Realty", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 23, 
                    src: "/img/new/mount.jpg", 
                    img1: "/img/new/mount.jpg", 
                    img2: "/img/new/mount.jpg", 
                    title: "Mount Wicks Candle Co.", 
                    category: 'LOGO',
                    tags: ['ALL', 'LOGO']
                },   
                {
                    id: 24, 
                    src: "/img/new/dunlop-leaflet.jpg", 
                    img1: "/img/new/dunlop-leaflet.jpg", 
                    img2: "/img/new/dunlop-leaflet.jpg", 
                    title: "Dunlop", 
                    category: 'GRAPHIC',
                    tags: ['ALL', 'GRAPHIC']
                },  
                {
                    id: 25, 
                    src: "/img/new/Showcase-Devices-Presentation.jpg", 
                    img1: "/img/new/Showcase-Devices-Presentation.jpg", 
                    img2: "/img/new/Showcase-Devices-Presentation.jpg", 
                    title: "Antv Klik", 
                    category: 'WEB',
                    tags: ['ALL', 'WEB']
                },      
                {
                    id: 26, 
                    src: "/img/new/web2.jpg", 
                    img1: "/img/new/web2.jpg", 
                    img2: "/img/new/web2.jpg", 
                    title: "Bay Shore Systems Inc.", 
                    category: 'WEB',
                    tags: ['ALL', 'WEB']
                },    
                {
                    id: 27, 
                    src: "/img/hut28.jpg", 
                    img1: "/img/hut28.jpg", 
                    img2: "/img/hut28.jpg", 
                    title: "Campaign HUT 28 ANTV", 
                    category: 'WEB',
                    tags: ['ALL', 'WEB']
                },  
                {
                    id: 28, 
                    src: "/img/web3.jpg", 
                    img1: "/img/web3.jpg", 
                    img2: "/img/web3.jpg", 
                    title: "Antvklik Ramadhan", 
                    category: 'WEB',
                    tags: ['ALL', 'WEB']
                },   
                {
                    id: 29, 
                    src: "/img/ramadan.jpg", 
                    img1: "/img/ramadan.jpg", 
                    img2: "/img/ramadan.jpg", 
                    title: "Ramadhan", 
                    category: 'WEB',
                    tags: ['ALL', 'WEB']
                },                                                                                                        
            ], 
        },
        mutations: {
            setImages (state, data) {
                state.image = data
            }
        }
    })
}

export default createstore
