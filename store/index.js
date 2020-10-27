import Vuex from 'vuex'

const createstore = () => {
    return new Vuex.Store({
        state: {
            images: [               
                {
                    id: 1, 
                    title: "LOGO", 
                    url: "/img/creano.jpg", 
                    img1: "/img/creano1.jpg", 
                    img2: "/img/creano2.jpg", 
                    name: "Creano Web", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 2, 
                    title: "LOGO", 
                    url: "/img/catchcarrie.jpg", 
                    img1: "/img/catchcarrie1.jpg", 
                    img2: "/img/catchcarrie2.jpg", 
                    name: "Catch Carrie", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 3, 
                    title: "LOGO", 
                    url: "/img/blue-fox.jpg", 
                    img1: "/img/blue-fox1.jpg", 
                    img2: "/img/blue-fox2.jpg", 
                    name: "Blue Fox", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 4, 
                    title: "LOGO", 
                    url: "/img/black-bear.jpg", 
                    img1: "/img/black-bear1.jpg", 
                    img2: "/img/black-bear2.jpg", 
                    name: "Black Bear Outdoor", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 5, 
                    title: "LOGO", 
                    url: "/img/marcia.jpg", 
                    img1: "/img/marcia1.jpg", 
                    img2: "/img/marcia2.jpg", 
                    name: "Marcia Reis", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 6, 
                    title: "LOGO", 
                    url: "/img/phoenix2.jpg", 
                    img1: "/img/phoenix1.jpg", 
                    img2: "/img/phoenix3.jpg", 
                    name: "Phoenix inc.", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 7, 
                    title: "LOGO", 
                    url: "/img/rusa.jpg", 
                    img1: "/img/rusa1.jpg", 
                    img2: "/img/rusa2.jpg", 
                    name: "The Abide Farm", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 8, 
                    title: "LOGO", 
                    url: "/img/WL4.jpg", 
                    img1: "/img/wilma.jpg", 
                    img2: "/img/wilma2.jpg", 
                    name: "Wilma & Louise", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 9, 
                    title: "ANNUAL REPORT", 
                    url: "/img/tppi.jpg", 
                    img1: "/img/tppi1.jpg", 
                    img2: "/img/tppi2.jpg", 
                    name: "TPPI", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 10, 
                    title: "ANNUAL REPORT", 
                    url: "/img/kresna.jpg", 
                    img1: "/img/kresna1.jpg", 
                    img2: "/img/kresna2.jpg", 
                    name: "Kresna Insurance", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 11, 
                    title: "ANNUAL REPORT", 
                    url: "/img/enseval.jpg", 
                    img1: "/img/enseval1.jpg", 
                    img2: "/img/enseval2.jpg", 
                    name: "Enseval Insurance", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 12, 
                    title: "ANNUAL REPORT", 
                    url: "/img/kmi.jpg", 
                    img1: "/img/kmi1.jpg", 
                    img2: "/img/kmi2.jpg", 
                    name: "KMI Wire & Cable", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 13, 
                    title: "ANNUAL REPORT", 
                    url: "/img/pjb.jpg", 
                    img1: "/img/pjb1.jpg", 
                    img2: "/img/pjb2.jpg", 
                    name: "PJB Indonesia", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 14, 
                    title: "ANNUAL REPORT", 
                    url: "/img/mareincover.jpg", 
                    img1: "/img/marein.jpg", 
                    img2: "/img/marein1.jpg", 
                    name: "Marein Insurance", 
                    tags: ['ALL', 'ANNUAL-REPORT']
                },
                {
                    id: 15, 
                    title: "LOGO", 
                    url: "/img/ozymandias2.jpg", 
                    img1: "/img/ozymandias.jpg", 
                    img2: "/img/ozymandias1.jpg", 
                    name: "Ozymandias Capital", 
                    tags: ['ALL', 'LOGO']
                },
                {
                    id: 16, 
                    title: "GRAPHIC", 
                    url: "/img/Dig2.jpg", 
                    img1: "/img/livetodig.jpg", 
                    img2: "/img/livetodig2.jpg", 
                    name: "Live to Dig", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 17, 
                    title: "CALENDAR", 
                    url: "/img/falken-cover.jpg", 
                    img1: "/img/falken.jpg", 
                    img2: "/img/falken1.jpg", 
                    name: "Falken Indonesia", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 18, 
                    title: "GRAPHIC", 
                    url: "/img/lariat1.jpg", 
                    img1: "/img/lariat2.jpg", 
                    img2: "/img/lariat.jpg", 
                    name: "Lariat", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 19, 
                    title: "SIGNAGE", 
                    url: "/img/woolf.jpg", 
                    img1: "/img/woolf1.jpg", 
                    img2: "/img/woolf2.jpg", 
                    name: "Woolf Aircraft inc.", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 20, 
                    title: "CALENDAR", 
                    url: "/img/dunlop2021.jpg", 
                    img1: "/img/dunlop2021-1.jpg", 
                    img2: "/img/dunlop2021-2.jpg", 
                    name: "Dunlop", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 21, 
                    title: "CALENDAR", 
                    url: "/img/falken2020.jpg", 
                    img1: "/img/falken20201.jpg", 
                    img2: "/img/falken20202.jpg", 
                    name: "Falken Indonesia", 
                    tags: ['ALL', 'GRAPHIC']
                },
                {
                    id: 22, 
                    title: "ANNUAL REPORT", 
                    url: "/img/waskita.jpg", 
                    img1: "/img/waskita1.jpg", 
                    img2: "/img/waskita2.jpg", 
                    name: "Waskita Realty", 
                    tags: ['ALL', 'ANNUAL-REPORT']
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
