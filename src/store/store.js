import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoitems: []
    },
    getters: {
        todoLists: state => state.todoitems
    },
    mutations: {
        // 입력값 배열 넣기
        add_btn(state, payload) { //payload = 입력값(배열)
            state.todoitems = [payload, ...state.todoitems]
        },
        changelist(state, payload) {
            state.todoitems[payload.index].status = payload.change.status
        }
    }
});