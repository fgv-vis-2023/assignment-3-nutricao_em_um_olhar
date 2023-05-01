[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CxFZefIP)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10840813&assignment_repo_type=AssignmentRepo)

## Tarefa 3: Visualização interativa

Trabalho elaborado pelos alunos Bruno Fornaro Pereira [Bruno Fornaro Pereira](https://github.com/BrunoFornaro) e [Vanessa Berwanger Wille](https://github.com/VanessaWille) para a disciplina de Visualização de Dados, com o objetivo de criar uma visualização interativa com a biblioteca D3.js. 


## Nutrição em um Olhar

O tema escolhido para esse trabalho está relacionado à área de nutrição, onde procuramos, a partir de uma visualização interativa, possibilitar ao usuário um maior entendimento sobre os alimentos (macronutrientes) e compreender se suas escolhas alimentares estão balanceadas: "O conhecimento da composição dos alimentos consumidos no Brasil é fundamental para se alcançar a segurança alimentar e nutricional. As informações de composição de alimentos são pilares básicos para a educação nutricional e a avaliação da ingestão de nutrientes de indivíduos." (Tabela Brasileira de Composição de Alimentos – TACO, 4ª edição revisada e ampliada).

 Os dados necessários foram obtidos através do Kaggle, sendo o dataset escolhido: [Composição nutricional de alimentos - TACO](https://www.kaggle.com/datasets/ispangler/composio-nutricional-de-alimentos-taco). Nele temos dados sobre a composição dos principais alimentos consumidos no Brasil, baseado em um plano de amostragem que garante valores representativos, com análises realizadas por laboratórios com capacidade analítica comprovada. 


### Decisões de design

Inicialmente procuramos entender os dados e o que seria mais interessante a ser apresentado. Como a base principal de nossa alimentação é composta por carboidratos, proteínas e gorduras (macronutrientes), optamos por trabalhar em cima desses valores. 

A ideia central era permitir ao usuário uma experiência na qual ele pudesse, além de filtrar os alimentos por quantidade de macronutrientes, conseguisse, de modo geral, ter alguma informação sobre o quão adequada é a sua refeição.

Para isso, iniciamos desenvolvendo alguns filtros que permitem ao usuário selecionar os alimentos que ele deseja visualizar: podem ser escolhidos até 3 alimentos, indicar as quantidades que serão consumidas e, a partir disso, o sistema calcula a quantidade de macronutrientes que serão ingeridos. A seleção dos alimentos é feita através de um dropdown, que, inicialmente, contém todos os alimentos presentes no dataset. Contudo, como são muitos, apenas esse tipo de solução seria ineficiente. Assim, adicionamos a opção de escrever o nome do alimento que se deseja buscar, e o sistema filtra os alimentos que contém o texto digitado. 

Também adicionamos na visualização um violin plot (primordialmente, a ideia era um box plot, contudo, algumas críticas indicaram que ele poderia ser difícil de interpretar e, nesse caso, realmente concordamos que um violin plot seria mais compreensível, além de podermos adicionar um tooltip para cada elemento e ver sua posição, isso é, a quantidade de macronutriente presente), útil para entender a distribuição dos dados e, a partir dela, poder selecionar os alimentos que gostaria de ter em sua refeição (por exemplo, alimentos com mais proteína, menos gordura, etc). Portanto, no violin plot adicionamos a funcionalidade de selecionar os pontos a partir de um brush, e, diante disso, o dropdown é atualizado com os alimentos que pertencem ao intervalo escolhido. Ao selecionar cada alimento, deve ser indicado qual sua numeração (1, 2 ou 3), também feito a partir de um dropdown e adicioná-lo à lista de alimentos que serão consumidos a partir do botão "Confirmar".

Ainda, a quantidade de macronutrientes que serão ingeridos é calculada a partir das porções que o usuário deseja consumir dos alimentos escolhidos. Essas porções são indicadas através de um slider. Com esses dados preenchidos, é possível mostrar ao usuário, a partir de um gráfico de barras, o total de cada macronutriente em sua escolha.

Como desejava-se que o usuário pudesse ter uma noção geral sobre a qualidade de sua refeição, adicionamos mais algumas opções de preenchimento, onde são escolhidas as proporções desejadas de macronutrientes (por padrão estão definidas como 25% para gorduras, 25% para proteínas e 50% para carboidratos, recomendações da nutricionista Isolda Vasconcelos em [Saúde e Nutrição](https://www.boasaude.com.br/nutricao/15404/qual-a-proporcao-de-proteina-e-carboidratos-ideal-nas-refeicoes.html)), indicação do peso corporal, quantidade de refeições por dia (por padrão definida como 3) e a quantidade de proteína por massa corporal que você ingerir por dia (por padrão definida como 1.0). A partir desses elementos, é possível calcular, de maneira geral, a quantidade de cada macronutriente que deve ser ingerida por refeição, e, a partir disso, indicar, pelas cores do gráfico, se a refeição está balanceada ou não. Essas cores foram escolhidas por, em geral, associarmos a cor verde a algo que está adequado, vermelho em excesso e amarelo para escassez.

### Uma visão geral do processo de desenvolvimento.

O processo de desenvolvimento foi feito em conjunto, onde cada um dos integrantes do grupo contribuiu com ideias e sugestões. A partir disso, foram feitos alguns esboços de como seria a visualização, e, então, a implementação. Iniciamos usando o "Live Share" do VSCode, porém, posteriormente, seguimos para Observable, onde foi possível trabalhar de forma mais eficiente e organizada.

De começo, passamos bastante tempo entendendo como eram as funcionalidades do D3.js, bem como implementar as interações/conexões, processos nos quais passamos a maior parte do tempo. Antes do MVP, foram cerca de 12 horas de trabalho por integrante. Após o MVP, foram cerca de mais 60 horas, sendo que na maior parte do tempo nos reunimos para poder discutir algumas ideias e dúvidas que surgiam.


### Links importantes
* [Notebook observable](https://observablehq.com/d/ffb89fcb60d326fa)
* [Página do projeto final](https://fgv-vis-2023.github.io/assignment-3-nutricao_em_um_olhar/)
* [Links do MVP](https://fgv-vis-2023.github.io/assignment-3-nutricao_em_um_olhar/links_mvp.html)
