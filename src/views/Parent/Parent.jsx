import React from 'react'
import Child from '../Child/Child'

function Parent() {
    const users = [
        { "name": "Person_1", "age": 28, "salary": 64507 },
        { "name": "Person_2", "age": 41, "salary": 105904 },
        { "name": "Person_3", "age": 33, "salary": 34422 },
        { "name": "Person_4", "age": 57, "salary": 84636 },
        { "name": "Person_5", "age": 39, "salary": 105673 },
        { "name": "Person_6", "age": 21, "salary": 70670 },
        { "name": "Person_7", "age": 35, "salary": 113390 },
        { "name": "Person_8", "age": 40, "salary": 117987 },
        { "name": "Person_9", "age": 46, "salary": 93510 },
        { "name": "Person_10", "age": 42, "salary": 98133 },
        { "name": "Person_11", "age": 32, "salary": 62456 },
        { "name": "Person_12", "age": 49, "salary": 52003 },
        { "name": "Person_13", "age": 40, "salary": 93474 },
        { "name": "Person_14", "age": 34, "salary": 68327 },
        { "name": "Person_15", "age": 51, "salary": 101545 },
        { "name": "Person_16", "age": 39, "salary": 49719 },
        { "name": "Person_17", "age": 55, "salary": 54847 },
        { "name": "Person_18", "age": 27, "salary": 61266 },
        { "name": "Person_19", "age": 32, "salary": 99991 },
    ]

    return (
        <Child users={users} />
    )
}

export default Parent
