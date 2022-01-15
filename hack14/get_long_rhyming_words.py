# get_long_rhyming_words.py

"""
Want to find the set of no more than 30 rhyming words such that
the total number of characters of all the words is maximised.

"rhyming" words will in fact be what are technically called
"identities" as we will allow the onset of the stressed
syllable to be the same.
(See https://en.wikipedia.org/wiki/Perfect_and_imperfect_rhymes)

Code has been tidied up since the night of the Mini Hack but
the basic method for finding the words is unchanged.
"""

import nltk
entries = nltk.corpus.cmudict.entries()
rhyme_dict = {}

# ====================
def primary_stress(pron_list):
    """Find the position of the stressed vowel sound in a pron list"""

    for i in range(len(pron_list)):
        if '1' in pron_list[i]:
            return i
    else:
        return None


# ====================
def letters_only(my_string: str):
    """Get only letters from a string"""

    return(''.join([c for c in my_string if c.isalpha()]))


# ====================
def update_rhyme_dict(word: str, ending: str):
    """Add a new word to the rhyme_dict"""

    if ending in rhyme_dict:
        rhyme_dict[ending].append(word)
    else:
        rhyme_dict[ending] = [word]


# ====================
if __name__ == "__main__":

    # Group words by the part starting from the stressed vowel
    for word, pron_list in entries:
        stress_index = primary_stress(pron_list)
        if stress_index is not None:
            ending = letters_only(''.join(pron_list[stress_index:]))
            update_rhyme_dict(word, ending)

    # Keep only the thirty longest unique words in each group
    for ending, words in rhyme_dict.items():
        words = list(set(words))
        words.sort(key=lambda x: len(x), reverse=True)
        rhyme_dict[ending] = list(words)[:30]

    # Find the highest scoring group and print the top thirty words
    highest_scoring = max(
        rhyme_dict.keys(),
        key=lambda x: len(''.join(rhyme_dict[x]))
    )
    print()
    print("The highest-scoring set of 30 words is:")
    print(rhyme_dict[highest_scoring])
    print()
    print("Total score:", len(''.join(rhyme_dict[highest_scoring])))
    print()
    