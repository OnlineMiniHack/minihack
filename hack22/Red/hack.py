import os
from random import random
from time import sleep
import numpy as np
import speech_recognition as sr

ASCII_GOAL = """
                             +---------------------------+    
                              |\          O               |   
                              | \    @  \_|_/             | 
                              |  \  /     |               | o 
______________________________|___|/_____/_\______________|-|\|__________________
         /                   /    /              _ o     / /|_                /
        /                   /  _o'------------- / / \ ----/                  /
       /                   /  /|_                /\    /                    /
      /                   /_ /\ _______________ / / __/                    /
     /                      / /                                           /
    /                                                                    /
   /                                                                    /
  /                                                                    /
 /____________________________________________________________________/
"""

ASCII_SAVE = """
                             +---------------------------+    
                              |\                          |\   
                              | \    @ \_    /            | 
                              |  \  /  \_o--<_/           | o
______________________________|___|/______________________|-|\|__________________
         /                   /    /              _ o     / /|_                /
        /                   /  _o'------------- / / \ ----/                  /
       /                   /  /|_                /\    /                    /
      /                   /_ /\ _______________ / / __/                    /
     /                      / /                                           /
    /                                                                    /
   /                                                                    /
  /                                                                    /
 /____________________________________________________________________/
"""

ASCII_MISS = """
                             +---------------------------+    
                          @   |\                          |\  
                           \  | \      \_    /            | 
                            \ |  \     \_o--<_/           | o
_____________________________\|___|_______________________|-|\|__________________
         /                   /\                        / /|_                /
        /                   /  o'-------------- / / \ ----/                  /
       /                   /  /|_                /\    /                    /
      /                   /_ /\ _______________ / / __/                    /
     /                      / /                                           /
    /                                                                    /
   /                                                                    /
  /                                                                    /
 /____________________________________________________________________/
"""


def goalie():
    dir = ['right', 'top']
    num_1 = np.random.randint(1, 10)
    num_2 = np.random.randint(1, 10)
    if num_1 <= 5:
        dir[0] = 'left'
    if num_2 <= 5:
        dir[1] = 'bottom'
    return dir


def save(word, dir):
    saved = True
    if word[0] == dir[0] and word[1] == dir[1]:
        saved = True
    elif word[0] != dir[0] and word[1] != dir[1]:
        saved = False
    elif word[0] == dir[0] or word[1] == dir[1]:
        num = np.random.randint(1, 10)
        if num <= 5:
            saved = False
    return saved


def recognize_speech_from_mic(recognizer, microphone):
    # check that recognizer and microphone arguments are appropriate type
    if not isinstance(recognizer, sr.Recognizer):
        raise TypeError("`recognizer` must be `Recognizer` instance")

    if not isinstance(microphone, sr.Microphone):
        raise TypeError("`microphone` must be `Microphone` instance")

    # adjust the recognizer sensitivity to ambient noise and record audio
    # from the microphone
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source, None, 2)

    # set up the response object
    response = {
        "success": True,
        "error": None,
        "transcription": None
    }

    try:
        response["transcription"] = recognizer.recognize_google(audio)
    except sr.RequestError:
        # API was unreachable or unresponsive
        response["success"] = False
        response["error"] = "API unavailable"
    except sr.UnknownValueError:
        # speech was unintelligible
        response["error"] = "Unable to recognize speech"

    return response


# set the list of words, maxnumber of guesses, and prompt limit
WORDS = ['top left', 'top right', 'bottom left', 'bottom right']


def choose_shot():

    # create recognizer and mic instances
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()

    print("Choose where to shoot! Top left, top right, bottom left or bottom right.")

    guess = recognize_speech_from_mic(recognizer, microphone)

    assert guess["success"], guess['error']
    assert guess["transcription"] in WORDS, f"Invalid choice '{guess['transcription']}'!"

    # show the user the transcription
    return guess["transcription"].split(' ')


NUMBER_OF_ATTEMPTS = 5


def clear_console(): return os.system(
    'cls' if os.name in ('nt', 'dos') else 'clear')


def run_game():
    goals = 0
    for i in range(1, NUMBER_OF_ATTEMPTS + 1):
        clear_console()
        print(f"Current number of goals: {goals}")
        print(f"Attempt {i}")
        goalie_position = goalie()
        try:
            word = choose_shot()
            goal = not (save(word, goalie_position))
            print(f"Goalie went... {goalie_position}")
            if goal:
                print("Goal!")
                print(ASCII_GOAL)
                goals += 1
            else:
                print("Saved! :(")
                print(ASCII_SAVE)
            pass
        except Exception as e:
            print(e)
            print("Goal missed!")
            print(ASCII_MISS)
        print(f"Current number of goals: {goals}")
        sleep(4)


if __name__ == "__main__":
    run_game()
