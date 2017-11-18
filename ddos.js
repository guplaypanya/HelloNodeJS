const async = require('async')

const fs = require('fs')

const request = require('request')

const cheerio = require('cheerio')

const urls = [
    {
        name: 'zuka',
        url: 'http://rov.wikia.com/wiki/zuka'
    },
    {
        name: 'murad',
        url: 'http://rov.wikia.com/wiki/murad'
    },
    {
       name: 'preya',
       url: 'http://rov.wikia.com/wiki/preya'
    }
]

let i = 0

const queue = async.queue((task, callback) =>{
    request(task.url, (error, response, body)=>{
        $ = cheerio.load(body)
        const text = $('#mw-content-text p').text()
        fs.writeFile(task.name + ".txt",text, (err)=>{
            if(err) {
                console.log(err)
                callback()
            }
            console.log("Save file complete")
            callback()
        })
    })
}, 1)

queue.drain = () => {
    console.log("All precess complete")
}
queue.push(urls)