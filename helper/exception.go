package helper

func panicIfError(err interface{}) {
	if err != nil {
		panic(err)
	}
}
