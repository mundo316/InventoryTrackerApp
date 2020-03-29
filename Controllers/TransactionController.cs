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
    public class TransactionController : ControllerBase
    {
        //get
        [HttpGet]
        public IEnumerable <Transaction> Get()
        {
             Transaction[] transactions = null;
            using (var context = new ApplicationDbContext())
            {
                transactions = context.Transactions.ToArray();
            }
            return transactions;
        }
        //post

        [HttpPost]
        public Transaction Post([FromBody]Transaction transaction)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Transactions.Add(transaction);
                context.SaveChanges();
            }
            return transaction;
        }
        //getbyid(ordernumber)addifneeded
    }
}
//this controller will be used to save and search through past transactions
//use a FILTER with GET to get transactions for specific drivers or weeks
//the information from FOREIGNKEY PART will bring in pricing and do the math to adjust what the diver is charged(.includ4e())


//data analysis would be handled through seperate controllers