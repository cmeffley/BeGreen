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
    public class TreeActivityRepository
    {
        readonly string _connectionString;

        public TreeActivityRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<TreeActivity> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allTreeActivity = db.Query<TreeActivity>(@"Select * From TreeActivity");

            return allTreeActivity;
        }

        internal TreeActivity GetSingleActivityById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From TreeActivity
                        Where id = @id";

            var singleActivity = db.QueryFirstOrDefault<TreeActivity>(sql, new { id });

            return singleActivity;
        }

        internal IEnumerable<TreeActivity> GetAllUserIdActivities(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From TreeActivity
                        Where userId = @userId";

            var userActivities = db.Query<TreeActivity>(sql, new { userId });

            return userActivities;

        }

        internal void AddNewActivity(TreeActivity activity)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"INSERT INTO [dbo].[TreeActivity]
                                   ([greenActivity]
                                   ,[treePoints]
                                   ,[totalTreePoints]
                                   ,[userId])
		                           output inserted.id
                             VALUES
                                   (@greenActivity, @treePoints, @totalTreePoints, @userId)";

            var id = db.ExecuteScalar<int>(sql, activity);

            activity.Id = id;

        }

        internal object Update(int id, TreeActivity activity)
        {
            using var db = new SqlConnection(_connectionString);

            var pointsSql = @"Select sum(TreePoints)
                            From TreeActivity
                            Where userId = @userId";

            var totalPoints = db.ExecuteScalar<int>(pointsSql, new { userId = activity.UserId });

            var sql = @"UPDATE [dbo].[TreeActivity]
                       SET [greenActivity] = @greenActivity
                          ,[treePoints] = @treePoints
                          ,[totalTreePoints] = @totalTreePoints
                          ,[userId] = @userId
                     Output inserted.*
                     WHERE Id = @id";
            activity.Id = id;
            activity.TotalTreePoints = totalPoints;

            var updatedActivity = db.QuerySingleOrDefault<TreeActivity>(sql, activity);

            return updatedActivity;
        }

        internal int GetTotalPoints(int userId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select TOP 1 totalTreePoints
                        From TreeActivity
                        Where userId = @userId
                        Order By totalTreePoints DESC";

            var totalTreePoints = db.ExecuteScalar<int>(sql, new { userId });

            return totalTreePoints;
        }
    }
}
