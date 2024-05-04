package main

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
)

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("\n---got the request---\n")
	fmt.Printf("\n----in getroot--\n")
	io.WriteString(w, "This is my website!\n")
}
func getHello(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /hello request\n")

	io.WriteString(w, "Hello, HTTP!\n")
}

func file(w http.ResponseWriter, r *http.Request) {
	fmt.Printf(" \n -->> files func in  in the Next.js directory:\n")

	// Open the directory where Next.js files are mounted
	dir, err := os.Open("/app")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		println("\n got the erron -->",err)
		return
	}
	defer dir.Close()
	
	// Read the directory contents
	files, err := dir.Readdir(-1)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		println("\n got the error -->",err)
		return
	}

	// Write file names to the response
	for _, file := range files {
		io.WriteString(w, file.Name()+"\n")
	}
}

func main() {
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/hello", getHello)
	http.HandleFunc("/file", file)

	fmt.Printf("\n\n  ----------- go version running  -------------\n\n")
	fmt.Printf("\n\n  ----------- go server listening on port http://localhost:4696   -------------\n\n")
	err := http.ListenAndServe(":4696", nil)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)

	}
	
}