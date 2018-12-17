import React, {Component} from 'react';
import Terminal from 'react-console-emulator';
import './Profile.css';

const commands = {
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: function () {
          return `${Array.from(arguments).join(' ')}`
        }
    },
    cd:{
        description:"Change directory.",
        usage:'cd <directory>',
        fn: function(){
            
        }
    },
    ls:{
        fn: function(args1){
            return `test`
        }
    }
}

export default class Profile extends Component {
    render () {
      return (
        <Terminal
          commands={commands}
          welcomeMessage={'Welcome Crake'}
          promptLabel={'crake@Addam:~$'}
        />
      )
    }
  }