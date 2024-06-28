document.addEventListener('DOMContentLoaded', () => {
    const username = 'PedroQR';
    const apiUrl = `https://api.github.com/users/${username}`;

    // Buscar dados do perfil do usuário
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#profile-name').textContent = data.name;
            document.querySelector('#profile-avatar').src = data.avatar_url;
            document.querySelector('#profile-bio').textContent = data.bio;
            document.querySelector('#profile-email').href = `mailto:${data.email}`;
            document.querySelector('#profile-github').href = data.html_url;
            document.querySelector('#profile-linkedin').href = `https://linkedin.com/in/${data.blog}`;
        });

    // Buscar dados dos repositórios do usuário
    fetch(`${apiUrl}/repos`)
        .then(response => response.json())
        .then(data => {
            const reposContainer = document.querySelector('#repos');
            data.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.classList.add('col-md-4', 'mb-4');
                repoCard.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <a href="repo.html?repo=${repo.name}" class="btn btn-primary">Detalhes</a>
                        </div>
                    </div>
                `;
                reposContainer.appendChild(repoCard);
            });
        });

    // Nomes de usuários dos seus colegas
    const colleagues = ['naagaii', 'Fernanda-Sabino', 'Md1o1'];

    // Buscar dados dos colegas
    colleagues.forEach(colleague => {
        fetch(`https://api.github.com/users/${colleague}`)
            .then(response => response.json())
            .then(data => {
                const colleaguesContainer = document.querySelector('#colleagues');
                const colleagueCard = document.createElement('div');
                colleagueCard.classList.add('col-md-2', 'text-center', 'mb-4');
                colleagueCard.innerHTML = `
                    <img src="${data.avatar_url}" class="img-fluid rounded-circle" alt="${data.login}">
                    <p>${data.name || data.login}</p>
                    <a href="${data.html_url}" class="btn btn-primary" target="_blank">GitHub</a>
                `;
                colleaguesContainer.appendChild(colleagueCard);
            });
    });

    
});


