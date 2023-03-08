
const search = document.querySelector('.search');

const submit = document.querySelector('.form');

submit.addEventListener('submit', (e) => {

    e.preventDefault()

    const data = document.querySelector('.search').value;

    document.querySelector('.search').value = "";

    todo(data);

})


function todo(item) {

    let list = document.createElement('div');

    list.innerHTML = `
    
    <ul class="to-dobox">
        <li>☺ ${item} ☺
                <i class="fas fa-times"></i>
            </li>
        </ul>
        
        `

    list.addEventListener('click', function addclass() {

        this.classList.toggle('done')
    })


    list.querySelector('i').addEventListener('click', () => {

        list.remove()
    })

    const parent = document.querySelector('.to-dobox')

    parent.appendChild(list)

    list.className = "mylist"

}



