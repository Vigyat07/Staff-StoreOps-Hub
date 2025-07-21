// BelcStaffStoreOpsHub.Api.Models.Task.cs
using System; // Required for DateTime
using System.ComponentModel.DataAnnotations.Schema; // For [ForeignKey]

namespace BelcStaffStoreOpsHub.Api.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string Status { get; set; } = "Pending"; // Matches frontend statuses like 'Pending', 'In Progress', 'Done', 'Overdue'
        public DateTime DueDate { get; set; } = DateTime.Now.AddDays(7); // Default due date, e.g., a week from now

        // Foreign key to the Employee who is assigned this task
        public int AssignedToId { get; set; }
        // Navigation property for Entity Framework Core
        [ForeignKey("AssignedToId")]
        public Employee? AssignedTo { get; set; }

        // Foreign key to the Store this task belongs to
        public int StoreId { get; set; }
        // Navigation property for Entity Framework Core
        [ForeignKey("StoreId")]
        public Store? Store { get; set; }
    }
}