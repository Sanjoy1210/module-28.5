const books = ['Eloquent JavaScript', 'JavaScript: The Good Parts', 'Learn JavaScript VISUALLY', 'JavaScript: The Definitive Guide', 'You Don\’t Know JS', 'Beginning JavaScript', 'Secrets of the JavaScript Ninja', 'Effective JavaScript'];

let outputBooks = [];
for (const book of books) {
  if (book.toLowerCase().includes('javascript')) {
    outputBooks.push(book);
  }
}

console.log(outputBooks);