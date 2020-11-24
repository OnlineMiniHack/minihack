package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strings"

	i "github.com/tockins/interact"
)

func main() {
	in, err := os.Open("awsacronyms.csv")
	if err != nil {
		panic(err)
	}
	r := csv.NewReader(in)

	var acronymsAndAnswers [][]string
	for {
		record, err := r.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			log.Fatal(err)
		}
		acronymsAndAnswers = append(acronymsAndAnswers, record)
	}

	questionsAndResponses := map[string]string{}

	for _, line := range acronymsAndAnswers {
		questionsAndResponses[line[0]] = line[1]
	}

	var questions []*i.Question
	for question, answer := range questionsAndResponses {
		questions = append(questions, questionsBuilder(question, answer))
	}

	questionsFormat(questions)
	// yay we are the friendliest bestest team
	//  #ParticipationTrophy :)
	// oops i've mucked the pointer still....
	// * is a pointer
	// & is the address it's about passing a specific shared value around instead of a copy but it's easy to mess up accidentally

	// so use to Js where all that is handled for us, and only have to do scoping
	// but go i feel is way more powerful
}

func questionsBuilder(question string, answer string) *i.Question {
	return &i.Question{
		Quest: i.Quest{
			Msg: fmt.Sprintf("What does %s stand for?", question),
		},
		Action: func(c i.Context) interface{} {
			val, err := c.Ans().String()
			if err != nil {
				return err
			}
			if strings.ToLower(val) != strings.ToLower(answer) {
				fmt.Printf("NOPE! It was %s.\n", answer)
				return nil
			}

			return nil
		},
	}
}

func questionsFormat(questions []*i.Question) {
	i.Run(&i.Interact{Questions: questions})
}
