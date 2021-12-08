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
    public class IdeasRepository
    {
        readonly string _connectionString;

        public IdeasRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<Ideas> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var ideas = db.Query<Ideas>(@"Select * From Ideas");

            return ideas;
        }
    }
}
