function calcular(tipo, valor) {
    if(tipo === 'acao'){
        if (valor === 'c'){
            document.getElementById('visor').value = ''
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('visor').value += valor
        }

        if (valor === '='){
            var valor_campo = eval(document.getElementById('visor').value)

            document.getElementById('visor').value = valor_campo
        }
    } else if (tipo === 'valor'){
        document.getElementById('visor').value += valor
    }
        
  }