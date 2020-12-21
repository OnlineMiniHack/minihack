using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AdventCountDown
{
    public partial class Form1 : Form
    {
        private Image _image;
        private Brush _headingColour;
        private Brush _digitColour;
        private Pen _boxColour;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            _image = Image.FromFile("background.jpg");
            _headingColour = new SolidBrush(Color.Red);
            _digitColour = new SolidBrush(Color.Gold);
            _boxColour = new Pen(Color.Gold);

            this.Text = "Time until Christmas";


            // Display Days in binary

            //  

            // Progress Bar

            // Count down to Christmas 2021 display more digits

            // Red background.  Lighter -> Darker

            // ASCII Art
        }

        private int DaysUntil(DateTime currentDate, DateTime targetDate)
        {
            return (int)targetDate.Subtract(currentDate).TotalDays;
        }

        private int HoursUntil(DateTime currentDate, DateTime targetDate)
        {
            return (int)targetDate.Subtract(currentDate).TotalHours;
        }

        private int MinutesUntil(DateTime currentDate, DateTime targetDate)
        {
            return (int)targetDate.Subtract(currentDate).TotalMinutes;
        }

        private int SecondsUntil(DateTime currentDate, DateTime targetDate)
        {
            return (int)targetDate.Subtract(currentDate).TotalSeconds;
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            timer1_Tick(sender, e);
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            var currentDate = DateTime.Now;
            var targetDate = new DateTime(2020, 12, 25);



            var currentContext = BufferedGraphicsManager.Current;
            using (var myBuffer = currentContext.Allocate(this.CreateGraphics(), this.DisplayRectangle))
            {
                var g = myBuffer.Graphics;
                g.Clear(this.BackColor);
                g.DrawImage(_image,this.DisplayRectangle);

                var headingFont = new Font(this.Font.Name, 45);
                var font = new Font(this.Font.Name, 60);
                var smallBoxFont = new Font(this.Font.Name, 40);

                DrawRow(g, headingFont, font, 8, "Days", DaysUntil(currentDate, targetDate), 0);
                DrawRow(g, headingFont, font, 12, "Hours", HoursUntil(currentDate, targetDate), 220);
                DrawRow(g, headingFont, font, 16, "Minutes", MinutesUntil(currentDate, targetDate), 440);
                DrawRow(g, headingFont, smallBoxFont, 24, "Seconds", SecondsUntil(currentDate, targetDate), 660, 2.0 / 3.0);

                myBuffer.Render();
            }
        }

        private void DrawRow(Graphics g, Font headingFont, Font font, int boxes, string caption, int remaining, int yOffset, double scale = 1)
        {
            var boxGap = 10;
            var boxSize = (float)(100.0 * scale);
            var labelHeight = 80;
            var leftMargin = 10;
            var textLeftPadding = 20;

            var binary = Convert.ToString(remaining, 2).PadLeft(boxes, '0');
            g.DrawString(caption, headingFont, _headingColour, 5, yOffset + 5);
            for (int n = 0; n <= boxes - 1; n++)
            {
                g.DrawRectangle(_boxColour, leftMargin + (boxSize + boxGap) * n, yOffset + labelHeight, boxSize, boxSize);
                g.DrawString(binary[n].ToString(), font, _digitColour, leftMargin + textLeftPadding + (boxSize + boxGap) * n, yOffset + labelHeight);
            }
        }
    }
}
