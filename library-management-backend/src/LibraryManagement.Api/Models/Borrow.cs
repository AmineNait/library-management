namespace LibraryManagement.Api.Models
{
    public class Borrow
    {
        public int Id { get; set; }
        public int BookId { get; set; } // Ajoutez cette ligne
        public Book Book { get; set; } = null!;
        public int UserId { get; set; } // Ajoutez cette ligne
        public User User { get; set; } = null!;
        public DateTime BorrowDate { get; set; }
        public DateTime? ReturnDate { get; set; }
    }
}
