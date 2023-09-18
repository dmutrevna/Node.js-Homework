const { program } = require('commander')
const contacts = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      return console.table((allContacts = await contacts.listContacts()))

    case 'get':
      return console.log((oneContact = await contacts.getContactById(id)))

    case 'add':
      return console.log(
        (newContact = await contacts.addContact({ name, email, phone }))
      )

    case 'remove':
      return console.log((deleteContact = await contacts.removeContact(id)))

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')

program.parse()

const argv = program.opts()

invokeAction(argv)
