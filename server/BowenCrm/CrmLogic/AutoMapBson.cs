using CrmLogic.models;
using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrmLogic
{
    public class AutoMapBson
    {
        public static void MapModels()
        {
            BsonClassMap.RegisterClassMap<Roles>(cm=>cm.AutoMap());
            BsonClassMap.RegisterClassMap<Users>(cm => cm.AutoMap());
        }
    }
}
