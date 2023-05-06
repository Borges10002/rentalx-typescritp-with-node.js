# Cadastro de carro

**RF** ->Requisito funcionais
Deve ser possivel cadastrar u carro

**RN** -> Regra de negócios
Não deve ser possivel cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado com disponibilidade por padrão

- O usuário responsável pelo cadastro dever ser um usuário administrador

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

**RN** -> Regra de negócios
Não deve ser possivel cadastrar uma espeficicação para um carro não cadastrado.
Não deve ser possivel cadadtrar uma espeficicaçao já existeste para o mesmo carro.
O usuário responsável pelo cadastro dever ser um usuário administrador

# Cadastro de imagens do carro

**RF** ->Requisito funcionais
Deve ser possivel cadastrar a imagem do carro

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
O usuário deve estar logado na aplicacão
Ao realizar um alguel, o status do carro devera ser alterado para indisponivel

# Devolucão de carro

**RF** ->Requisito funcionais
Deve ser possivel realizar a devolucão de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, devera ser cobrado diaria completa.
Ao realizar a devolucão, o carro devera ser liberado para outro aluguel.
Ao realizar a devolução, o usuario devera ser liberado para outro aluguel.
Ao realizar a devolução, devera ser calculado o total do aluguel.
Caso o horario de devolucao seja superior ao horario previsto de entrega, devera ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, devera ser somado ao total do aluguel.

# Listagem de Alugueis para usuário

**RF** ->Requisito funcionais
Deve ser possivel realizar a busca de todos os alugueis para o usuario

**RN** -> Regra de negócios
O usuario deve estar logado na aplicacao

# Recuperar Senha

**RF** ->Requisito funcionais
Deve ser possivel o usuário recuperar a senha informada o e-mail
O usuário deve receber um e-mail com o passo a passo para a recuperacao da senha
O usuário deve conseguir inserir um nova senha

**RN** -> Regra de negócios
O usuário precisa informar uma nova senha
o link enviado para a recuperacao deve expirar em 31 horas
