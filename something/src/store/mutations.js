const mutations = {
    getList(state, data) {
        state.tableData = data;
    },
    addItem(state, data) {
        state.tableData.push(data);
    },
    delItem(state, id) {
        state.tableData.splice(id, 1);
    }
}

export default mutations