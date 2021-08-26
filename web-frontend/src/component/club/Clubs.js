import React, { Component } from 'react'
import ClubItem from './ClubItem'
import * as clubAct from '../../redux/action/club'
import { connect } from 'react-redux'
import ClubService from '../../service/ClubService'
import ClubForm from './ClubForm'

class Clubs extends Component {

    constructor (props) {
        super(props);
        this.state = {
            visible : false,
            action : 0, //0 : 'add', 1 : 'upd'
        }
    }

    componentDidMount = () => {
        this.getAll()
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

    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    openToCreate = () => {
        const clubForm = {
            std: "",
            loc: "",
            mgr: "",
            pres: "",
            logo: "",
            cname: "",
            cid: -1,
            fder: "",
            fded: "1987-06-24 00:00:00"
        }
        this.props.setClubForm(clubForm);
        this.showDrawer(0);
    }

    getAll = () => {
        ClubService.getAll()
        .then(res => {
            return res.text();
        })
        .then(rs => {
            var listClub = JSON.parse(rs).data
            console.log(listClub)
            this.props.setListClub(listClub)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {

        var {listClub} = this.props
        var elements = listClub.map((club, index) => {
            return <ClubItem key={index} club={club} onClose={this.onClose} openToUpdate={this.openToUpdate}/>
        })

        return (
            <div className="container-xl">
                <ClubForm onClose={this.onClose} visible={this.state.visible} action={this.state.action}/>
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h2>User <b>Management</b></h2>
                                </div>
                                <div className="col-sm-7">
                                    <span className="btn btn-secondary">
                                        <i className="material-icons">&#xE147;</i>
                                        <span onClick={this.openToCreate}>Add New Club</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Founded</th>
                                    <th>Founder</th>
                                    <th>Manager</th>
                                    <th>Location</th>
                                    <th>Arena</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elements}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item"><span className="page-link" onClick={this.prev}>Previous</span></li>
                                <li className="page-item"><span className="page-link">{ }</span></li>
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
        listClub: state.listClub
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setListClub : listClub => {
            dispatch(clubAct.setListClub(listClub))
        },
        setClubForm : club => {
            dispatch(clubAct.setClubForm(club))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Clubs)