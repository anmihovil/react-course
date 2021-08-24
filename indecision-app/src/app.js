console.log('Testing script file!');

// JSX - JavaScript XML

const app = {
    title: 'Just another title',
    subtitle: 'Another boring text for testing purposes.',
    options: ['One', 'Two']
};

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if(option) {
        app.options.push(option);
        console.log(option);
        event.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const removeOptions = () => {
    if(app.options.length) {
        app.options = [];
        renderIndecisionApp();
    }
}

const optionChoice = () => {
    const randNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderIndecisionApp = () => {

    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>You have {app.options.length} options.</p> : <p>No options, sorry.</p>}
            
                <button disabled = {app.options.length === 0} onClick = {optionChoice}>What to do?</button>
                <button onClick = {removeOptions}>Remove All</button>

                {
                /*
                    numbers.map((number) => {
                        return <p key={number}>Number: {number * 2}</p>
                    })
                    // <li>{<p>Item: {app.options[0]}</p>}</li>
                    // <li>{<p>Item: {app.options[1]}</p>}</li>
                */
                }
            <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>Item: {item}</li>
                        console.log(option);
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);

}

renderIndecisionApp();