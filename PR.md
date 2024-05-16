Análise do dataset

Ao analisar o dataset, reparei que este vinha num formato diferente de json (csv) e que o campo "idcontrato" deveria ser renomeado para "_id", para evitar que o MongoDB, que será utilizado para armazenar os dados, crie o seu próprio campo "_id".

Também reparei que haviam campos com valores numéricos que estavam a ser interpretados como strings, o que poderia causar problemas mais tarde.
Portanto converti os campos "precoContratual" para float e "prazoExecucao" e "_id" para int.

Para isto, utilizei o script "script.py"

Setup MongoDB:

Para dar Setup ao MongoDB, utilizei o Docker, copiando o dataset para o container com o comando:
```docker cp contratos2024.json mongoEWTeste:/tmp```

Depois, carreguei o dataset para o MongoDB com o comando:
```docker exec mongoEWTeste mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray```

Para testar se os dados foram carregados corretamente, fiz as seguintes queries pedidas no enunciado, utilizando os comandos descritos no ficheiro "queries.txt"

API de dados:

Para gerar a estrutura inicial da API, executei o seguinte comando:

```npx express-generator --no-view ex1```

Depois, criei duas novas diretórias, "models" e "controllers", para guardar o schema do MongoDB e as interações com a base de dados, respetivamente.

Depois de criar o schema e as funções para interagir com a base de dados, criei as rotas para a API, que estão no ficheiro "routes/contratos.js".

Também foi necessário mudar o ficheiro app.js para fazer a ligação entre o Mongoose e o MongoDB.
Antes de correr a API, instalei as dependências necessárias com o comando:

```npm install```

E depois instalei o Mongoose com o comando:

```npm install mongoose```

É importante referir que a rota que tem a entidade como query string (GET /contratos?entidade=X) utiliza o NIPC da entidade, para facilitar as ligações a fazer na interface.

Para testar a API, utilizei o Postman, fazendo pedidos GET, POST, PUT e DELETE para a API, que corre no endereço http://localhost:16000 (porta definida no ficheiro bin/www).

Interface:

Para desenvolver a interface, utilizei o PUG, criando um ficheiro para cada uma das 3 páginas da interface (index, contrato e entidade).

A interface alimenta-se da API, utilizando o axios para fazer pedidos.

Criei um novo ficheiro de rotas no diretório "routes", chamado "entidades.js", para lidar com o pedido da página de uma entidade específica.
Também é calculado o montante total dos contratos associados a essa entidade, pois não estava uma rota para isso na API e a interface necessitava dessa informação.

Para correr a interface, utilizei o comando:

```npm start```

E a interface corre no endereço http://localhost:16001

Para testar a interface, utilizei o browser, navegando entre as páginas e verificando se os dados eram corretamente carregados, que se verificou ser verdade.
