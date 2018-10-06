docker stop $1
docker rm $1
docker rmi -f nginx_node_postgres_app1
docker rmi -f $2
