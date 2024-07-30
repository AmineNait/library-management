using LibraryManagement.Api.Models;
using LibraryManagement.Api.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryManagement.Api.Repositories
{
    public class AuthorRepository
    {
        private readonly LibraryContext _context;

        public AuthorRepository(LibraryContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Author>> GetAuthorsAsync()
        {
            return await _context.Authors.Include(a => a.Books).ToListAsync();
        }

        public async Task<Author?> GetAuthorByIdAsync(int id)
        {
            return await _context.Authors.Include(a => a.Books).FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task AddAuthorAsync(Author author)
        {
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAuthorAsync(Author author)
        {
            _context.Entry(author).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAuthorAsync(int id)
        {
            var author = await _context.Authors.FindAsync(id);
            if (author != null)
            {
                _context.Authors.Remove(author);
                await _context.SaveChangesAsync();
            }
        }
    }
}
