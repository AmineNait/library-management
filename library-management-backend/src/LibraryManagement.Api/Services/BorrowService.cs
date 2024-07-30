using LibraryManagement.Api.Models;
using LibraryManagement.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryManagement.Api.Services
{
    public class BorrowService
    {
        private readonly BorrowRepository _borrowRepository;

        public BorrowService(BorrowRepository borrowRepository)
        {
            _borrowRepository = borrowRepository;
        }

        public async Task<IEnumerable<Borrow>> GetBorrowsAsync()
        {
            return await _borrowRepository.GetBorrowsAsync();
        }

        public async Task<Borrow?> GetBorrowByIdAsync(int id)
        {
            return await _borrowRepository.GetBorrowByIdAsync(id);
        }

        public async Task<Borrow> AddBorrowAsync(Borrow borrow)
        {
            await _borrowRepository.AddBorrowAsync(borrow);
            return borrow;
        }

        public async Task<Borrow> UpdateBorrowAsync(Borrow borrow)
        {
            await _borrowRepository.UpdateBorrowAsync(borrow);
            return borrow;
        }

        public async Task DeleteBorrowAsync(int id)
        {
            await _borrowRepository.DeleteBorrowAsync(id);
        }
    }
}
