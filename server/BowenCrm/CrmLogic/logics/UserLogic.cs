using System;
using System.Collections.Generic;
using System.Text;
using CrmLogic.models;
using MongoDB;

namespace CrmLogic.logics
{
    class UserLogic
    {

        public Users CreateUser()
        {
            return new Users();
        }

        public List<Users> GetUserList(String fliter)
        {
            
        }

        public Users CreateUser(Users user)
        {
            var client = new MongoClient();
        }
    }
}
