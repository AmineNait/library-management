using LibraryManagement.Api.Models;
using LibraryManagement.Api.Data;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Api.Repositories
{
    public class BorrowRepository
    {
        private readonly LibraryContext _context;

        public BorrowRepository(LibraryContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Borrow>> GetBorrowsAsync()
        {
            return await _context.Borrows.Include(b => b.Book).Include(b => b.User).ToListAsync();
        }

        public async Task<Borrow?> GetBorrowByIdAsync(int id)
        {
            return await _context.Borrows.Include(b => b.Book).Include(b => b.User).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task AddBorrowAsync(Borrow borrow)
        {
            _context.Borrows.Add(borrow);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateBorrowAsync(Borrow borrow)
        {
            _context.Entry(borrow).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBorrowAsync(int id)
        {
            var borrow = await _context.Borrows.FindAsync(id);
            if (borrow != null)
            {
                _context.Borrows.Remove(borrow);
                await _context.SaveChangesAsync();
            }
        }
    }
}
