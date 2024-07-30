namespace LibraryManagement.Api.Models
{
    public class Borrow
    {
        public int Id { get; set; }
        public Book Book { get; set; } = null!;
        public User User { get; set; } = null!;
        public DateTime BorrowDate { get; set; }
        public DateTime? ReturnDate { get; set; }
    }
}
