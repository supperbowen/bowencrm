using CrmLogic.BaseItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrmLogic.models
{
    public class Users : IItemModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public string CreateBy { get; set; }
        public string UpdateBy { get; set; }

    }
}
