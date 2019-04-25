import axios from "axios";

const api = {
    getTodoList: async function() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('실패했어요.')
        }
        // return new Promise((resolve) => {
        //     const testData = [
        //         { key: 0, todoText: 'hello', complete: false },
        //         {
        //             key: 1,
        //             todoText: '난 곧 밥을 먹을거야',
        //             complete: false,
        //         },
        //     ]
        //     resolve(testData)
        // })
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
