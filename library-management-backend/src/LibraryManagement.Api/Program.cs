using LibraryManagement.Api.Data;
using Microsoft.EntityFrameworkCore;
using LibraryManagement.Api.Services;
using LibraryManagement.Api.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Ajouter la configuration CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        corsBuilder =>
        {
            corsBuilder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
        });
});

// Add services to the container.
builder.Services.AddDbContext<LibraryContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<BookService>();
builder.Services.AddScoped<AuthorService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<BorrowService>();

builder.Services.AddScoped<BookRepository>();
builder.Services.AddScoped<AuthorRepository>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<BorrowRepository>();

builder.Services.AddControllers();

var app = builder.Build();

// Utiliser CORS
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.MapControllers();

app.Run();
