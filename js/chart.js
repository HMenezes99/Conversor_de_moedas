
const data = {
    labels: [1, 5, 15, 30],
    datasets: [{
        label: 'Variação',
        data: [5.3, 5.2, 5.1, 5.0],
        fill: false,
        borderColor: '#535154',
        tension: 0.1,
    }],
};

new Chart(document.getElementById('variationCoin'), {
    type: 'line',
    data,
}
);
setupSelect()
function setupSelect(){
    document.getElementById ('from').addEventListener('change', ()=> {
        getCurrency()
    })
    
    document.getElementById ('to').addEventListener('change', ()=> {
        getCurrency()
    })
}
function getCurrency() {
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
    if(from === to) return
    fetch(`https://economia.awesomeapi.com.br/json/daily/${from}-${to}/30`, {
        method: 'GET',
    }).then((response) => {
        response.json().then((data) => [
            console.log(data)
        ])
    })

}