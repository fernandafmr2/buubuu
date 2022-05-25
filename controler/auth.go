package controler

type Auth interface {
	Login(c echo.Context)
	Register(c echo.Context)
}

type auth struct {
	authService service.AuthService
	jwtService  service.JWTService
}

// create instance
func NewAuthController(authService service.AuthService, jwtService service.JWTService) Auth {
	return &auth{
		authService: authService,
		jwtService:  jwtService,
	}
}
