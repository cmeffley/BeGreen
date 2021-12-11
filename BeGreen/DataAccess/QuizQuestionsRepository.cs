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
    public class QuizQuestionsRepository
    {
        readonly string _connectionString;

        public QuizQuestionsRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("BeGreen");
        }

        internal IEnumerable<QuizQuestions> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var questions = db.Query<QuizQuestions>(@"Select * From QuizQuestions 
                                                    Order By id ASC");

            return questions;
        }

        internal QuizQuestions GetQuestionById(int id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select *
                        From QuizQuestions
                        Where id = @id";

            var singleQuestion = db.QueryFirstOrDefault<QuizQuestions>(sql, new { id });

            return singleQuestion;


        }
    }
}
