class PlayerService {

    token = localStorage.getItem("token");

    page = (page, size) => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
            {
                "property": "pId",
                "direction": "desc"
            }
        ]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/player/page?page=" + page + "&size=" + size, requestOptions)
    }

    create = (newPlayer) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(newPlayer);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/player/create", requestOptions)
    }

}

export default new PlayerService();