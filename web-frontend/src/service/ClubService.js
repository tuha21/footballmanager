class ClubService {

    getAll = () => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
            {
                "property": "cName",
                "direction": "ASC"
            }
        ]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/club/getAll", requestOptions)  
    }

    create = (newClub) => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newClub);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/club/create", requestOptions)  
    }

    update = (club) => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(club);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/club/update", requestOptions)  
    }
}

export default new ClubService();