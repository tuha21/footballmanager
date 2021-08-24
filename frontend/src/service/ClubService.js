class ClubService {

    getAll = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyOTYyMDk3MywiZXhwIjoxNjMwMjI1NzczfQ.nsLqB0YUUxaMoR5F6gci5nfDC7Zyiwwv_RGOKGEUbWkmQTtdI9_2CTJoCjiUxrp9gFwfVw1D7ypfBxfHYfckDw");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
            {
                "property": "loc",
                "direction": "desc"
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

}

export default new ClubService();