using ClosedXML.Excel;
using DocumentFormat.OpenXml.Spreadsheet;
using System;
using System.Drawing;

namespace minihack
{
    struct ImageSize
    {
        public int Width { get; set; }
        public int Height { get; set; }
    }
    class Program
    {
        private const bool UseSquareCells = true;

        static void Main(string[] args)
        {

            using var workbook = new XLWorkbook();
            var worksheet = workbook.Worksheets.Add("Sample Sheet");

            var image1Size = ReadFile(worksheet, @"c:\personal\minihack\1.png", 0, 0);
            var image2Size = ReadFile(worksheet, @"c:\personal\minihack\2.png", image1Size.Width - 39, 0);
            var image3Size = ReadFile(worksheet, @"c:\personal\minihack\3.png", (image1Size.Width - 39) + (image2Size.Width - 41), 0);

            var image4Size = ReadFile(worksheet, @"c:\personal\minihack\4.png", 0, image1Size.Height - 38);
            var image5Size = ReadFile(worksheet, @"c:\personal\minihack\5.png", image4Size.Width - 39, image1Size.Height - 38);
            var image6Size = ReadFile(worksheet, @"c:\personal\minihack\6.png", (image4Size.Width - 39) + (image5Size.Width - 39), image3Size.Height - 37);

            if (UseSquareCells)
            {
                worksheet.Columns().Width = 1;
                worksheet.Rows().Height = 10;
            }

            workbook.SaveAs(@"c:\personal\minihack\Complete_4bit.xlsx");
        }

        private static ImageSize ReadFile(IXLWorksheet worksheet, string filename, int xPos, int yPos)
        {
            Console.WriteLine("Reading image " + filename);

            var image = new Bitmap(filename);
            var width = image.Width;
            var height = image.Height;

            for (int x = 0; x < width; x++)
            {
                for (int y = 0; y < height; y++)
                {
                    var pixelColour = image.GetPixel(x, y);

                    if (pixelColour.A > 64)
                        worksheet.Cell(y + 1 + yPos, x + 1 + xPos).Style.Fill.BackgroundColor = XLColor.FromColor(Average(pixelColour));
                }

             //  Console.WriteLine($"{filename} Progress: {Math.Round(((double)x / width) * 100, 2)}%");
            }

            return new ImageSize { Height = height, Width = width };
        }

        static System.Drawing.Color Average(System.Drawing.Color color)
        {
            return System.Drawing.Color.FromArgb(color.A, ColorRange(color.R), ColorRange(color.G),
                ColorRange(color.B));
        }

        static byte ColorRange(byte channel)
        {
            return (byte)(channel & 0b_11110000);
        }
    }
}
