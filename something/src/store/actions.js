const actions = {
    getData(context, data) {
        context.commit("getList", data);
    },
    addItem(context, data) {
        context.commit("addItem", data);
    },
    delItem(context, id) {
        context.commit("delItem", id);
    }
}

export default actions