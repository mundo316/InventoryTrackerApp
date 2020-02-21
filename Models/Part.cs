using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Part
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int id {get; set; }
        public string modelNo { get; set; }
        public string partName { get; set; }
        public double price { get; set; }
        public int onHand { get; set; }
    }
}