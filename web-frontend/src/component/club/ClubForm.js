import { Drawer, Form, Button, Col, Row, Input, DatePicker, message, Upload } from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as clubAc from '../../redux/action/club'
import moment from 'moment';
import ClubService from '../../service/ClubService'
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
class ClubForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    createNewClub = () => {
        // if (this.isValid()) {
        if (this.state.image !== null) {
            var newClub = this.props.clubForm;
            ClubService.create(newClub)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    this.upload()
                        .then(res => {
                            this.props.createNewClub(JSON.parse(result).data);
                            alert("complete");
                            this.props.onClose()
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
        // }
    }

    updateClub = () => {
        var { clubForm } = this.props;
        ClubService.update(clubForm)
            .then(res => {
                return res.text()
            })
            .then(rs => {
                if (this.state.image === null) {
                    this.props.updateClub(JSON.parse(rs).data);
                }
                else {
                    this.upload()
                        .then(res => {
                            this.props.updateClub(JSON.parse(rs).data);
                        })
                        .catch(err => {
                            alert("Serve is not response: " + err)
                        })
                }
                alert("conplete")
            })
            .catch(error => console.log('error', error));
    }

    changeForm = (e) => {
        var { clubForm } = this.props;
        var { name, value } = e.target
        var newClubForm = {
            std: name === "std" ? value : clubForm.std,
            loc: name === "loc" ? value : clubForm.loc,
            mgr: name === "mgr" ? value : clubForm.mgr,
            pres: name === "pres" ? value : clubForm.pres,
            logo: clubForm.logo,
            cname: name === "cname" ? value : clubForm.cname,
            cid: clubForm.cid,
            fder: name === "fder" ? value : clubForm.fder,
            fded: name === "fded" ? value : clubForm.fded,
        }
        this.props.setClubForm(newClubForm)
    }

    changDate = (d, ds) => {
        var { clubForm } = this.props;
        var newClubForm = {
            std: clubForm.std,
            loc: clubForm.loc,
            mgr: clubForm.mgr,
            pres: clubForm.pres,
            logo: clubForm.logo,
            cname: clubForm.cname,
            cid: clubForm.cid,
            fder: clubForm.fder,
            fded: ds,
        }
        this.props.setClubForm(newClubForm)
    }

    changUpload = {
        beforeUpload: file => {
            if (file.type !== 'image/png') {
                message.error(`${file.name} is not a png file`);
            }
            return file.type === 'image/png' || file.type === 'image/jpeg' ? true : Upload.LIST_IGNORE;
        },
        onChange: ({ fileList }) => {
            if (fileList[0]) {
                this.setState({
                    image: fileList[0],
                })
                let { clubForm } = this.props;
                var newclubForm = {
                    std: clubForm.std,
                    loc: clubForm.loc,
                    mgr: clubForm.mgr,
                    pres: clubForm.pres,
                    logo: fileList[0].name,
                    cname: clubForm.cname,
                    cid: clubForm.cid,
                    fder: clubForm.fder,
                    fded: clubForm.fded,
                }
                this.props.setClubForm(newclubForm);
            }
            else {
                this.setState({
                    image: null,
                })
                let { clubForm } = this.props;
                let newClubForm = {
                    std: clubForm.std,
                    loc: clubForm.loc,
                    mgr: clubForm.mgr,
                    pres: clubForm.pres,
                    logo: "newplayer.jpg",
                    cname: clubForm.cname,
                    cid: clubForm.cid,
                    fder: clubForm.fder,
                    fded: clubForm.fded,
                };
                if (this.props.action === 1) {
                    newClubForm.logo = this.props.listClub[this.getFirstAvt(clubForm.cid)].logo
                }
                this.props.setClubForm(newClubForm);
            }
        },
    };

    getFirstAvt = (id) => {
        var { listClub } = this.props;
        var index1 = -1;
        listClub.forEach((element, index) => {
            if (element.cid === id) {
                index1 = index
            }
        });
        return index1;
    }

    submit = () => {
        if (this.isValid()) {
            var { action } = this.props;
            action === 0 ? this.createNewClub() : this.updateClub();
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

    isValid = () => {
        var { clubForm } = this.props;
        if (clubForm.cname === "") {
            alert("Name is requierd")
            return false;
        }
        if (clubForm.std === "") {
            alert("Arena is requierd")
            return false;
        }
        if (clubForm.fded === "") {
            alert("Founded is requierd")
            return false;
        }
        if (clubForm.loc === "") {
            alert("Location is requierd")
            return false;
        }
        if (clubForm.mgr === "") {
            alert("Manager is requierd")
            return false;
        }
        if (clubForm.pres === "") {
            alert("President is requierd")
            return false;
        }
        if (clubForm.fder === "") {
            alert("Founder is requierd")
            return false;
        }
        return true;
    }

    render() {
        var { visible, clubForm, action } = this.props;
        const dateFormat = 'YYYY-MM-DD 00:00:00';
        return (
            <>
                <Drawer
                    title={action === 0 ? "Create new club" : "Update club"}
                    width={720}
                    onClose={this.props.onClose}
                    visible={visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button style={{ marginRight: 8 }}>
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
                                <object style={{ width: "150px", height: "auto", objectFit: 'cover' }}
                                    data={this.props.action === 0 ? "http://localhost:6769/file/read/newplayer.jpg" : "http://localhost:6769/file/read/" + clubForm.logo} type="image/png">
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
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter club name' }]}
                                >
                                    <Input placeholder="Please enter club name" name="cname" onChange={this.changeForm} value={clubForm.cname} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    // name="nation"
                                    label="Arena"
                                    rules={[{ required: true, message: 'Please enter arena' }]}
                                >
                                    <Input placeholder="Please enter arena" name="std" onChange={this.changeForm} value={clubForm.std} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {/* born */}
                            <Col span={12}>
                                <Form.Item
                                    // name="born"
                                    label="Founded"
                                    rules={[{ required: true, message: 'Please enter founded' }]}
                                >
                                    <DatePicker style={{ width: '100%' }} value={moment(clubForm.fded, dateFormat)} format={dateFormat} onChange={this.changDate} />
                                </Form.Item>
                            </Col>
                            {/* rank */}
                            <Col span={12}>
                                <Form.Item
                                    label="Location"
                                    rules={[{ required: true, message: 'Please enter location' }]}
                                >
                                    <Input placeholder="Please enter location" name="loc" onChange={this.changeForm} value={clubForm.loc} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            {/* club */}
                            <Col span={12}>
                                <Form.Item
                                    label="Manager"
                                    rules={[{ required: true, message: 'Please enter manager name' }]}
                                >
                                    <Input placeholder="Please enter manager name" name="mgr" onChange={this.changeForm} value={clubForm.mgr} />
                                </Form.Item>
                            </Col>
                            {/* salary */}
                            <Col span={12}>
                                <Form.Item
                                    label="President"
                                    rules={[{ required: true, message: 'Please enter president name' }]}
                                >
                                    <Input placeholder="Please enter president name" name="pres" onChange={this.changeForm} value={clubForm.pres} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Founder"
                                    rules={[{ required: true, message: 'Please enter founder name' }]}
                                >
                                    <Input placeholder="Please enter founder name" name="fder" onChange={this.changeForm} value={clubForm.fder} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        clubForm: state.clubForm,
        listClub: state.listClub
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setClubForm: player => {
            dispatch(clubAc.setClubForm(player))
        },
        createNewClub: club => {
            dispatch(clubAc.createNewClub(club))
        },
        updateClub: club => {
            dispatch(clubAc.updateClub(club))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubForm)