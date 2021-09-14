<h1 align="center">
<img width="520" src="media/logo.png" alt="Chalk">
</h1>

<h1 align="center">CREACMD</h1>

<p align="center">
👨‍⚕️ 🔬 🚀
<p>

<p align="center">
    <a href="https://github.com/mrwaks/creacmd/blob/main/license" target="_blank">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="creacmd is released under the MIT license." />
    </a>
    <a href="https://www.npmjs.com/package/creacmd" target="_blank">
        <img src="https://img.shields.io/npm/v/creacmd.svg" alt="Current npm package version." />
    </a>
    <a href="https://www.youtube.com/watch?v=mpMg1upld0w" target="_blank">
        <img src="https://img.shields.io/badge/terminator-approved-red" alt="Current npm package version." />
    </a>
<p>

<p align="center"><strong>Creacmd allows you to convert your scripts into a command line.</strong></p>

<p align="center">🚀 Imagine being able to create a command line linked to one of your scripts, in a fraction of a second</p>

<p align="center">😎 This is now possible with only three words in your terminal</p>

<p align="center">🚀 Yes you read that right, in just three words ! 🚀</p>

<br>

<p align="center">Compatible with Python, Javascript and Shell Bash (for the moment).</p>

<br>

<h1>What’s In This Document</h1>

- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#convert">creacmd</a>
- <a href="#del">delcmd</a>
- <a href="#contribute">How to Contribute</a>
- <a href="#license">License</a>
- <a href="#thanks">Thanks</a>

<h1 id="installation">👷 Installation</h1>

<p>To install creacmd, run this command line in your terminal:</p>

    npm install creacmd -g

<h1 id="usage">🎓  Usage</h1>

<p>To start create a script in .js, .py or even .sh:</p>

<p>(For our example we create a hello.js file)</p>

    function helloWorld() ({
        console.log("Hello World !");
    })();

<h1 id="convert">🔬 creacmd</h1>

<p>Then... convert your script to a command line by running the command "creacmd", followed by the script to convert, followed by the command name you wish:</p>

    creacmd hello.js hello

    🚀 Congratulations ! The hello command is now functional !

<p>Test your new command line !</p>

    hello

    Hello World !

<p>🥳 🎈 Congratulations you have created your first command line with creacmd !</p>

<h1 id="del">🗑️ delcmd</h1>

<p>At any time you can delete a command line that you created with the "delcmd" command followed by the name of the command that you want to delete:</p>

    delcmd hello

    🚀 The hello command, successfully deleted !

<p>Now if you reissue the "hello" command in the terminal:</p>

    hello

    command not found: hello

<h1 id="contribute">🤝 How to Contribute</h1>

<p>Whether you want to help fix bugs, improve documentation or spread the word, it will be with great pleasure 💪 ❤️</p>

<p>Do not hesitate to take a look at the <a href="https://github.com/mrwaks/creacmd" target="_blank">github repository of creacmd</a>.</p>

<p>For any questions or suggestions do not hesitate to write to<a href="mailto: rudy.waks@gmail.com"> rudy.waks@gmail.com</a>.</p>

<h1 id="license">📝 License</h1>

<p>Licensed under <a href="https://github.com/mrwaks/creacmd/blob/main/license" target="_blank">the MIT License</a>.</p>

<h1 id="thanks">❤️ Thanks</h1>

<p>creacmd thanks you in advance for its use, and we hope to satisfy you !</p>