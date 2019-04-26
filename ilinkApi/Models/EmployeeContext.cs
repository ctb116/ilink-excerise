using Microsoft.EntityFrameworkCore;

namespace ilinkApi.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options)
            : base(options)
        {

        }

        public DbSet<EmployeeInfo> EmployeeInfo { get; set; }
    }
}