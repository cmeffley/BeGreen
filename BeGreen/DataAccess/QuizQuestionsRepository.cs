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
    }
}
