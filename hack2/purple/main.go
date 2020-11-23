package main

import (
	"fmt"
	i "github.com/shirleyleu/interact"
)


func main() {
	firstQuestion:= "AWS"

	i.Run(&i.Interact{
		Questions: []*i.Question{
			{
				Quest: i.Quest{
					Msg:      fmt.Sprintf("What does %s stand for?", firstQuestion),
				},
				Action: func(c i.Context) interface{} {
					val, err := c.Ans().String()
					if err != nil{
						return err
					}
					fmt.Println(val)
					return nil
				},
			},
		},
	})
}