import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicked';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    actions: {
        increment: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.dur)

        },
        decrement: (context, payload) => {
            context.commit('decrement', payload);
        },
        updateValue: (context, payload) => {
            context.commit('updateValue', payload);
        }
    },
    modules:{

    },
})