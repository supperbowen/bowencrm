using System;
using System.Collections.Generic;
using System.Text;

namespace CrmLogic.BaseItems
{
    interface IItemModel:IModel
    {
        string Name { get; set; } 
    }
}
