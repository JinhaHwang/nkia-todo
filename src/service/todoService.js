
const api = {
    getTodoList: function() {
        return new Promise((resolve) => {
            const testData = [
                { key: 0, todoText: 'hello', complete: false },
                {
                    key: 1,
                    todoText: '난 곧 밥을 먹을거야',
                    complete: false,
                },
            ]
            resolve(testData)
        })
    },
    addTodo: (param) => {
        return new Promise((resolve, reject) => {
            if (param) {
                resolve(true);
            } else {
                reject(new Error('my error'))
            }
        })
    },
}

export default api;
