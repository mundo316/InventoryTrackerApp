using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InventoryTrackerApp.Data;
using InventoryTrackerApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
                drivers = context.Drivers.ToArray();
            }
            return drivers;

        }
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