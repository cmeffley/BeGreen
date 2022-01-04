using BeGreen.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BeGreen.DataAccess
{
    public class ResourcesRepository
    {

        readonly string _connectionString;

        public ResourcesRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }
        internal IEnumerable<Resources> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allResources = db.Query<Resources>(@"Select * From Resources");

            return allResources;
        }
    }
}
