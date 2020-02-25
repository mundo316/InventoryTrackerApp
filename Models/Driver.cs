using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryTrackerApp.Models
{
public class Driver 
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id {get; set; }
        public string truckNo { get; set; }
        public string driverName { get; set; }

        public string locationCode { get; set; }
    }
}