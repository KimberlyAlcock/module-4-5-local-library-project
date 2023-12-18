function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  // pass in the array
  // filter on id
  return foundAuthor;// return the author name for the given id
  
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id); // pass in the books array
  // filter on id
  return foundBook;// return the book name for the given id
  
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
