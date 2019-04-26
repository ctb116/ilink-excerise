using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ilinkApi.Models;

namespace ilinkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeeController(EmployeeContext context)
        {
            _context = context;

            if (_context.EmployeeInfo.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all EmployeeInfo.
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Alex Baldwin", Designation = "Sports Announcer", Salary = 75000, Address = "1 River Road" });
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Abigail Cocoroco", Designation = "Biologist", Salary = 80000, Address = "345 Pierre Ave" });
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Harvey Everclear", Designation = "Doctor", Salary = 100000, Address = "911 Medical Drive" });
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Penny Rekt", Designation = "Teacher", Salary = 60000, Address = "897 Trailer Road" });
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Emily Bruih", Designation = "Fashion Designer", Salary = 35000, Address = "2 Willow Lane" });
                _context.EmployeeInfo.Add(new EmployeeInfo { Name = "Gus Pot", Designation = "Bartender", Salary = 30000, Address = "600 Stardrop Way" });
                _context.SaveChanges();
            }
        }
        // GET: api/employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeInfo>>> GetEmployeeInfos()
        {
            return await _context.EmployeeInfo.ToListAsync();
        }
    }
}