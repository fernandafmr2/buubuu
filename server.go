package main

import (
	"buubuu/service"
	"buubuu/database"
	"buubuu/controller"
	"buubuu/repository"
	// "buubuu/middleware"
	"github.com/gin-gonic/gin"

	"fmt"
	"net/http"
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
	r.LoadHTMLGlob("view/*.html")

	authRoutes := r.Group("auth")
	{
		authRoutes.POST("/register", authController.Register)
		authRoutes.GET("/register", authController.Register)
		authRoutes.POST("/login", authController.Login)
		authRoutes.GET("/login", authController.Login)

		// authRoutes.GET("/register", check)
		// authRoutes.GET("/register", func(c *gin.Context) {
		// c.HTML(http.StatusOK, "index.html", gin.H{})
	// })
	}

	r.Run(":9000")
}

func check(c *gin.Context){
	r := gin.Default()
	r.LoadHTMLGlob("view/*.html")
	c.HTML(http.StatusOK, "index.html",gin.H{})
	fmt.Println("ok")
}
