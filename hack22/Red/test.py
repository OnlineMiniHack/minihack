from random import random
import numpy as np


def goalie():
    num = np.random.randint(1, 10)
    if num < 5:
        return ('left')
    else:
        return ('right')


def save(word, goalie_position):
    save = True
    if word == goalie_position:
        saved = True
    else:
        saved = False
    return (saved)


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
        audio = recognizer.listen(source)

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

    print("Choose where to shoot!")

    guess = recognize_speech_from_mic(recognizer, microphone)

    assert guess["success"], guess['error']
    assert guess["transcription"] in WORDS, "Invalid choice!"

    # show the user the transcription
    print(guess["transcription"])


def run_game():
    while True:
        goalie_position = goalie()
        try:
            word = choose_shot()
            goal = not (save(word, goalie_position))
            print("Goal!" if goal else "Goal missed!")
            pass
        except:
            print("Goal missed!")

        break
    print("running")


if __name__ == "__main__":
    run_game()
