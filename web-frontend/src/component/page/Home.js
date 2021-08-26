import React, { Component } from 'react'
class Home extends Component {

    render() {

        return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://image.thanhnien.vn/1024/uploaded/vietthong/2019_06_09/thumb_hfuw.jpg" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.fcbarcelona.com/fcbarcelona/photo/2020/10/06/063d21d3-2047-4e65-a545-a61f6e41fbd3/mini_3200x2000-DORSALS-20_21_ok_1.jpg" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://phantom-marca.unidadeditorial.es/74091d9666ebf6332446a5f67ff14295/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/06/16282527979871.jpg" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://e0.365dm.com/21/06/2048x1152/skysports-man-utd-manchester-united_5415962.jpg" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://e0.365dm.com/20/08/1600x900/skysports-liverpool-premier-league_5071428.jpg?20200819084933" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp3326073.png" className="d-block w-100" height="650" style={{ objectFit: 'cover' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}


export default Home