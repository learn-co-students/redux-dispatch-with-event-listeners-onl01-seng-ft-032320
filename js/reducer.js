// add code snippets from README
let state = { count: 0 }
let action = { type: "INCREASE_COUNT" }

function reducer(state, action) {
    switch (action.type) {

        case "INCREASE_COUNT":
            return { count: state.count + 1 }

        default:
            return state;
    }

}
// reducer({ count: 0 }, { type: 'INCREASE_COUNT' })

function dispatch(action) {

    state = reducer(state, action)
    render()

}

function render() {

    let container = document.getElementById("container");
    container.textContent = state.count

}

let button = document.getElementById('button');

button.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT' })
})