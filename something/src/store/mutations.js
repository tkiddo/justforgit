const mutations = {
    getList(state, data) {
        state.tableData = data;
    },
    addItem(state, data) {
        state.tableData.push(data);
    },
    delItem(state, id) {
        state.tableData.splice(id, 1);
    },
    getResult(state, data) {
        state.tableData = data;
    },
    showDialog(state) {
        state.dialogVisible = true;
    },
    hideDialog(state) {
        state.dialogVisible = false;
    }
}

export default mutations