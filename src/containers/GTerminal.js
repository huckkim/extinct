import React from 'react'
import Terminal from 'react-console-emulator'
 
const commands = {
    info:{
        description:'Gives specific information for commands',
        usage:'info <command>',
        fn:function(arg1){
            if(arg1 === 'echo')
                return 'echo <string>'
            else if(arg1 ==='ls'){
                return 'ls <-a> *use -a to show all directories including hidden ones'
            }
            else if(arg1 ==='run'){
                return 'run <executable> <user> <password> *note user/password must be a string'
            }
            else if(arg1 ==='cat'){
                return `cat <filename>`
            }
            else if(arg1 ==='decrypt'){
                return 'decrypt <key>'
            }
            else if(arg1 ==='help'){
                return 'help'
            }
            else if(arg1 ==='convert'){
                return 'convert <hex> *do not include 0x delimiter'
            }
            else if(arg1 ==='clear'){
                return 'clear'
            }
            else if(arg1 ==='info'){
                return 'convert <command>'
            }
        }
    },
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: function () {
            return `You do not have sufficent access for that command`
        }
    },
    ls:{
        description:'List all directories',
        usage: 'ls',
        fn: function(arg1){
            return `You do not have sufficent access for that command`
        }
    },
    run:{
        description:'Runs executable',
        usage:'run <executable>',
        fn:function(exec, user, pass){
            return `You do not have sufficent access for that command`
        }
    },
    cat:{
        description:'Reads content of text files',
        usage:'cat <filename>',
        fn:function(file){
            return `You do not have sufficent access for that command`
        }
    },
    decrypt:{
        description: 'Decrypts given RSA string',
        usage:'decrypt <key>',
        fn:function(arg1){
            return `You do not have sufficent access for that command`
        }
    },
    convert:{
        description: 'Convert a hexadecimal number to ascii',
        usage:'convert <hex>',
        fn:function(arg1){
            return `You do not have sufficent access for that command!`
        }
    }
}
 
export default class CTerminal extends React.Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'type \'help\' to begin '}
        promptLabel={'guest@addam:~$'}
      />
    )
  }
}