using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
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
    }
}
