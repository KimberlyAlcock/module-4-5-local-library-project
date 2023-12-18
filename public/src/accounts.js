function findAccountById(accounts, id) {
  let foundAccount = accounts.find((account) => account.id === id); // pass in the accounts array
  // find on the id
  return foundAccount; // return the account name for the given id
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts.sort((nameA, nameB) => // pass in the accounts array
  (nameA.name.last > nameB.name.last ? 1 : -1)); // sort on the last name by comparing nameA with nameB and if nameA is first give it a value of 1, and if B is first give it a value of -1
  return sortedAccounts; // return the account name for the given id
}

function getAccountFullNames(accounts) {
  return accounts.map((account) => { // parse an array into a new array using the map function
    return `${account.name.first} ${account.name.last}`; //join the first name and last name using template literals 
  });
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
