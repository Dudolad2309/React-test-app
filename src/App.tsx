import React from 'react';

const array: (string | number)[] = [12, 'd', 5, 'h', 'w', 'w', 1, 'a', 'b', 2];

const filterArray = (list: (string | number)[]) => {
    for (let i = 0; i <= list.length; i++) {
        if (typeof list[i] === "string") {
            list.splice(i, 1);
            i--
        }
    }
    return list
}

filterArray(array)
console.log(array);


function App() {
    return (
        <>
            Hello
        </>
    );
}

export default App;
