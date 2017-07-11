using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace day2
{
    class Penguin : Bird
    {
        public override void Fly()
        {
            MessageBox.Show("penguin flying");
        }
    }
}
