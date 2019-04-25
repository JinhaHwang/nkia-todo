import api from "./todoService";

describe('테스트 교육', function() {
    // let api = null
    // beforeAll(function() {
    //     api = {
    //         getTodoList: function() {
    //             // return request(url, param)
    //             return new Promise((resolve) => {
    //                 const testData = [
    //                     { key: 0, todoText: 'hello', complete: false },
    //                     {
    //                         key: 1,
    //                         todoText: '난 곧 밥을 먹을거야',
    //                         complete: false,
    //                     },
    //                 ]
    //                 resolve(testData)
    //             })
    //         },
    //         addTodo: (param) => {
    //             return new Promise((resolve, reject) => {
    //                 if (param) {
    //                     resolve(true);
    //                 } else {
    //                     reject(new Error('my error'))
    //                 }
    //             })
    //         },
    //     }
    // })

    it('should api.getTodoList().length to be 2', async function() {
        const list = await api.getTodoList()
        expect(list.length).toBe(2)
        expect(list).toMatchObject([
            { key: 0, todoText: 'hello', complete: false },
            { key: 1, todoText: '난 곧 밥을 먹을거야', complete: false },
        ])

        expect(list[0].todoText).toMatch('hello')
        expect(list[1].todoText).toMatch('난 곧 밥을 먹을거야')
    })

    describe('addTodo Test', function() {
        // it('should api.addTodo() rejected', async function() {
        //
        // })
        it('파라미터가 있으면 성공', async function() {
            await expect(api.addTodo(3)).resolves.toBe(true)
        });

        it('파라미터가 없으면 에러', async function () {
            await expect(api.addTodo()).rejects.toThrow('my error')
        });

        it('캐치된 에러 테스트는 아래처럼', async function () {
            try {
                await api.addTodo()
            } catch (e) {
                expect(e).toEqual(new Error('my error'))
            }
        });
    });

})
