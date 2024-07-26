var hora = 1
if (hora <= 5) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa madrugada!')
} else if (hora <= 11) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Bom dia!')
} else if (hora <= 17) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa tarde!')
} else if (hora <= 23 ) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa noite!')
} else {
    console.log('ERRO! Provavelmente escolheu um horário acima de 24 horas')
    console.log('Por favor, selecione um horário válido para verificar a parte do dia')
}