const fs = require('fs/promises')
const { nanoid } = require('nanoid')

const path = require('path')

const contactsPath = path.join(__dirname, 'db/contacts.json')

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath)
    return JSON.parse(contacts)
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts()

    const resultContact = contacts.find((contact) => contact.id === contactId)

    return resultContact || null
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex((contact) => contact.id === contactId)
    if (index === -1) {
      return null
    }
    const [result] = contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts()
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
