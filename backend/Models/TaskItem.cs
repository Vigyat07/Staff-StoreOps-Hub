using System; 
using System.ComponentModel.DataAnnotations.Schema;

namespace BelcStaffStoreOpsHub.Api.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public string Status { get; set; } = "Pending";
        public DateTime DueDate { get; set; } = DateTime.Now.AddDays(7);

        public int AssignedToId { get; set; }
        [ForeignKey("AssignedToId")]
        public Employee? AssignedTo { get; set; }

        public int StoreId { get; set; }
        [ForeignKey("StoreId")]
        public Store? Store { get; set; }
    }
}
