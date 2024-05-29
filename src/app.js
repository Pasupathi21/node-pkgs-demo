import { CronJob } from 'cron'
import { exec } from 'child_process'
import path from 'path'

/**
 * field          allowed values
-----          --------------
second         0-59
minute         0-59
hour           0-23
day of month   1-31
month          1-12 (or names, see below)
day of week    0-7 (0 or 7 is Sunday, or use names)
*/

let second = "*/10"
let minute = "*"
let hour = "*"
let day_of_month = "*"
let month = "*"
let day_of_week = "*"

const timeCondition = `${second} ${minute} ${hour} ${day_of_month} ${month} ${day_of_week}`
console.log("timeCondition", timeCondition)
console.log("DIR NAME", __dirname)
// Cron Instacnce 
const job = new CronJob(
    timeCondition, // running time
    function() {
        console.log("Time", new Date().toLocaleDateString())
        exec(`bash ${path.resolve(__dirname, 'script', 'bash.sh')}`, (err, stdout, stderr) => console.log('stdout >>>', stdout))
    }, // executable fn
    () => console.log("first cron job completed"), // completion process
    true, // auto start without calling start method
    'Asia/Kolkata'
)

// Cron static
// const jobTwo = CronJob.from({
//     cronTime: '* * * * * *',
//     onTick: () => {
//         console.log("Second cron", new Date().toLocaleDateString())
//     },
//     start: true,
//     timeZone: 'Asia/Kolkata'
// })


