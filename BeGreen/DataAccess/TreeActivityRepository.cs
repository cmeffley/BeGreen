using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.DataAccess
{
    public class TreeActivityRepository
    {
        readonly string _connectionString;

        public TreeActivityRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }
    }
}
