# node-docker

https://www.youtube.com/watch?v=9zUHg7xjIqQ&ab_channel=freeCodeCamp.org

2:32

commands:

1-docker build -t node-app-image .

2-docker run -v $(pwd):/app -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name node-app node-app-image

or

docker run -v %cd%:/app -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name node-app node-app-image

3-docker exec -it node-app bash

<hr>

sudo docker

docker run -d --name node-app node-app-image

docker ps

docker ps -a

docker start node-app

docker stop nodsudo dockere-app

docker volume ls

docker image ls

docker rm node-app -fv

docker-compose up -d

docker-compose down

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
