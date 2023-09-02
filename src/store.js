import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            agencyName: 'Iron-Dev',
            navColVisible: true
        }
    },
    mutations:{
        setNavCol(state, bool){
            state.navColVisible= bool;
        },
    },
    getters:{
        returnTitle(state){
            return state.agencyName
        },
        returnNavColStatus(state){
            return state.navColVisible
        }
    }

})

export default store;