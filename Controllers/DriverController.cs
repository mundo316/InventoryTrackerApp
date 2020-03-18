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
    public class DriversController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Driver> Get()
        {
            Driver[] drivers = null;
            using (var context = new ApplicationDbContext())
            {
                drivers = context.Drivers.Include(d=>d.transactions).ToArray();
            }
            return drivers;
        }

//[HttpGet{'id'}]

        [HttpPost]
        public Driver Post([FromBody]Driver driver)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Drivers.Add(driver);
                context.SaveChanges();
            }
            return driver;
        }
    }
}

//update??