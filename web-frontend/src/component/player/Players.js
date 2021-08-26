import React, { Component } from 'react'
import PlayerService from '../../service/PlayerService';
import PlayerForm from './PlayerForm';
import PlayerItem from './PlayerItem';
import { connect } from 'react-redux'
import * as playerAction from "../../redux/action/player"
import ClubService from '../../service/ClubService';
import { Divider, Empty } from 'antd';

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            visible: false,
            action: 0, //0-> create, 1-> update,
            page: 0,
            size: 5,
            cbxClubData: [],
            clubFilter: 0,
            countAll: 0,
            sort: true, // 0 => asc, 1=> desc,
            searchAble: false,
            txtSearchName: "",
            txtSearchNation: ""
        }
    }

    componentDidMount = () => {
        this.page(this.state.page, this.state.size);
        this.filToCbxClub();
        this.countAll();
    }

    countAll = () => {
        PlayerService.countAll()
            .then(response => response.text())
            .then(result => {
                this.setState({
                    countAll: Number(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    countByClub = (club) => {
        PlayerService.countByClub(club.cid)
            .then(res => res.text())
            .then(rs => {
                this.setState({
                    countAll: Number(rs)
                })
            })
    }

    filToCbxClub = () => {
        ClubService.getAll()
            .then(response => response.text())
            .then(result => {
                var { data } = JSON.parse(result)
                this.setState({
                    cbxClubData: data
                })
            })
            .catch(error => console.log('error', error));
    }

    page = (page, size) => {
        PlayerService.page(page, size, this.state.sort)
            .then(response => response.text())
            .then(result => {
                var { content } = JSON.parse(result).data;
                this.props.setListPlayer(content)
            })
            .catch(error => console.log('error', error));
    }

    prev = () => {
        var { page, clubFilter, size, searchAble } = this.state
        if (page > 0) {
            if (!searchAble) {
                if (clubFilter === 0) {
                    this.page(this.state.page - 1, size)
                }
                else {
                    this.findByClubId(clubFilter, page - 1, size)
                }
            }
            else {
                this.search(page - 1, size)
            }
            this.setState({
                page: page - 1
            })
        }
    }

    next = () => {
        var { clubFilter, page, size, searchAble } = this.state;
        if (this.props.listPlayer.length >= size) {
            if (!searchAble) {
                if (clubFilter === 0) {
                    this.page(page + 1, size)
                    this.setState({
                        page: page + 1
                    })
                }
                else {
                    this.findByClubId(clubFilter, page + 1, size)
                    
                }
            }
            else {
                this.search(page + 1, size)
            }
            this.setState({
                page: page + 1
            })
        }
    }

    showDrawer = (action) => {
        this.setState({
            visible: true,
            action: action
        });
    };

    openToUpdate = () => {
        this.showDrawer(1)
    }

    openToCreate = () => {
        const playerForm = {
            nation: "",
            born: "1987-06-24 00:00:00",
            rate: 1,
            sal: 0,
            avt: "newplayer.jsp",
            status: 1,
            club: 0,
            pid: -1,
            pname: "",
            pnum: 10
        }
        this.props.setPlayerForm(playerForm);
        this.showDrawer(0);
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    findByClubId = (club, page, size) => {
        PlayerService.findByClubId(club.cid, page, size, this.state.sort)
            .then(res => {
                return res.text();
            })
            .then(rs => {
                var { data } = JSON.parse(rs);
                this.props.setListPlayer(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    changCbxClub = (e) => {
        var club = JSON.parse(e.target.value);
        var { size } = this.state;
        this.setState({
            clubFilter: club
        })
        if (club === 0) {
            this.page(0, this.state.size);
            this.countAll();
        }
        else {
            this.findByClubId(club, 0, size);
            this.countByClub(club)
            this.setState({
                page: 0
            })
        }
    }

    changeSize = (e) => {
        var size = Number(e.target.value)
        this.setState({
            size: size
        })
        var { clubFilter, page, searchAble } = this.state;
        if (!searchAble) {
            if (clubFilter === 0) {
                this.page(page, size)
            }
            else {
                this.findByClubId(clubFilter, page, size)
            }
        }
        else {
            this.search(page, size)
        }
    }

    sortByName = () => {
        var { page, size, clubFilter, sort, searchAble } = this.state

        this.setState({
            sort: !sort
        })
        if (!searchAble) {
            if (clubFilter === 0) {
                this.page(page, size)
            }
            else {
                this.findByClubId(clubFilter, page, size)
            }
        }
        else {
            this.search(page, size)
        }
    }

    pageForChild = () => {
        var { page, size, clubFilter } = this.state
        if (clubFilter === 0) {
            this.page(page, size)
        } else {
            this.findByClubId(clubFilter, page, size)
        }
    }

    search = (page, size) => {
        var {txtSearchName, txtSearchNation} = this.state
        console.log("name: " + txtSearchName)
        console.log("nation: " + txtSearchNation)
        PlayerService.search(txtSearchName, txtSearchNation, page, size, this.state.sort)
            .then(response => response.text())
            .then(result => {
                var data = JSON.parse(result).data;
                this.props.setListPlayer(data);
                this.setState({
                    searchAble: true
                })
            })
            .catch(error => console.log('error', error));
    }

    onSearch = () => {
        this.search(0, this.state.size)
    }

    clearSearch = () => {
        this.setState({
            searchAble: false,
            txtSearchName: "",
            txtSearchNation: ""
        })
    }

    onChangeSearch = (e) => {
        var {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {

        var { listPlayer } = this.props;
        var { cbxClubData } = this.state
        var elements = listPlayer.map((val, ind) => {
            return <PlayerItem key={ind} playerItem={val} openToUpdate={this.openToUpdate} />
        })

        var cbxClubOptions = cbxClubData.map((club, index) => {
            return <option key={index} value={JSON.stringify(club)}>{club.cname}</option>
        })

        return (
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>Player <b>Management</b></h2>
                                </div>
                                <div className="col-sm-7">
                                    <span className="btn btn-secondary">
                                        <i className="material-icons">&#xE147;</i>
                                        <span onClick={this.openToCreate}>Add New Player</span>
                                    </span>
                                    <select className="btn btn-secondary" onChange={this.changCbxClub}>
                                        <option value={0}>Choose club</option>
                                        {cbxClubOptions}
                                    </select>
                                    <Divider />
                                    <div style={{ alignItems: 'center ' }}>
                                        <span onClick={this.onSearch} className="btn btn-secondary">
                                            <i class="material-icons bi bi-search"></i>Search
                                        </span>
                                        <span onClick={this.clearSearch} className="btn btn-secondary">
                                            <i class="material-icons bi bi-arrow-repeat"></i>Clear
                                        </span>


                                        <input style={{ color: 'black', border: '1px solid lightgray', float: 'right', marginLeft: '10px', marginTop: '5px' }} placeholder="enter player nation" type='text' 
                                        name="txtSearchNation" value={this.state.txtSearchNation} onChange={this.onChangeSearch}
                                        />
                                        <input style={{ color: 'black', border: '1px solid lightgray', float: 'right', marginLeft: '10px', marginTop: '5px' }} placeholder="enter player name" type='text' 
                                        name="txtSearchName" value={this.state.txtSearchName} onChange={this.onChangeSearch}
                                        />
                                        
                                    </div>
                                    <PlayerForm pageForChild={this.pageForChild} visible={this.state.visible} action={this.state.action} onClose={this.onClose} />
                                </div>
                            </div>
                        </div>
                        {
                            listPlayer.length === 0 ? <Empty /> : <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th></th>
                                        <th>Name <span onClick={this.sortByName}>{this.state.sort === true ? <i class="bi bi-sort-alpha-down"></i> : <i class="bi bi-sort-alpha-up"></i>}</span></th>
                                        <th>Nation</th>
                                        <th>Born</th>
                                        <th>Rank</th>
                                        <th>Club</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elements}
                                </tbody>
                            </table>
                        }

                        <div className="clearfix">
                            <div className="hint-text">Showing
                                <select defaultValue={5} onChange={this.changeSize} style={{ fontSize: '13px' }} className="btn btn-outline p-0">
                                    <option value={1}>1</option>
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={15}>15</option>
                                    <option value={20}>20</option>
                                </select>
                                out of <b>{this.state.countAll}</b> players</div>
                            <ul className="pagination">
                                <li className="page-item"><span className="page-link" onClick={this.prev}>Previous</span></li>
                                <li className="page-item"><span className="page-link">{this.state.page + 1}</span></li>
                                <li className="page-item"><span className="page-link" onClick={this.next}>Next</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playerForm: state.playerForm,
        listPlayer: state.listPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setListPlayer: listPlayer => {
            dispatch(playerAction.setListPlayer(listPlayer))
        },
        setPlayerForm: player => {
            dispatch(playerAction.setPlayerForm(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
