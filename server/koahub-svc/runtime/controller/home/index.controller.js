'use strict';

module.exports = class extends koahub.controller {

    async _initialize() {
        console.log('_initialize');
    }

    async index() {

        const version = process.version;
        const time = new Date();
        const num = this.add(1, 2);

        this.view(`<!doctype html>
<html>
<head>
    <title>Hello Koahub.js</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <style>
        body { margin: 1em; }
        h4 { font-size: 80%; color: #777; }
    </style>
</head>
<body>
<main>
    <h1>Hello Koahub.js!</h1>
    <h4>Running on Node ${version}; ${time}</h4>
    <h4>Calc 1 + 2 = ${num}</h4>
</main>
</body>
</html>`);
    }
};