exports.valpool = function(datas) {
    for (var i in datas) {
        console.log(datas[i]);
        var row = `<td>${datas[i].pname}</td>
           <td>${datas[i].aadharno}</td>
           <td>${datas[i].Age}</td>
           <td>${datas[i].infection}</td>
           <td>${datas[i].address}</td>
           <td>${datas[i].city}</td>
           <td>${datas[i].state}</td>
           <td>${datas[i].bg}</td>`
    }
    console.log(row);

}