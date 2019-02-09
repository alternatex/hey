test:
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec

build:
	@go build hey.go

.PHONY: test