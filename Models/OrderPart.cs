using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace InventoryTrackerApp.Models
{
    public class OrderPart
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id { get; set; }

        public int transactionId { get; set; }
        [ForeignKey("transactionId")]
        public Transaction transaction { get; set; }

        public int partId { get; set; }
        [ForeignKey("partId")]
        public Part part { get; set; }
        
    }
}