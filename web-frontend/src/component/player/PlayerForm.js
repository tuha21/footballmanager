import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, message, Upload } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import * as playerAc from '../../redux/action/player'
import ClubService from '../../service/ClubService';
import {
    UploadOutlined
} from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import PlayerService from '../../service/PlayerService';

const { Option } = Select;

class PlayerForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cbxClubData: [],
            image: null
        }
    }

    componentDidMount = () => {
        this.filToCbxClub();
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

    onClose = () => {
        this.props.onClose();
    };

    submit = () => {
        var { action } = this.props;
        action === 0 ? this.createNewPlayer() : this.updatePlayer();
    }

    changeDate = (d, ds) => {
        var { playerForm } = this.props;
        var newPlayerForm = {
            nation: playerForm.nation,
            born: ds,
            rate: playerForm.rate,
            sal: playerForm.sal,
            avt: playerForm.avt,
            status: playerForm.status,
            club: playerForm.club,
            pid: playerForm.pid,
            pname: playerForm.pname,
            pnum: playerForm.pnum
        }
        this.props.setPlayerForm(newPlayerForm);;
    }

    changeForm = (e) => {
        var { playerForm } = this.props;
        var { name, value } = e.target
        var newPlayerForm = {
            nation: name === "nation" ? value : playerForm.nation,
            born: name === "born" ? value : playerForm.born,
            rate: name === "rate" ? value : playerForm.rate,
            sal: name === "sal" ? Number(value) : playerForm.sal,
            avt: playerForm.avt,
            status: 1,
            club: playerForm.club,
            pid: playerForm.pid,
            pname: name === "pname" ? value : playerForm.pname,
            pnum: name === "pnum" ? Number(value) : playerForm.pnum
        }
        this.props.setPlayerForm(newPlayerForm);
    }

    changeCbxClub = (val) => {
        var { playerForm } = this.props;
        var club = JSON.parse(val)
        var newPlayerForm = {
            nation: playerForm.nation,
            born: playerForm.born,
            rate: playerForm.rate,
            sal: playerForm.sal,
            avt: playerForm.avt,
            status: playerForm.status,
            club: club,
            pid: playerForm.pid,
            pname: playerForm.pname,
            pnum: playerForm.pnum
        }
        if (club !== 0) {
            this.props.setPlayerForm(newPlayerForm);
        }
    }

    changeCbxRate = (val) => {
        var { playerForm } = this.props;
        var newPlayerForm = {
            nation: playerForm.nation,
            born: playerForm.born,
            rate: val,
            sal: playerForm.sal,
            avt: playerForm.avt,
            status: playerForm.status,
            club: playerForm.club,
            pid: playerForm.pid,
            pname: playerForm.pname,
            pnum: playerForm.pnum
        }
        this.props.setPlayerForm(newPlayerForm);
    }

    changUpload = {
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
        },
        onChange: ({ fileList }) => {
            if (fileList[0]) {
                this.setState({
                    image: fileList[0],
                })
                let { playerForm } = this.props;
                var newPlayerForm = {
                    nation: playerForm.nation,
                    born: playerForm.born,
                    rate: playerForm.rate,
                    sal: playerForm.sal,
                    avt: fileList[0].name,
                    status: playerForm.status,
                    club: playerForm.club,
                    pid: playerForm.pid,
                    pname: playerForm.pname,
                    pnum: playerForm.pnum
                }
                this.props.setPlayerForm(newPlayerForm);
            }
            else {
                this.setState({
                    image: null,
                })
                let { playerForm } = this.props;
                let newPlayerForm = {
                    nation: playerForm.nation,
                    born: playerForm.born,
                    rate: playerForm.rate,
                    sal: playerForm.sal,
                    avt: "newplayer.jpg",
                    status: playerForm.status,
                    club: playerForm.club,
                    pid: playerForm.pid,
                    pname: playerForm.pname,
                    pnum: playerForm.pnum
                };
                if (this.props.action === 1) {
                    newPlayerForm.avt = this.props.listPlayer[this.getFirstAvt(playerForm.pid)].avt
                }
                this.props.setPlayerForm(newPlayerForm);
            }
        },
    };

    getFirstAvt = (id) => {
        var { listPlayer } = this.props;
        var index1 = -1;
        listPlayer.forEach((element, index) => {
            if (element.pid === id) {
                index1 = index
            }
        });
        return index1;
    }

    isValid = () => {
        var { playerForm } = this.props;
        if (playerForm.pname === "") {
            alert("All is required")
            return false;
        } else if (playerForm.born === "") {
            alert("All is required")
            return false;
        } else if (playerForm.club === 0) {
            alert("All is required")
            return false;
        } else if (playerForm.nation === "") {
            alert("All is required")
            return false;
        } else if (playerForm.rate === 0) {
            alert("All is required")
            return false;
        } else if (playerForm.sal <= 0) {
            alert("All is required")
            return false;
        }
        return true;
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

    createNewPlayer = () => {
        if (this.isValid()) {
            if (this.state.image !== null) {
                var newPlayer = this.props.playerForm;
                PlayerService.create(newPlayer)
                    .then(response => response.text())
                    .then(result => {
                        this.upload()
                            .then(res => {
                                this.props.createNewPlayer(JSON.parse(result).data);
                                alert("conplete");
                                this.props.pageForChild();
                                this.onClose();
                            })
                            .catch(err => {
                                alert("Serve is not response: " + err)
                            })
                    })
                    .catch(error => console.log('error', error));
            }
            else {
                alert("Image is requierd")
            }
        }
    }

    updatePlayer = () => {
        if (this.isValid()) {
            var newPlayer = this.props.playerForm;
            PlayerService.update(newPlayer)
                .then(response => response.text())
                .then(result => {
                    if (JSON.parse(result).status === 403) {
                        console.log(JSON.parse(result))
                        alert(JSON.parse(result).message);
                    }
                    else {
                        if (this.state.image === null) {
                            this.props.updatePlayer(JSON.parse(result).data);
                        }
                        else {
                            this.upload()
                                .then(res => {
                                    this.props.updatePlayer(JSON.parse(result).data);
                                })
                                .catch(err => {
                                    alert("Serve is not response: " + err)
                                })
                        }
                        alert("conplete")
                        this.onClose();
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    upload = () => {
        if (this.state.image !== null) {
            var data = new FormData();
            data.append("files", this.state.image.originFileObj);
            return axios.post("http://localhost:6769/file/save", data,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                })
        }
    }


    render() {
        const dateFormat = 'YYYY-MM-DD 00:00:00';
        var { cbxClubData } = this.state;
        var cbxClubOptions = cbxClubData.map((club, ind) => {
            return <Option key={ind} value={JSON.stringify(club)}>{club.cname}</Option>
        })
        var { playerForm } = this.props
        var { rate } = playerForm
        return (
            <>
                <Drawer
                    title={this.props.action === 0 ? "Create new player" : "Update Player"}
                    width={720}
                    onClose={this.onClose}
                    visible={this.props.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.test} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button type="primary" onClick={this.submit}>
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            {/* number */}
                            <Col span={12}>
                                <object style={{ width: "150px", height: "150px", objectFit: 'cover' }}
                                    data={this.props.action === 0 ? "http://localhost:6769/file/read/newplayer.jpg" : "http://localhost:6769/file/read/" + playerForm.avt} type="image/png">
                                    <img style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: 'cover' }} alt="avt.jpg"
                                        src="http://localhost:6769/file/read/newplayer.jpg"></img>
                                </object>

                                <Form.Item
                                    // name="dateTime"
                                    label=" "
                                    rules={[{ required: true, message: 'Please enter image url' }]}
                                >
                                    <Upload {...this.changUpload} action="http://localhost:6769/file/save" listType="picture">
                                        <Button style={{ width: "150px" }} icon={<UploadOutlined />}>Upload png only</Button>
                                    </Upload>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {/* name */}
                            <Col span={12}>
                                <Form.Item
                                    // name="pname"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter fullname' }]}
                                >
                                    <Input placeholder="Please enter fullname" name="pname" onChange={this.changeForm} value={playerForm.pname} />
                                </Form.Item>
                            </Col>

                            {/* nation */}
                            <Col span={12}>
                                <Form.Item
                                    // name="nation"
                                    label="Nation"
                                    rules={[{ required: true, message: 'Please enter nation' }]}
                                >
                                    <Input placeholder="Please enter nation" name="nation" onChange={this.changeForm} value={playerForm.nation} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {/* born */}
                            <Col span={12}>
                                <Form.Item
                                    // name="born"
                                    label="Born"
                                    rules={[{ required: true, message: 'Please enter date' }]}
                                >
                                    <DatePicker style={{ width: '100%' }} value={moment(playerForm.born, dateFormat)} format={dateFormat} onChange={this.changeDate} />
                                </Form.Item>
                            </Col>
                            {/* rank */}
                            <Col span={12}>
                                <Form.Item
                                    // name="rate"
                                    label="Rank"
                                    rules={[{ required: true, message: 'Please choose rank' }]}
                                >
                                    <Select placeholder="Please choose rank" name="rate" onChange={this.changeCbxRate} value={rate}>
                                        <Option value={1}>Famous</Option>
                                        <Option value={2}>Star</Option>
                                        <Option value={3}>Legend</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {/* club */}
                            <Col span={12}>
                                <Form.Item
                                    // name="club"
                                    label="Club"
                                    rules={[{ required: true, message: 'Please choose the club' }]}
                                >
                                    <Select placeholder="Please choose the club" name="club" onChange={this.changeCbxClub} value={JSON.stringify(playerForm.club)}>
                                        <Option key={-1} value="0">Choose a club</Option>
                                        {cbxClubOptions}
                                    </Select>
                                </Form.Item>
                            </Col>
                            {/* salary */}
                            <Col span={12}>
                                <Form.Item
                                    // name="sal"
                                    label="Salary"
                                    rules={[{ required: true, message: 'Please choose the salary' }]}
                                >
                                    <Input type='number' placeholder="Please enter salary" name="sal" onChange={this.changeForm} value={playerForm.sal} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    // name="pnum"
                                    label="Number"
                                    rules={[{ required: true, message: 'Please choose the num' }]}
                                >
                                    <Input type='number' placeholder="Please enter number" name="pnum" onChange={this.changeForm} value={playerForm.pnum} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
    }
}

const mapStateTopProps = state => {
    return {
        playerForm: state.playerForm,
        listPlayer: state.listPlayer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNewPlayer: player => {
            dispatch(playerAc.createNewPlayer(player))
        },
        setPlayerForm: player => {
            dispatch(playerAc.setPlayerForm(player))
        },
        updatePlayer: player => {
            dispatch(playerAc.updatePlayer(player))
        },
        setListPlayer: listPlayer => {
            dispatch(playerAc.setListPlayer(listPlayer))
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(PlayerForm)

