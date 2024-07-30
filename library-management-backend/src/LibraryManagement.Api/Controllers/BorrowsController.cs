using LibraryManagement.Api.Models;
using LibraryManagement.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BorrowsController : ControllerBase
    {
        private readonly BorrowService _borrowService;

        public BorrowsController(BorrowService borrowService)
        {
            _borrowService = borrowService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Borrow>>> GetBorrows()
        {
            var borrows = await _borrowService.GetBorrowsAsync();
            return Ok(borrows);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Borrow>> GetBorrow(int id)
        {
            var borrow = await _borrowService.GetBorrowByIdAsync(id);
            if (borrow == null)
            {
                return NotFound();
            }
            return Ok(borrow);
        }

        [HttpPost]
        public async Task<ActionResult<Borrow>> AddBorrow(Borrow borrow)
        {
            await _borrowService.AddBorrowAsync(borrow);
            return CreatedAtAction(nameof(GetBorrow), new { id = borrow.Id }, borrow);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBorrow(int id, Borrow borrow)
        {
            if (id != borrow.Id)
            {
                return BadRequest();
            }
            await _borrowService.UpdateBorrowAsync(borrow);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBorrow(int id)
        {
            await _borrowService.DeleteBorrowAsync(id);
            return NoContent();
        }
    }
}
