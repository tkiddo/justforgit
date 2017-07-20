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
    updateItem(state, item) {
        let list = state.tableData;
        for (let i = 0; i < list.length; i++) {
            if (item._id == list[i]._id) {
                list.splice(i, 1, item);
            }
        }
        state.tableData = list;
    },
    showDialog(state) {
        state.dialogVisible = true;
    },
    hideDialog(state) {
        state.dialogVisible = false;
    }
}

export default mutations