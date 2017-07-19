const actions = {
    getData(context, data) {
        context.commit("getList", data);
    },
    addItem(context, data) {
        context.commit("addItem", data);
    },
    delItem(context, id) {
        context.commit("delItem", id);
    },
    getResult(context, data) {
        context.commit('getResult', data);
    },
    showDialog(context) {
        context.commit('showDialog')
    },
    hideDialog(context) {
        context.commit('hideDialog')
    }
}

export default actions