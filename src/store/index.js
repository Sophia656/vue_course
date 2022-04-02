import { createStore } from "vuex";


export default createStore({
    // описываем данные, которые будут в приложении
    state: {
        likes: 2,
        isAuth: false
    },
    // computed-свойства(кешируемые вычисляемые значения) -- func
    getters: {
        doubleLikes(state) {
            return state.likes * 2
        }
    },
    // чтобы изменять состояние (func, внутри которых мы меняем какое-то поле в state)
    mutations: {
        incrementLikes(state) {
            state.likes += 1
        },
        decrementLikes(state) {
            state.likes -= 1
        }
    },
    // func, внутри себя используют mutations -- side-effects(получать какие-то данные с сервераб вызываем мутацию и сохраняем их в состояние)
    actions: {

    },
    // отдельный стор со всеми ^
    modules: {

    }
})