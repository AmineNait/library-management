using LibraryManagement.Api.Models;
using LibraryManagement.Api.Repositories;

namespace LibraryManagement.Api.Services
{
    public class BookService
    {
        private readonly BookRepository _bookRepository;

        public BookService(BookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<IEnumerable<Book>> GetBooksAsync()
        {
            return await _bookRepository.GetBooksAsync();
        }

        public async Task<Book> GetBookByIdAsync(int id)
        {
            return await _bookRepository.GetBookByIdAsync(id) ?? throw new KeyNotFoundException("Book not found.");
        }

        public async Task<Book> AddBookAsync(Book book)
        {
            await _bookRepository.AddBookAsync(book);
            return book;
        }

        public async Task<Book> UpdateBookAsync(Book book)
        {
            await _bookRepository.UpdateBookAsync(book);
            return book;
        }

        public async Task DeleteBookAsync(int id)
        {
            await _bookRepository.DeleteBookAsync(id);
        }
    }
}
