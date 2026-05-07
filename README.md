## Requisitos
Nodejs

## Como executar
Clone o repositório:
```
git clone <repo>
cd <repo>
```

Instale as dependências:
```
npm install
```

Inicie a aplicação no modo desenvolvimento:
```
npm run dev
```

## Do acesso ao sistema
Existem três níveis de acesso já disponíveis para serem utilizados no sistema quando ele é iniciado a fim de facilitar o entendimento do que cada nível pode ter acesso. São os usuários para teste:
```
usuario: op
senha: 123
nivel: operador
```
```
usuario: eng
senha: 123
nivel: engenheiro
```
```
usuario: admin
senha: 123
nivel: administrador
```

## Do nível de acesso dos usuários
Cada usuário tem suas limitações dentro do sistema, como páginas inteiras que não podem ser acessadas ou elementos específicos do site, como botões, por exemplo. Isso pode ser conferido com melhor detalhamento através do user-flow do projeto, disponibilizado em: <a href="https://whimsical.com/tpi77/user-flow-JRekzw36ZBgcSXzPWqNrnZ">user-flow</a>.

## Do que foi utilizado
Para desenvolver a interface do sistema foram utilizados React e JavaScript. Para navegação visando uma "SPA", React-Router. Para estilização e responsividade, Tailwindcss.

## Dos demais detalhes
Para maior detalhamento sobre o projeto, como objetivo, requisitos funcionais e hierarquia de informações, consulte a documentação completa: <a href="#">Sistema Aerocode – Interface Gráfica (GUI SPA)</a>