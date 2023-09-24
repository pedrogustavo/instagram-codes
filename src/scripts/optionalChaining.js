const heroesDC = [
  {
    id: 1,
    name: "Superman",
    powers: ["Super força", "Voo", "Visão de calor"],
    secretIdentity: {
      name: "Clark Kent",
      occupation: "Repórter",
    },
  },
  {
    id: 2,
    name: "Batman",
    powers: ["Inteligência", "Habilidade em artes marciais", "Tecnologia avançada"],
    secretIdentity: {
      name: "Bruce Wayne",
      occupation: "Empresário",
    },
    transportation: {
      name: 'Batmóvel'
    }
  },
  {
    id: 3,
    name: "Mulher Maravilha",
    powers: ["Força sobre-humana", "Laço da verdade", "Voo"],
    secretIdentity: {
      name: "Diana Prince",
      occupation: "Diplomata",
    },
    transportation: {
      name: 'Jato invisível'
    }
  }
]


const heroesList = document.getElementById('heroes-list')

heroesDC.forEach(({ name, id }) => {
  const listItem = document.createElement('div')
  listItem.className = 'item'
  listItem.setAttribute('data-id', id)
  listItem.textContent = name

  heroesList.appendChild(listItem)
})

document.querySelectorAll('.item').forEach(element => {
  element.addEventListener('click', e => {
    const hero = heroesDC.find(({ id }) => id == e.target.dataset.id)
    document.getElementById('hero-details').innerHTML = `
    <table class="ui celled table">
      <thead>
        <tr>
          <th colspan="2">${hero.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Poderes</b></td>
          <td>${hero.powers.join(', ')}</td>
        </tr>
        <tr>
          <td><b>Identidade secreta</b></td>
          <td>${hero.secretIdentity.name}<br/>${hero.secretIdentity.occupation}</td>
        </tr>
        <tr>
          <td><b>Veículo</b></td>
          <td>${hero.transportation?.name}</td>
        </tr>
      </tbody>
    </table>
    `
  })
})

const batman = {
  name: "Batman",
  powers: ["Inteligência", "Habilidade em artes marciais", "Tecnologia avançada"],
  secretIdentity: {
    name: "Bruce Wayne",
    occupation: "Empresário",
  }
}

console.log(batman.sidekick?.name)
