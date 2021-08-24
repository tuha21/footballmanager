import React, { Component } from 'react'
import PlayerService from '../../service/PlayerService';
import PlayerForm from './PlayerForm';
import PlayerItem from './PlayerItem';
import { connect } from 'react-redux'
import * as playerAction from "../../redux/action/player"

class Players extends Component {

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            visible: false,
            action: 0, //0-> create, 1-> update,
            page: 0
        }
    }

    componentDidMount = () => {
        this.page(this.state.page, 5);
    }

    page = (page, size) => {
        PlayerService.page(page, size)
            .then(response => response.text())
            .then(result => {
                var { content } = JSON.parse(result).data;
                this.props.setListPlayer(content)
            })
            .catch(error => console.log('error', error));
    }

    prev = () => {
        var { page } = this.state
        if (page > 0) {
            this.page(this.state.page - 1, 5)
            this.setState({
                page: page - 1
            })
        }
    }

    next = () => {
        var { page } = this.state
        if (this.props.listPlayer.length >= 5) {
            this.page(this.state.page + 1, 5)
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
            avt: "",
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

    render() {

        var { listPlayer } = this.props;

        var elements = listPlayer.map((val, ind) => {
            return <PlayerItem key={ind} playerItem={val} openToUpdate={this.openToUpdate} />
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
                                        <span onClick={this.openToCreate}>Add New User</span>
                                    </span>
                                    <span className="btn btn-secondary"><i className="material-icons">&#xE24D;</i>
                                        <span>Export to Excel</span>
                                    </span>
                                    <PlayerForm visible={this.state.visible} action={this.state.action} onClose={this.onClose} />
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
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
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>30</b> entries</div>
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
