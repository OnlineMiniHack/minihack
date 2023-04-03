using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EasterEgg
{
    public partial class EasterEggForm : Form
    {
        private EasterMessageLibrary _easterLibrary;
        public EasterEggForm()
        {
            InitializeComponent();
            _easterLibrary = new EasterMessageLibrary();
            this.button1.Hide();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.button1.Show();
            this.easterEgg.ImageLocation = "./assets/cracked-egg.png";
            this.easterMessageText.Text = _easterLibrary.GetEasterMessage();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.easterMessageText.Text = "";
            this.easterEgg.ImageLocation = "./assets/easter-egg.jpg";
            this.button1.Hide();
        }
    }
}
