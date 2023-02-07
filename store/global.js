import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        modal: {
            show: false,
            title: 'Title'
        }
    },
    mutations: {
        // init(state, data) {
        // },
        openModal(state) {
            state.modal.show = true;
        },
        closeModal(state) {
            state.modal.show = false;
        },
        setModalTitle(state, title) {
            state.modal.title = title;
        },
        lockBody(state) {
            document.getElementsByTagName('body')[0].classList.add('lock'); //TODO: try to make better
        },
        unlockBody(state) {
            document.getElementsByTagName('body')[0].classList.remove('lock'); //TODO: try to make better
        }
    },
})