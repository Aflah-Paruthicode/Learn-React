
const parent = React.createElement('div',{id:'parent'},
    [
        React.createElement('div',{id:'child1'},
        [
            React.createElement('h1',{},'im an h1 tag from child1'),
            React.createElement('h2',{},'im an h2 tag from child1')
        ]
    ),
        React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{},'im an h1 tag from child2'),
                React.createElement('h2',{},'im an h2 tag from child2')
            ]
        )
]
)


const text = React.createElement('h1', { id: 'jd' }, 'this message from react')
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)