import { API_BASE_URL } from "../constant/const";

class PlayerService {

    page = (page, size, sort) => {
        var token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        var direction = () => {
            return sort === true ? "ASC" : "DESC"
        }

        var raw = JSON.stringify([
            {
                "property": "pName",
                "direction": direction()
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

    create = newPlayer => {
        var token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
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

    update = player => {
        var token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(player);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/player/update", requestOptions)
    }

    delete = id => {
        var token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/player/delete/" + id, requestOptions)
    }

    findByClubId = (id, page, size, sort) => {
        var token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        var direction = () => {
            return sort === true ? "ASC" : "DESC"
        }
        var raw = JSON.stringify({
            "property": "pName",
            "direction": direction()
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch("http://localhost:6769/admin/player/findByClubId/" + id + "?page=" + page + "&size=" + size, requestOptions)
    }

    countAll = () => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        return fetch('http://localhost:6769/admin/player/countAll', requestOptions)
    }

    countByClub = (cid) => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        return fetch(API_BASE_URL + "/admin/player/countByClub/" + cid, requestOptions)
    }

    search = (pname, nation, page, size, sort) => {
        var token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + token);
        myHeaders.append("Content-Type", "application/json");
        var direction = () => {
            return sort === true ? "ASC" : "DESC"
        }
        var raw = JSON.stringify({
            "property": "pName",
            "direction": direction()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:6769/admin/player/findByPNameAndNation?pName="+pname+"&nation="+nation+"&page="+page+"&size=" + size, requestOptions)
    }

}

export default new PlayerService();