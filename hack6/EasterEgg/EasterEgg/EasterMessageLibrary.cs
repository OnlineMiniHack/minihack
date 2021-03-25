using System;
using System.Collections.Generic;

namespace EasterEgg
{
    public class EasterMessageLibrary
    {
        private readonly List<string> _easterMessages;
        public EasterMessageLibrary()
        {
            _easterMessages = new List<string>
            {
                "I wish I had a meaningful Easter message. :(",
                "Easter is a time for dressing up, looking your best, and hunting for candy. It’s Halloween in reverse",
                "Have an eggstra special Easter season!",
                "Hope you have a hoppy Easter!",
                "Somebunny loves you!",
                "Easter is the only time when it’s perfectly safe to put all your eggs in one basket.",
                "Easter egg hunts are proof your child can find things when they really want to.",
                "I'm very good at hiding chocolate, too...in my stomach.",
                "When life gives you lemons, throw it back and ask for chocolate.",
                "Chocolate is the answer, who cares what the question is.",
                "Easter candy is overrated… said no-bunny ever"
            };

        }
        public string GetEasterMessage()
        {
            Random random = new();
            int index = random.Next(0,10);

            // fetch and return message.
            return _easterMessages[index];
        }
    }
}
