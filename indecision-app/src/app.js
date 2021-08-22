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

const appRoot = document.getElementById('app');

const renderIndecisionApp = () => {

    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>You have {app.options.length} options.</p> : <p>No options, sorry.</p>}
            
                <button onClick = {removeOptions}>Remove All</button>
            
            <ol>
                <li>{<p>Item {app.options[0]}</p>}</li>
                <li>{<p>Item {app.options[1]}</p>}</li>
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