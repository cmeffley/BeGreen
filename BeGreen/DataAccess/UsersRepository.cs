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
    public class UsersRepository
    {
        readonly string _connectionString;

        public UsersRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<Users> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allUsers = db.Query<Users>(@"Select * From Users");

            return allUsers;
        }

        internal Users GetUserById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Users
                        Where id = @id";

            var singleUser = db.QueryFirstOrDefault<Users>(sql, new { id });

            return singleUser;
        }

        internal Users GetUserByFbId(string fbUserId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Users
                        Where fbUserId = @fbUserId";

            var fbSingleUser = db.QueryFirstOrDefault<Users>(sql, new { fbUserId });

            return fbSingleUser;
        }

        internal void AddNewUser(Users user)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Users]
                                   ([firstName]
                                   ,[lastName]
                                   ,[fbUserId]
                                   ,[isAdmin])
                                Output inserted.id
                             VALUES
                                   (@firstName, @lastName, @fbUserId, @isAdmin)";

            var id = db.ExecuteScalar<int>(sql, user);

            user.Id = id;
        }
    }
}
