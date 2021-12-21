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
    public class TreeRepository
    {
        readonly string _connectionString;

        public TreeRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<Tree> GetAllTree()
        {
            using var db = new SqlConnection(_connectionString);

            var wholeTree = db.Query<Tree>(@"Select *
                                            From Tree	
                                            Order By id DESC");

            return wholeTree;
        }

        internal Tree GetSingleTreeImage(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Tree
                        Where id = @id";

            var singleImage = db.QueryFirstOrDefault<Tree>(sql, new { id });

            return singleImage;
        }
    }
}
