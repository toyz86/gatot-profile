import Vuex from 'vuex'

const createstore = () => {
    return new Vuex.Store({
        state: {
            images: [               
                {id: 1, title: "LOGO", url: "/img/creano.jpg", img1: "/img/creano1.jpg", img2: "/img/creano2.jpg", name: "Creano Web", tags: ['ALL', 'LOGO']},
                {id: 2, title: "LOGO", url: "/img/catchcarrie.jpg", img1: "/img/catchcarrie1.jpg", img2: "/img/catchcarrie2.jpg", name: "Catch Carrie", tags: ['ALL', 'LOGO']},
                {id: 3, title: "LOGO", url: "/img/blue-fox.jpg", img1: "/img/blue-fox1.jpg", img2: "/img/blue-fox2.jpg", name: "Blue Fox inc.", tags: ['ALL', 'LOGO']},
                {id: 4, title: "LOGO", url: "/img/black-bear.jpg", img1: "/img/black-bear1.jpg", img2: "/img/black-bear2.jpg", name: "Black Bear inc.", tags: ['ALL', 'LOGO']},
                {id: 5, title: "LOGO", url: "/img/marcia.jpg", img1: "/img/marcia1.jpg", img2: "/img/marcia2.jpg", name: "Marcia Reis", tags: ['ALL', 'LOGO']},
                {id: 6, title: "LOGO", url: "/img/phoenix2.jpg", img1: "/img/phoenix1.jpg", img2: "/img/phoenix3.jpg", name: "Phoenix inc.", tags: ['ALL', 'LOGO']},
                {id: 7, title: "LOGO", url: "/img/rusa.jpg", img1: "/img/rusa1.jpg", img2: "/img/rusa2.jpg", name: "The Abide Farm", tags: ['ALL', 'LOGO']},
                {id: 8, title: "LOGO", url: "/img/WL4.jpg", img1: "/img/wilma.jpg", img2: "/img/wilma2.jpg", name: "Wilma & Louise", tags: ['ALL', 'LOGO']},
                {id: 9, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 10, title: "ANNUAL REPORT", url: "/img/annual3.jpg", name: "Kresna Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 11, title: "ANNUAL REPORT", url: "/img/annual4.jpg", name: "Enseval", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 12, title: "ANNUAL REPORT", url: "/img/annual5.jpg", name: "KMI Wire & Cable", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 13, title: "ANNUAL REPORT", url: "/img/annual6.jpg", name: "PJB Indonesia", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 14, title: "ANNUAL REPORT", url: "/img/annual7.jpg", name: "Marein Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 15, title: "LOGO", url: "/img/ozymandias2.jpg", img1: "/img/ozymandias.jpg", img2: "/img/ozymandias1.jpg", name: "Ozymandias Capital", tags: ['ALL', 'LOGO']},
                {id: 16, title: "BUSINESS CARD", url: "/img/Dig2.jpg", name: "Live to Dig", tags: ['ALL', 'GRAPHIC']},
                {id: 17, title: "BUSINESS CARD", url: "/img/falken-cover.jpg", img1: "/img/falken.jpg", img2: "/img/falken1.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 18, title: "BUSINESS CARD", url: "/img/insider.jpeg", name: "Insider inc.", tags: ['ALL', 'GRAPHIC']},
                {id: 19, title: "BUSINESS CARD", url: "/img/SEO14.jpg", name: "SEO Playbook", tags: ['ALL', 'GRAPHIC']},
                {id: 20, title: "BUSINESS CARD", url: "/img/signage.jpeg", name: "Woolf Aircraft inc.", tags: ['ALL', 'GRAPHIC']},
                {id: 21, title: "BUSINESS CARD", url: "/img/falken2021.jpg", img1: "/img/falken2021-1.jpg", img2: "/img/falken2021-2.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 22, title: "BUSINESS CARD", url: "/img/falken2020.jpg", img1: "/img/falken20201.jpg", img2: "/img/falken20202.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 23, title: "ANNUAL REPORT", url: "/img/waskita.jpg", img1: "/img/waskita1.jpg", img2: "/img/waskita2.jpg", name: "Waskita Realty", tags: ['ALL', 'ANNUAL-REPORT']},
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
