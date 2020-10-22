import Vuex from 'vuex'

const createstore = () => {
    return new Vuex.Store({
        state: {
            images: [
                // {id: 1, title: "LOGO", url: "/img/swam-fox.jpeg", img1: "/img/jackson.jpg", img2: "/img/blackstone5.jpg", name: "Swam Fox inc.", tags: ['ALL', 'LOGO']},
                // {id: 2, title: "LOGO", url: "/img/phoenix2.jpg", img1: "/img/phoenix1.jpg", img2: "/img/phoenix3.jpg", name: "Meraki inc.", tags: ['ALL', 'LOGO']},                
                {id: 1, title: "LOGO", url: "/img/creano.jpg", img1: "/img/creano1.jpg", img2: "/img/creano2.jpg", name: "Creano Web", tags: ['ALL', 'LOGO']},
                {id: 2, title: "LOGO", url: "/img/meraki.png", name: "Meraki inc.", tags: ['ALL', 'LOGO']},
                {id: 3, title: "LOGO", url: "/img/jackson.jpg", name: "Jackson inc.", tags: ['ALL', 'LOGO']},
                {id: 4, title: "LOGO", url: "/img/blackstone5.jpg", name: "Black Stone inc.", tags: ['ALL', 'LOGO']},
                {id: 5, title: "LOGO", url: "/img/blue-fox.jpg", name: "Blue Fox inc.", tags: ['ALL', 'LOGO']},
                {id: 6, title: "LOGO", url: "/img/black-bear.jpg", name: "Black Bear inc.", tags: ['ALL', 'LOGO']},
                {id: 7, title: "LOGO", url: "/img/phaseit.jpeg", name: "Phase It inc.", tags: ['ALL', 'LOGO']},
                {id: 8, title: "LOGO", url: "/img/phoenix2.jpg", img1: "/img/phoenix1.jpg", img2: "/img/phoenix3.jpg", name: "Phoenix inc.", tags: ['ALL', 'LOGO']},
                {id: 9, title: "LOGO", url: "/img/rusa.jpg", img1: "/img/rusa1.jpg", img2: "/img/rusa2.jpg", name: "The Abide Farm", tags: ['ALL', 'LOGO']},
                {id: 10, title: "LOGO", url: "/img/WL4.jpg", name: "Wilma & Louise", tags: ['ALL', 'LOGO']},
                {id: 11, title: "ANNUAL REPORT", url: "/img/annual2.jpg", name: "Swam Fox inc.", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 12, title: "ANNUAL REPORT", url: "/img/annual3.jpg", name: "Kresna Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 13, title: "ANNUAL REPORT", url: "/img/annual4.jpg", name: "Enseval", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 14, title: "ANNUAL REPORT", url: "/img/annual5.jpg", name: "KMI Wire & Cable", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 15, title: "ANNUAL REPORT", url: "/img/annual6.jpg", name: "PJB Indonesia", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 16, title: "ANNUAL REPORT", url: "/img/annual7.jpg", name: "Marein Insurance", tags: ['ALL', 'ANNUAL-REPORT']},
                {id: 17, title: "BUSINESS CARD", url: "/img/busines-card.jpeg", name: "CRU Air + Gas", tags: ['ALL', 'LOGO']},
                {id: 18, title: "BUSINESS CARD", url: "/img/busines-card2.jpg", name: "Make It Last", tags: ['ALL', 'LOGO']},
                {id: 19, title: "BUSINESS CARD", url: "/img/Dig2.jpg", name: "Live to Dig", tags: ['ALL', 'GRAPHIC']},
                {id: 20, title: "BUSINESS CARD", url: "/img/falken-cover.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 21, title: "BUSINESS CARD", url: "/img/insider.jpeg", name: "Insider inc.", tags: ['ALL', 'GRAPHIC']},
                {id: 22, title: "BUSINESS CARD", url: "/img/SEO14.jpg", name: "SEO Playbook", tags: ['ALL', 'GRAPHIC']},
                {id: 23, title: "BUSINESS CARD", url: "/img/signage.jpeg", name: "Woolf Aircraft inc.", tags: ['ALL', 'GRAPHIC']},
                {id: 24, title: "BUSINESS CARD", url: "/img/Draft kalender 2021 dunlop4.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 25, title: "BUSINESS CARD", url: "/img/Kalender Falken rev.jpg", name: "Falken Indonesia", tags: ['ALL', 'GRAPHIC']},
                {id: 26, title: "ANNUAL REPORT", url: "/img/annual8.jpg", name: "Waskita Realty", tags: ['ALL', 'ANNUAL-REPORT']},
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
