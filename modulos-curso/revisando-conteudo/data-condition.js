var data = new Date()
var diaSem = data.getDay()

diaSem = 7

switch (diaSem) {
    case 0:
        console.log('Hoje é domingo, tenha um bom dia!')
        break
    case 1:
        console.log('Hoje é segunda-feira, tenha um bom dia!')
        break
    case 2:
        console.log('Hoje é terça-feira, tenha um bom dia!')
        break
    case 3:
        console.log('Hoje é quarta-feira, tenha um bom dia!')
        break
    case 4:
        console.log('Hoje é quinta-feira, tenha um bom dia!')
        break
    case 5:
        console.log('Hoje é sexta-feira, tenha um bom dia!')
        break
    case 6:
        console.log('Hoje é sábado, tenha um bom dia!')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}