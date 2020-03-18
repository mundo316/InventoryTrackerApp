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
    public class DriverPartsController : ControllerBase
    {
        //this controller will list the parts and prices of the parts the drivers take out
         [HttpGet]
        public IEnumerable<OrderPart> Get()
        {
            OrderPart[] orderParts = null;
            using (var context = new ApplicationDbContext())
            {
                orderParts = context.OrderParts
                    .Include(op => op.transaction)
                    .Include(op => op.part)
                    .ToArray();
            }
            return orderParts;
        }


         [HttpPost]
        public OrderPart Post([FromBody]OrderPart orderPart)
        {
            using (var context = new ApplicationDbContext())
            {
                context.OrderParts.Add(orderPart);
                Part bought = context.Parts.Where(part=> part.id== orderPart.partId).FirstOrDefault();
                bought.onHand -= 1;//in the future make hius orderpart.count instead of 1
                context.SaveChanges();
            }
            return orderPart;
        }
    }
}