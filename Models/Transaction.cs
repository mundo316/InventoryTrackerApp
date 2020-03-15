using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace InventoryTrackerApp.Models
{
    public class Transaction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id { get; set; }
        
        public int driverId { get; set; }
        [ForeignKey("driverId")]
        public Driver driver { get; set; }

        public ApplicationUser User { get; set; }
        
        public DateTime date { get; set; }

        [InverseProperty("transaction")]
        public List<OrderPart> orderParts { get; set; }

    }
}