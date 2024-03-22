build:
    docker build --tag node-docker-project1:1.0.0 .

run_dev:
    docker run -it -p 5000:5000 --rm --name node-docker node-docker-project1:1.0.0
    echo "Dev: port out 5000 : in 5000"

run_relize:
    docker run -d -p 5000:5000 --name node-docker node-docker-project1:1.0.0
    echo "Relize: port out 5000 : in 5000"

stop_relize:
    docker stop --name node-docker

remove_relize:
    docker stop --name node-docker
    docker rm --name node-docker

