using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.DataAccess
{
    public class UsersRepository
    {
        readonly string _connectionString;

        public UsersRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }
    }
}
