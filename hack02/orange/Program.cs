using System;
using System.Linq;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading;

namespace ConsoleApp29
{


    class Program
    {
        [DllImport("user32.dll")]
        static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);

        static void Main(string[] args)
        {
            var words = new Dictionary<string, string>()
            {
                ["DAVID"] = "-.. .- ...- .. -..",
                ["BORIS"] = "-... --- .-. .. ...",
                ["GAVIN"] = "--. .- ...- .. -.",
                ["NUH"] = "-. ..- ....",
                ["MILES"] = "-- .. .-.. . ...",
            };

            var random = new Random();
            var level = 1;

            Console.WriteLine("Please enter a word ... or type EXIT to leave the program");
            var userWord = string.Empty;

            while (userWord.ToUpper() != "EXIT")
            {
                var result = random.Next(0, words.Count());
                var word = words.Keys.ElementAt(result);
                var code = words[word];

                StrToBlinkConverter(code, level);


                userWord = Console.ReadLine();

                if(userWord.Equals(word, StringComparison.InvariantCultureIgnoreCase))
                {
                    Console.WriteLine("Congrats! You got the next word!");
                    level++;
                }
                else
                {
                    Console.WriteLine("That was wrong. Keep practising :)");
                }
            }
        }

        private static void TurnOff(double seconds)
        {
            const int KEYEVENTF_EXTENDEDKEY = 0x1;
            const int KEYEVENTF_KEYUP = 0x2;
            keybd_event(0x14, 0x45, KEYEVENTF_EXTENDEDKEY, (UIntPtr)0);
            keybd_event(0x14, 0x45, KEYEVENTF_EXTENDEDKEY | KEYEVENTF_KEYUP,
            (UIntPtr)0);
            Thread.Sleep(TimeSpan.FromSeconds(seconds));
        }


        private static void TurnOn(double seconds)
        {
            const int KEYEVENTF_EXTENDEDKEY = 0x1;
            const int KEYEVENTF_KEYUP = 0x1;
            keybd_event(0x14, 0x45, KEYEVENTF_EXTENDEDKEY, (UIntPtr)0);
            keybd_event(0x14, 0x45, KEYEVENTF_EXTENDEDKEY | KEYEVENTF_KEYUP,
            (UIntPtr)0);
            Thread.Sleep(TimeSpan.FromSeconds(seconds));

        }

        private static void StrToBlinkConverter(string word, int level)
        {
            foreach (var letter in word)
            {
                switch (letter)
                {
                    case '.':
                        TurnOn(2 / (double)level);
                        TurnOff(1 / (double)level);
                        break;
                    case '-':
                        TurnOn(4 / (double)level);
                        TurnOff(1 / (double)level);
                        break;
                    default:
                        TurnOff(1 / (double)level);
                        break;
                }
            }

            Console.Write("? ");
        }
    }
}
