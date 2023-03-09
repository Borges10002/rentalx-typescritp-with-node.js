# Cadastro de carro

**RF** ->Requisito funcionais
  Deve ser possivel cadastrar u carro


**RN** -> Regra de negócios
   Não deve ser possivel cadastrar um carro com uma placa já existente.
   Não deve ser possivel alterar a placa de um carro já cadastrado
   O carro deve ser cadastrado com disponibilidade por padrão
   O usuário responsável pelo cadastro dever ser um usuário administrador

# Listagem de carros

**RF** ->Requisito funcionais
  Deve ser possivel listar todos os carrs disponivel
  Deve ser possivel listar todos os carros disponivel pelo nome da categoria
  Deve ser possivel listar todos os carros disponivel pelo nome da marca
  Deve ser possivel listar todos os carros disponivel pelo nome do carro

**RN** -> Regra de negócios
  O usuário náo precisar estar logado no sistema


# Cadastro de Especificação no carro

**RF** ->Requisito funcionais
Deve ser possivel cadastrar um espeficicação para um carro
Deve ser possivel listar todas as espeficicações 
Deve ser possivel listar todos os carros


**RN** -> Regra de negócios
 Não deve ser possivel cadastrar uma espeficicação para um carro não cadastrado. 
 Não deve ser possivel cadadtrar uma espeficicaçao já existeste para o mesmo carro.
 O usuário responsável pelo cadastro dever ser um usuário administrador

 # Cadastro de imagens do carro 
  
 **RF** ->Requisito funcionais
  Deve ser possivel cadastrar a imagem do carro 
  Deve ser possive listar todos os carros

**RNF** -> Requisito não funcionais 
 Utilizar o multer para upload dos arquivos 

 **RN** -> Regra de negócios 
 O usuário deve poder cadastrar mais de uma imagem para o mesmo carro 
 O usuário responsável pelo cadastro dever ser um usuário administrador

# Aluguel de carro 

 **RF** ->Requisito funcionais
  Deve ser possivel cadastrar um aluguel 

 **RN** -> Regra de negócios 
  O aluguel deve ter duração minima de 24 horas
  Não deve ser possivel cadastrar um novo aluguel caso já existe um aberto para o mesmo usuário
  Não deve ser possivel cadastrar um novo aluguel caso já existe um aberto para o mesmo carro