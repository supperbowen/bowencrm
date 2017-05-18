using System;
using System.Collections.Generic;
using System.Text;

namespace CrmLogic.BaseItems
{
    interface IModel
    {
        int Id { get; set; }
        DateTime Created { get; set; }
        DateTime Updated { get; set; }
        string CreateBy { get; set; }
        string UpdateBy { get; set; }
    }
}
