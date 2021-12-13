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
    public class QuizResultsRepository
    {
        readonly string _connectionString;

        public QuizResultsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<QuizResults> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var results = db.Query<QuizResults>(@"Select * From QuizResults");

            return results;
        }

        internal QuizResults GetResultById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From QuizResults
                        Where id = @id";

            var singleResult = db.QueryFirstOrDefault<QuizResults>(sql, new { id });

            return singleResult;
        }
    }
}
