'use strict'

const btnSave = document.querySelector('.btn_save')
const fName = document.getElementById('name')
const secName = document.getElementById('fname')
const birthday = document.getElementById('date')
const child = document.getElementById('check')
const worker = document.querySelector('select')
const org = document.getElementById('organization')
const dis = document.getElementById('discharge')
const dateac = document.getElementById('datew')
const trOld = document.querySelector('.string-clone')

let dateDeletes = document.querySelectorAll('.delete-button')
let dataItems = []

let dataI = {
    fName:  '',
    secName: '',
    birthday: 0,
    child: false,
    worker: '',
    org: '',
    dis: 0,
    date: ''
}

const startFunc = function () {
    fromLocalStorageFunc()
    render() 
}

const dataBring = function () {
    dataI.fName = fName.value
    dataI.secName = secName.value
    dataI.birthday = birthday.value
    dataI.child = child.value
    dataI.worker = worker.value
    dataI.org = org.value
    dataI.dis = dis.value
    dataI.date = dateac.value

    fName.value = ""
    secName.value =""
    birthday.value = ""
    child.value = ""
    worker.value = ""
    org.value = ""
    dis.value = ""
    dateac.value = ""

    dataItems.push(dataI)

    if (dataItems.length >= 1) {
        localStorage.setItem("dataItems", JSON.stringify(dataItems))
    }
    console.log(localStorage.dataItems);
    render()
}

const fromLocalStorageFunc = function () {
    dataItems = JSON.parse(localStorage.getItem("dataItems")) || []
}

const render = function () {
    fromLocalStorageFunc()
    table.innerHTML = `<tr class="string">
        <td class="block">Имя</td>
        <td class="block">Фамилия</td>
        <td class="block">Дата рождения</td>
        <td class="block">Наличие детей</td>
        <td class="block">Должность</td>
        <td class="block">Разряд</td>
        <td class="block">Дата принятия на работу</td>
        <td class="block"></td>
    </tr>
    <!-- /.output-string -->
    <tr class="output-string output-string-clone dNone">
        <td class="block block_name"></td>
        <td class="block block_secname"></td>
        <td class="block block_birthday"></td>
        <td class="block block_child"></td>
        <td class="block block_org"></td>
        <td class="block block_dis"></td>
        <td class="block block_date"></td>
        <td class="block block-button"><button class="block_button delete-button">Удалить</button></td>
    </tr>`
    dataItems.forEach(dataI => {
        const newTr = trOld.cloneNode(true)
        newTr.classList.remove('dNone')
    
        const tdName = newTr.querySelector('.block_name')
        const tdsecName = newTr.querySelector('.block_secname')
        const tdBirthday = newTr.querySelector('.block_birthday')
        const tdChild = newTr.querySelector('.block_child')
        const tdRole = newTr.querySelector('.block_org')
        const tdRank = newTr.querySelector('.block_dis')
        const tdDate = newTr.querySelector('.block_date')
        
        tdName.textContent = dataI.fNname
        tdsecName.textContent = dataI.secName
        tdBirthday.textContent = dataI.birthday
        if (child.checked) {
            tdChild.textContent = 'Есть'
        } else {
            tdChild.textContent = 'Нет'
        }
        tdRole.textContent = dataI.worker
        tdRank.textContent = dataI.dis
        tdDate.textContent = dataI.date
    
        table.append(newTr)
    })

    dateDeletes = document.querySelectorAll('.delete-button')

    dateDeletes.forEach((dataDelete, index) => {
        dataDelete.addEventListener("click", function () {
            dataItems.splice(index-1, 1)
            localStorage.setItem("dataItems", JSON.stringify(dataItems))
            if (dataItems.length === 0) {
              localStorage.clear()
            }
            render()
          })
    })
}

btnSave.addEventListener('click', (e) => {
    e.preventDefault()
    dataBring()
})

startFunc()

console.log(localStorage);