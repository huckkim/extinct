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
        }
    },
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: function () {
            return `${Array.from(arguments).join(' ')}`
        }
    },
    ls:{
        description:'List all directories',
        usage: 'ls',
        fn: function(arg1){
            if(arg1 === '-a')
                return `.User.txt .keyPass.txt home trash misc paradice.exe`
            else
                return `home trash misc paradice.exe`
        }
    },
    run:{
        description:'Runs executable',
        usage:'run <executable>',
        fn:function(exec, user, pass){
            if(exec === 'paradice.exe'){
                if(user === 'red-necked-crake' && pass ==='blysspluss'){
                    return 'Burhinus grallarius'
                }
                else{
                    return 'invalid credentials'
                }
            }
            else
                return 'Unknown .exe'
        }
    },
    cat:{
        description:'Reads content of text files',
        usage:'cat <filename>',
        fn:function(file){
            if(file === '.User.txt'){
                return '75 73 65 72 3a 72 65 64 2d 6e 65 63 6b 65 64 2d 63 72 61 6b 65'
            }
            else if(file ==='.keyPass.txt'){
                return 'MIIBIjANBgkqhkiG9w0BAQEFA0mQV8odb6qgdLT0Tk1PsbviMMt+SlABLkGGl9uUrzOjQLryJmFWsXxBGFd4emY'
            }
        }
    },
    decrypt:{
        desciption: 'Decrypts given RSA string',
        usage:'decrypt <key>',
        fn:function(arg1){
            if(arg1 === 'MIIBIjANBgkqhkiG9w0BAQEFA0mQV8odb6qgdLT0Tk1PsbviMMt+SlABLkGGl9uUrzOjQLryJmFWsXxBGFd4emY'){
                return 'pass:blysspluss'
            }
            else{
                return 'invalid key'
            }
        }
    }
}
 
export default class CTerminal extends React.Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'type \'help\' to begin '}
        promptLabel={'crake@addam:~$'}
      />
    )
  }
}