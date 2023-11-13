require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
})

const main = async () => {
    // get emails and names for today
    const today = new Date()
    const query = `SELECT A,B WHERE MONTH(C) = ${today.getMonth()} and DAY(C) = ${today.getDate()}`
    const res = await fetch(`https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}/gviz/tq?tqx=out:csv&tq=${encodeURI(query)}`)
    const rows = (await res.text()).replace(/"/g, '').split('\n')
    rows.shift()
    console.log(rows)

    // send mail to each person
    for (const row of rows) {
        const [email, name] = row.split(',')
        const info = await transporter.sendMail({
            from: `"Andre's Email Sender" <${process.env.EMAIL}>`, // sender address
            to: email, // list of receivers
            subject: `Happy Birthday ${name} from Andre`, // Subject line
            text: `Happy Birthday, ${name}!`, // plain text body
            html: `<h1>Happy Birthday, ${name}!</h1>`, // html body
        });
        console.log(`Message sent: ${info.messageId}`)
    }
}

main().catch(console.error)