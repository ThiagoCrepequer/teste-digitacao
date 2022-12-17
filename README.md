# Teste de Digitacao
Um jogo baseado na ideia de aprimorar a digitação com palavras da língua portuguesa. Caso tenha interesse em testar, esse código está hospedado no site [teste-digitacao.crepequer.tk](https://teste-digitacao.crepequer.tk/)

## Demonstração

As regras são simples, por padrão você tem 15 segundos, a cada erro há uma perda de 1 segundo e caso complete uma palavra 1 segundo é adicionado ao tempo total

![GIF 17-12-2022 19-12-13](https://user-images.githubusercontent.com/45575737/208267825-57e896d7-1a18-49aa-9c96-808f0257a548.gif)
## API

Para conseguir uma maior aleatoriedade e quantidade de palavras, o mais simples e mais otimizado foi consumir a API [Dicionário Aberto](https://api.dicionario-aberto.net/index.html). 

#### Get random item

```
  GET /random
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `json` | Retorna uma palavra aleatória do dicionário português |




## Autor

- [@thiagocrepequer](https://www.github.com/thiagocrepequer)

