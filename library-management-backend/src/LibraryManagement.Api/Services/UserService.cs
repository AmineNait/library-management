using LibraryManagement.Api.Models;
using LibraryManagement.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LibraryManagement.Api.Services
{
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User?> Authenticate(string username, string password)
        {
            return await _userRepository.Authenticate(username, password);
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _userRepository.GetUsersAsync();
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }

        public async Task<User> AddUserAsync(User user)
        {
            await _userRepository.AddUserAsync(user);
            return user;
        }

        public async Task<User> UpdateUserAsync(User user)
        {
            await _userRepository.UpdateUserAsync(user);
            return user;
        }

        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteUserAsync(id);
        }
    }
}
