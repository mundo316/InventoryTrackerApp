using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InventoryTrackerApp.Data;
using InventoryTrackerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace InventoryTrackerApp.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PartsController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Part> Get()
        {
            Part[] parts = null;
            using (var context = new ApplicationDbContext())
            {
                parts = context.Parts.ToArray();
            }
            return parts;

        }


        [HttpGet]
        public Part GetById(int id)
        {
            using (var context = new ApplicationDbContext())
            {
                return  context.Parts.Where(part=> id== part.id).FirstOrDefault();
            }
            //returns first part that matches the id passed in

        }


        [HttpPost]
        public Part Post([FromBody]Part part)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Parts.Add(part);
                context.SaveChanges();
            }
            return part;
        }
        //talk to Ari about foreign key exceptions if they show up
    }
}

//this controller will affect the total number of parts ON HAND 
//that data will be pulled from here to show 