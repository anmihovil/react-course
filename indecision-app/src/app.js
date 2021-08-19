console.log('Testing script file!');

// JSX - JavaScript XML

const data = {
    title: 'Just another title',
    subtitle: 'Another boring text for testing purposes.',
    options: ['Beer', 'Coke']
};

const template = ( 
    <div>
        <h1>{data.title}</h1>
        {data.subtitle && <p>{data.subtitle}</p>}
        {data.options.length > 0 ? <p>Here are your options.</p> : <p>No options, sorry.</p>}
        <ol>
            <li>{<p>Item {data.options[0]}</p>}</li>
            <li>{<p>Item {data.options[1]}</p>}</li>
        </ol>
    </div>
);

// Challenge 1

const user = {
    name: 'Antonio',
    age: 51,
    location: 'Korčula'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}
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


const appRoot = document.getElementById('app');

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
