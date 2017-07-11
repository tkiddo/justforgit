using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace day2
{
    class Dog
    {
        public string Name;
        public int Age;

        public void Sleep()
        {
            MessageBox.Show(Name + " is sleeping and age is " +Age);
        }
        public void Say(string message,Dog to)
        {
            MessageBox.Show(this.Name + " says to " + to.Name + " : " + message);
        }
    }
}
