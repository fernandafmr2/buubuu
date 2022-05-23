package main

import (
	"buubuu/database"
	"github.com/labstack/echo"
	"gorm.io/gorm"
)

var (
	db *gorm.DB = database.SetUpDatabaseConnection()
)

func main() {
	defer database.CloseDatabaseConnection(db)
	e := echo.New()

	e.Start(":9000")
}
