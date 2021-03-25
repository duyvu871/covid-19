function handleRenderTotal(data,arr,country = 'world') {
    
    let total , totalDeath , totalCases
    let title = ['Coronavirus Cases:','Deaths:','Recovered:']
    if (country === 'world') {
        let lengths = data.results
        for (let i = 0; i < lengths; i++) {
            total += data[i].cases.recovered           
        }        
    }else{
        let index = arr.indexOf(country)
        handleData(getFullData(data,index),title)
    }
}
function getFullData(data,index) {
    let dataOfIndex = data.response[index]
    return ({
        newCases:dataOfIndex.cases.new || 'none',
        topCases:dataOfIndex.cases['1M_pop'] || 'unknown',
        totalCases:dataOfIndex.cases.total||'unknown',
        totalCasesRecovered:dataOfIndex.cases.recovered || 'no one have case in this day',
        newDeath:dataOfIndex.deaths.new || 'no one die in this day',
        topDeath:dataOfIndex.deaths['1M_pop'] || 'unknown',
        totalDeath:dataOfIndex.deaths.total || 'unknown',
        topOfTest:dataOfIndex.tests['1M_pop'] || 'unknown',
        totalOftest:dataOfIndex.tests.total || 'unknown'
    })    
}
function handleData(obj,title) {
    document.querySelector('.render').innerHTML = `
    <div class="maincounter-wrap" style="margin-top:15px">
        <h1>${title[0]}</h1>
        <div class="maincounter-number">
        <span style="color:#aaa">${obj.totalCases}</span>
        </div>
    </div>
    <div class="maincounter-wrap" style="margin-top:15px">
        <h1>${title[1]}</h1>
        <div class="maincounter-number">
        <span>${obj.totalDeath}</span>
        </div>
    </div>
    <div class="maincounter-wrap" style="margin-top:15px;">
        <h1>${title[2]}</h1>
        <div class="maincounter-number" style="color:#8ACA2B ">
        <span>${obj.totalCasesRecovered}</span>
        </div>
    </div>
    `
}