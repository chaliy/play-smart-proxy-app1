.PHONY: all, deploy

SERVICE_NAME=play-smart-proxy-app1
SERVICE_GIT=https://chaliy@$(SERVICE_NAME).scm.azurewebsites.net:443/$(SERVICE_NAME).git

dev:
	npm run dev

build:
	npm run build

deploy: build
	cd server && git commit -am "New deployment"
	cd server && git pull --rebase
	cd server && git push

console:
	start "" https://$(SERVICE_NAME).scm.azurewebsites.net/
