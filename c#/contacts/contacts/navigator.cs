using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace contacts
{
    class navigator
    {
        public string Name;
        public string Height;

        public void Talk()
        {
            MessageBox.Show("my name is " + Name + " and my height is " + Height);
        }
    }
}
