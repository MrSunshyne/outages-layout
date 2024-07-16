function isTherePower(from, to) {
    let now = new Date()
    let f = new Date(from)
    let t = new Date(to)

    // if power return true
    if (now > t) return true
    if (now < f) return true
    return false
}

function renderToPage(locality, street, from, to) {
    
    let formattedFrom = (new Date(from)).toLocaleTimeString()
    let formattedTo = (new Date(to)).toLocaleTimeString()

    let isNotDark = isTherePower(from, to)

    let color
    if (isNotDark) {
        color = 'rgb(0,255,0)'
    } else {
        color = 'rgb(255,0,0)'
    }

    let target = document.getElementById('display');

    target.innerHTML += `
            <div class="card" style="--status-color: ${color};">
                <div class="description">
                    <div class="time">
                        <span>FROM ${formattedFrom} TO ${formattedTo}</span>
                    </div>
                    <div class="locality">
                        ${locality}
                    </div>
                    <div class="street">
                        ${street}
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


function fetchData() {
    let ENDPOINT = 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.latest.json'

    fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
            let today = data.today

            for (let x = 0; x < today.length ; x++) {
                let row = today[x]
                renderToPage(row.locality, row.streets, row.from, row.to)
            }

        })
}

fetchData()