const fs   = require('fs')
const exec = require('child_process').exec

fs.readdirSync('./assets/').forEach((name) => {
    if(name.indexOf('.js') === -1)
        return

    var path = `${__dirname}/../assets/${name}`

    exec(`uglifyjs --compress --mangle -o ${path} ${path}`, (err, stdout, stderr) => {
        if(err !== null)
            console.log(err)
    })
})