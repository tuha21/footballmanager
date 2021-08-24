import { Tag } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as playerAc from '../../redux/action/player'

class PlayerItem extends Component {

    deletePlayer = () => {
        var {playerItem} = this.props
        this.props.deletePlayer(playerItem.pid)
    }

    editPlayer = () => {
        this.props.setPlayerForm(this.props.playerItem);
        this.props.openToUpdate();
    }

    render() {
        var {playerItem} = this.props;

        var rate = playerItem.rate === 1 ? <Tag color="green">Famous</Tag> : playerItem.rate === 2 ? <Tag color="magenta">Star</Tag> : <Tag color="gold">Legend</Tag>
        return (
            <tr>
                <td>{playerItem.pid}</td>
                <td>
                    <img src={"http://localhost:6769/file/read/" + playerItem.avt} className="avatar" alt="Avatar" />
                    <span>{playerItem.pname}</span>
                </td>
                <td>{playerItem.nation}</td>
                <td>{playerItem.born.substring(0,10)}</td>
                <td>{rate}</td>
                <td>{playerItem.club.cname}</td>
                <td>
                    <span className="settings" title="Settings" data-toggle="tooltip" onClick={this.editPlayer}><i
                        className="material-icons">&#xE8B8;</i></span>
                    <span className="delete" title="Delete" data-toggle="tooltip" onClick={this.deletePlayer}><i
                        className="material-icons">&#xE5C9;</i></span>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePlayer: playerId => {
            dispatch(playerAc.deletePlayer(playerId))
        },
        setPlayerForm: player => {
            dispatch(playerAc.setPlayerForm(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PlayerItem)
