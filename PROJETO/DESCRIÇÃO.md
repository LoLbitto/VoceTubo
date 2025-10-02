# MODELAGEM

Para a modelagem, fizemos um DER, que demonstra todos as classes e suas relações.

## Usuário

Primeiramente, temos o usuário, que vai ser o mesmo que um "canal", ou seja, um usuário é também um canal.
O usuário pode se relacionar consigo mesmo, oras! Um usuário pode se inscrever no canal do outro!
Além disso, todo usuário pode postar vídeos, quantos quiser! Mas um vídeo só é postado por um único usuário / canal.

## Vídeos e comentários

Como disse antes, todo vídeo pode ser postado por qualquer usuário, mas um vídeo é postado por um usuário, mas um usuário pode postar vários vídeos (1:n).
Os vídeos também podem ter comentários, cada vídeo pode ter N comentários, cada comentário é postado por um usuário.

## Posts

Os usuários também podem criar posts para interagir com seu público, os posts seguem a mesma ideia dos comentários, mas ficam salvos nos perfis dos usuários que os fizeram.

## Likes

Também criamos uma feature de likes, por isso temos relações N:N entre o usuário e todos os outros elementos, usuários podem curtir vídeos, posts e comentários.

# ATRIBUTOS

- Usuarios: Nome, Nome de Exibição, Senha;
- Videos: Título e Descrição; FKs : Usuário;
- Posts: Título, TemImagem, Texto; FKs : Usuário;
- Comentário: Texto; FKs : Usuário, Vídeo;

## Imagens e outros assets

As imagens serão pegas direto no arquivo, tendo um relacionamento com o ID do vídeo ou usuário.
Algo assim

Public
|-----> Assets
|  |-----> (Id do usuário [Ou qualquer outra coisa, tipo vídeo])
|  |   |-----> asset.jpg
