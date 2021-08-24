'use strict';

console.log('Testing script file!');

// JSX - JavaScript XML

var app = {
    title: 'Just another title',
    subtitle: 'Another boring text for testing purposes.',
    options: ['One', 'Two']
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        console.log(option);
        event.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

var removeOptions = function removeOptions() {
    if (app.options.length) {
        app.options = [];
        renderIndecisionApp();
    }
};

var optionChoice = function optionChoice() {
    var randNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderIndecisionApp = function renderIndecisionApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'You have ',
            app.options.length,
            ' options.'
        ) : React.createElement(
            'p',
            null,
            'No options, sorry.'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: optionChoice },
            'What to do?'
        ),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    'Item: ',
                    item
                );
                console.log(option);
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
