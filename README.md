# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/R83H5WqWzASgAkXT4FDBJID7FxLCn3

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/UjkCdlBMoMWV0WBJn9gU56JfeD4B5G

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/Iy2Yk5qzflwHW1BkG1D4psDxiPdzWE

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/sZ6l78nq2lRCOUzboRl3cAlYO8xUpR
