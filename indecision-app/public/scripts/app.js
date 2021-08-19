'use strict';

console.log('Testing script file!');

// JSX - JavaScript XML

var data = {
    title: 'Just another title',
    subtitle: 'Another boring text for testing purposes.',
    options: ['Beer', 'Coke']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        data.title
    ),
    data.subtitle && React.createElement(
        'p',
        null,
        data.subtitle
    ),
    data.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your options.'
    ) : React.createElement(
        'p',
        null,
        'No options, sorry.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            React.createElement(
                'p',
                null,
                'Item ',
                data.options[0]
            )
        ),
        React.createElement(
            'li',
            null,
            React.createElement(
                'p',
                null,
                'Item ',
                data.options[1]
            )
        )
    )
);

// Challenge 1

var user = {
    name: 'Antonio',
    age: 51,
    location: 'Korčula'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var subOne = function subOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: addOne, className: 'btnAdd' },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: subOne, className: 'btnSub' },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset, className: 'btnRes' },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
