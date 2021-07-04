function aluguer() {
    const dias = document.getElementById('dias')
    const km = document.getElementById('km');
    const btn = document.getElementById('btn');
    const resp = document.getElementById('resposta');
    const car = document.getElementsByName('carros');



    car.forEach((caro) => {
        caro.addEventListener('click', selected)
    })

    function selected() {
        this.setAttribute('checked', 'checked');
        if (this === car[0]) {
            car[1].removeAttribute('checked');
        } else {
            car[0].removeAttribute('checked')
        }
    }

    btn.addEventListener('click', calc)

    function calc() {
        verificarEstadoInput();
        verificarCarro();
    }

    function verificarCarro() {
        if (!car[0].hasAttribute('checked') && (!car[1].hasAttribute('checked'))) {
            alert('selecione um dos carros')
        }
    }

    function verificarEstadoInput() {
        if (km.value === '' || dias.value === '') {
            resp.innerText = `Preencha os campos sao obrigatorios`;
        } else {
            resp.innerText = `O valor a ser pago e: ${calculo()}`;
        }
    }

    function calculo() {
        let calcKm;

        const diasValue = dias.value;
        const kmValue = km.value;

        const precoPopular = diasValue * 90;
        const precoLuxo = diasValue * 150;

        if (car[0].hasAttribute('checked')) {
            if (kmValue <= 100) calcKm = kmValue * 0.20;
            if (kmValue > 100) calcKm = kmValue * 0.10;
            calcKm += precoPopular;
        }

        if (car[1].hasAttribute('checked')) {
            if (kmValue <= 200) calcKm = kmValue * 0.30;
            if (kmValue > 200) calcKm = kmValue * 0.25;
            calcKm += precoLuxo;
        }

        return calcKm;
    }
}
aluguer()