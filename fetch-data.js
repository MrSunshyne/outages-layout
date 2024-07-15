// fetch data from  https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.latest.json

async function fetchData() {
    fetch('https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.latest.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data)
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData()

function displayData(data) {
    let today = data.today
    console.log(today)
    for (let i = 0; i < today.length; i++) {
        renderRow(today[i])
    }
}

function renderRow(day) {
    let display = document.getElementById('display')
    display.innerHTML += `
    <div class="card" style="--status-color: rgb(238, 206, 206);">
        <div class="description">
            <div class="time">
                3 HOURS AGO <span>FROM 09:00 TO 14:00</span>
            </div>
            <div class="locality">
                ${day.locality}
            </div>
            <div class="street">
                MORC BARACHOIS
            </div>
        </div>
        <div class="timer">
            <div class="time-label">
                Power will resume in
            </div>
            <div class="timer-countdown">
                2h 26m 47s
            </div>
        </div>
        <div class="illustration">
            <div class="status"></div>
        </div>
    </div>
    `
}