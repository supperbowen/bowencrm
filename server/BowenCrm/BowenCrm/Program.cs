using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using CrmLogic;

namespace BowenCrm
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine(args[0]);
            var url = args.Length>0 && args[0].ToString().Length > 0 ? args[0].ToString() : "http://localhost:9900";
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .UseUrls(url)
                .Build();

            AutoMapBson.MapModels();//注册Model为BSON

            host.Run();
        }
    }
}
