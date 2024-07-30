namespace LibraryManagement.Api.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public Author Author { get; set; } = null!;
        public DateTime PublishedDate { get; set; }
        public ICollection<Borrow> Borrows { get; set; } = new List<Borrow>();
    }
}
