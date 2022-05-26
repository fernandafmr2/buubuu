package main

import (
	"buubuu/service"
	"buubuu/database"
	"buubuu/controller"
	"buubuu/repository"
	// "buubuu/middleware"
	"github.com/gin-gonic/gin"

	"fmt"
	"gorm.io/gorm"
)

var (
	db *gorm.DB = database.SetUpDatabaseConnection()
	jwtService     service.JWTService        = service.NewJWTService()
	authService    service.AuthService       = service.NewAuthService(userRepository)
	userRepository repository.UserRepository = repository.NewUserRepository(db)
	authController controller.AuthController = controller.NewAuthController(authService, jwtService)
)

func main() {
	defer database.CloseDatabaseConnection(db)
	r := gin.Default()

	authRoutes := r.Group("auth")
	{
		authRoutes.POST("/register", authController.Register)
	}

	r.Run(":9000")
}

func check(c *gin.Context){
	fmt.Println("yolooo")
}
