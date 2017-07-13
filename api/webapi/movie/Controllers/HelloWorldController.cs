using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace movie.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        public string Index()
        {
            return "this is my <b>default</b> action...";
        }
        public string Welcome(string name="default",int num = 1)
        {
            string str = "hello " + name + " , the number is " + num;
            return str;
        }
    }
}