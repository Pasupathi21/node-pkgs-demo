import { CronJob } from 'cron'

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

let second = "30"
let minute = "16"
let hour = "*"
let day_of_month = "*"
let month = "*"
let day_of_week = "*"

const timeCondition = `${second} ${minute} ${hour} ${day_of_month} ${month} ${day_of_week}`
console.log("timeCondition", timeCondition)
// Cron Instacnce 
const job = new CronJob(
    timeCondition, // running time
    () => {
        console.log("Time", new Date().toLocaleDateString())
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


