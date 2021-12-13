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

        internal Ideas GetById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From Ideas
                        Where id = @id";

            var userIdea = db.QueryFirstOrDefault<Ideas>(sql, new { id });

            return userIdea;
        }

        internal void AddIdea(Ideas idea)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[Ideas]
                                   ([sharedIdea]
                                   ,[image]
                                   ,[userFirstName]
                                   ,[userId])
		                        output inserted.Id
                            VALUES
                                (@sharedIdea, @image, @userFirstName, @userId)";
            var id = db.ExecuteScalar<int>(sql, idea);

            idea.Id = id;
        }

        internal object Update(int id, Ideas idea)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"UPDATE [dbo].[Ideas]
                           SET [sharedIdea] = @sharedIdea
                              ,[image] = @image
                              ,[userFirstName] = @userFirstName
                              ,[userId] = @userId
                           Output inserted.*
                              Where Id = @id";
            idea.Id = id;
            var updatedIdea = db.QuerySingleOrDefault<Ideas>(sql, idea);

            return updatedIdea;
        }

        internal void Delete(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete
                        From [dbo].[Ideas]
                        Where Id = @id";

            db.Execute(sql, new { id });
        }
    }
}
