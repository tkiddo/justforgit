using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace contacts
{
    class talker
    {
        public static int Blah(string things,int number)
        {
            string finalString = "";
            for (int count = 0; count < number; count++)
            {
                finalString = finalString + things + "\n";

            }
            MessageBox.Show(finalString);
            return finalString.Length;
        }
    }
}
