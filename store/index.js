import Vuex from 'vuex'

const createstore = () => {
    return new Vuex.Store({
        state: {
            images: {}
        },
        mutations: {
            setImages (state, data) {
                state.image = data
            }
        }
    })
}

export default createstore
