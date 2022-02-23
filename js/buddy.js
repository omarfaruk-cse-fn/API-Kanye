const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => disolayBuddies(data))
}

const disolayBuddies = (data) => {
    const buddies = data.results
    const buddyDiv = document.getElementById('buddies')
    for (buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}  Email: ${buddy.email}`
        buddyDiv.appendChild(p)
    }
}