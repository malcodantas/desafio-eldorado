<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/273160434_4754489137919908_9153673695573801515_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OZI28MbDya0AX-8hdlv&_nc_ht=scontent.fnat1-1.fna&oh=00_AT-IH0E6nDOnpcedw8TboCtH-Ar9NgeSp7r2-NBCT1-7ow&oe=62509A4F" alt="Desafio eldorado"></a>
</p>

<h3 align="center">desafio-eldorado</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/malcodantas/desafio-eldorado)](https://github.com/malcodantas/desafio-eldorado/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/malcodantas/desafio-eldorado/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [Sobre](#about)
- [Rodando Projeto](#running)
- [Exemplos](#examples)


## 🧐 Sobre <a name = "about"></a>

## 🏁 Rodando projeto <a name = "running"></a>
Renomeie o arquivo .env.sample para .env e substitua as variáveis de ambiente dentro do aquivo com as credenciais do banco de dados.

```
cp .env.sample .env
```
### Instalando dependencias
Na pasta raiz do projeto, rode:
```
npm install
```
### Criação do banco de dados e rodando migrations
```
npm run createdb
npm run migrate
npm run seed
```

### Rodando API

```
npm run dev
```
## Exemplos de uso <a name = "examples"></a>
A API segue o modelo REST, utilizando um endpoint para cada entidade do sistema.


## /device
Para cadastros e consulta de dispositivos, no caso de cadastro(POST); ao menos 3 campos são obrigatórios *categoryId, color e partNumber*
exemplo:
```
{
	"categoryId":"2",
	"color":"orange",
	"partNumber":"10"
}
```
É importante lembrar que a categoria já deve existir antes do cadastro do dispositivo.

## /category
Para cadastro(POST) das categorias, esse end-point exige apenas um parâmetro *name*
exemplo:
```
{
	"name":"SmartPhone"
}
```
 ### Procurando por registro especifico
  Caso procure por um determinado *device* ou *category*, passe seu *id* como parâmetro dentro da url, exemplo:
/device/3 ou /category/2 
