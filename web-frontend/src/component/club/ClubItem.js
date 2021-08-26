import React, { Component } from 'react'
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../constant/const';
import * as clubAc from '../../redux/action/club'

class ClubItem extends Component {

    openToUpdate = () => {
        this.props.setClubForm(this.props.club)
        this.props.openToUpdate();
    }

    render() {
        var {club} = this.props;

        return (
            <tr>
                <td>{club.cid}</td>
                <td><img src={API_BASE_URL+"/file/read/"+club.logo} width={60} alt="Avatar" /></td>
                <td><span>{club.cname}</span></td>
                <td>{club.fded}</td>
                <td>{club.fder}</td>
                <td>{club.mgr}</td>
                <td>{club.loc}</td>
                <td>{club.std}</td>
                <td>
                    <span className="settings" title="Settings" data-toggle="tooltip" onClick={this.openToUpdate}><i
                        className="material-icons">&#xE8B8;</i></span>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        clubForm: state.clubForm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setClubForm: club => {
            dispatch(clubAc.setClubForm(club))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubItem)