package main

import ("fmt" 
"github.com/gofiber/fiber/v2"
"log"
)

type Todo struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Done bool `json:"done"`
	Body int `json:"body`
}

func main(){
	fmt.Print("Hello world")

	app:= fiber.New()
	todos := []Todo{}

	app.Get("/healthcare", func(c *fiber.Ctx) error{
		return c.SendString("OK")
	})
	app.Post("/api/todos", func(c *fiber.Ctx) error {
		todo := &Todo{}
		if err := c.BodyParser(todo) err!= nil{
			return err
		}
	})

	log.Fatal(app.Listen(":4000"))
}