# docker-nginx-sql-node

Maquina de DEV
docker build -t cliversonbatista/servernode .
docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 cliversonbatista/servernode                         


# Pastas
    nginx -> servidor nginx para proxy reverso 
    mysql -> volume do banco de bados mysql
    node  -> aplicação node com acesso ao mysql
    sql   -> arquivo de criação do DB e tabelas

# rodar:
    docker-compose build
    docker-compose up -d
    docker-compose down

# Teste:
get http://localhost:8080/ -> lista nomes
get http://localhost:8080/{xxxxx} -> inclui nome
