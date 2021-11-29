import React, { Component } from 'react'

class Greetings extends Component {
    
    render() {

        const {lang} = this.props
        let text = ''
        if (lang == 'en') {
            text = 'Hello'
        }
        else if (lang == 'es') {
            text = 'Hola'
        }
        else if (lang == 'de') {
            text = 'Hallo'
        }
        else if (lang == 'fr') {
            text = 'helo'
        }

        return (
            <div>
                {text}
            </div>
        )
    }
}

export default Greetings