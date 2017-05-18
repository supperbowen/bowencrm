using CrmLogic.BaseItems;
using System;
using System.Collections.Generic;
using System.Text;

namespace CrmLogic.models
{
    public class Roles : IItemModel
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public string CreateBy { get; set; }
        public string UpdateBy { get; set; }

        public string Description { get; set; }
    }
}
