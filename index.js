const week = [
    {
        day: "mon",
        value: 82.33,
        tamanho: "45px" 
    },
    {
        day: "tue",
        value: 82.33,
        tamanho: "105px" 
    },
    {
        day: "wed",
        value: 82.33,
        tamanho: "30px" 
    },
    {
        day: "thu",
        value: 82.33,
        tamanho: "150px" 
    },
    {
        day: "fri",
        value: 82.33,
        tamanho: "75px"   
    },
    {
        day: "sat",
        value: 82.33,
        tamanho: "60px" 
    },
    {
        day: "sun",
        value: 82.33,
        tamanho: "30px"   
    },
];

const grafweek = document.querySelector('.graf-week')

window.addEventListener('DOMContentLoaded', ()=>{
    let displayWeek = week.map( (item) =>{
        return `
        <style>
        .graf-${item.day}{

            background-color: #EC755D;
            height: ${item.tamanho};
            width: 45px;
            border-radius: 7px;
            
        }
        <div class="graf-week">
        <div class="graf-${item.day}">
          <div class="graf-${item.day}"></div>
          <p>${item.day}</p>
        </div>
        </div> 
        `
    } )

    displayWeek = displayWeek.join("")
    console.log(displayWeek)

    grafweek.innerHTML = displayWeek
})

