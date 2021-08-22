let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const subOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne} className="btnAdd">+1</button>
            <button onClick={subOne} className="btnSub">-1</button>
            <button onClick={reset} className="btnRes">Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();