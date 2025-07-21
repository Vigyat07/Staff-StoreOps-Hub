using BelcStaffStoreOpsHub.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BelcStaffStoreOpsHub.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Employee> Employees { get; set; }
    public DbSet<Store> Stores { get; set; }
    public DbSet<TaskItem> Tasks { get; set; }
}
