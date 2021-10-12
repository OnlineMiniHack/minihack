using System;
using System.Speech.Synthesis;
using System.Threading;
using System.Timers;

namespace TalkingCard
{
    public class Card
    {
        private SpeechSynthesizer _speechSynthesizer;
        private System.Timers.Timer _timer = new System.Timers.Timer();
        private Random _random = new Random();

        public void Go()
        {
            _speechSynthesizer = new SpeechSynthesizer();
            _speechSynthesizer.SetOutputToDefaultAudioDevice();
            _speechSynthesizer.SpeakStarted += SpeechStarted;

            _timer.Interval = 10;
            _timer.Elapsed += Animate;
            _timer.Start();

            Console.BackgroundColor = ConsoleColor.DarkRed;
            Console.Clear();
            Console.CursorVisible = false;

            Say("If you were my rose, then I'd be your sun,", 5);
            Say("painting you rainbows when the rains come.", 7);
            Say("I'd change my orbit to banish the night,", 9);
            Say("as to keep you in my nurturing light.", 11);
            Say("Happy Valentines Day my love", 15);
        }

        private void Animate(object sender, ElapsedEventArgs e)
        {
            if (WritingLine) return;

            Drawing = true;
            var y = _random.Next(1, 14);
            var x = _random.Next(0, 22);
            var chr = (Heart[y] + "                       ")[x];
            Console.SetCursorPosition(x + 60, y + 3);
            Console.Write(chr);
            Drawing = false;
        }

        private void SpeechStarted(object sender, SpeakStartedEventArgs speakEventArgs)
        {
            var x = 5;
            foreach (var letter in CurrentText)
            {
                WritingLine = true;
                while (Drawing) { }
                Console.SetCursorPosition(x, Line);
                Console.Write(letter);
                WritingLine = false;
                Thread.Sleep(50);
                x++;
            }
        }

        private void Say(string text, int line)
        {
            CurrentText = text;
            Line = line;
            _speechSynthesizer.Speak(text);
        }

        private string CurrentText;
        private int Line;

        private bool WritingLine;
        private bool Drawing;


        private string[] Heart = @"
       .=.A.=.
 __.=./\ / \ /\.=.__
(-.'-;  |   |  ;-'.-)
   \ `\/     \/` /
    ;  `\   /`  ;
    |    | |    |
    ;,'-.-'-.-',;
     \\/^\ /^\//
      \   `   /
       ',___,'
        \\V//
         |||
         |||
         |||".Split(Environment.NewLine);
    }
}
