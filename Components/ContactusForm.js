import React, { useState } from 'react';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faEdit } from '@fortawesome/free-solid-svg-icons';

function ContactusForm(props) {
    const title = props.title;
    const contact_type=props.type
    const [state, setData] = useState({
        txtname: '',
        txtemail: '',
        txtmobile: '',
        txtmessage: '',
        errorshow: false,
        successshow: false,
        message: ''
    });

    function Submit() {
        let errmessage = '', success = true;
        if (state.txtname.length < 3) {
            errmessage = 'अपना सही नाम दर्ज करें';
            success = false;
        }
        else if (state.txtemail === "") {
            errmessage = 'अपना सही ईमेल आइडी दर्ज करें';
            success = false;
        }
        else if (state.txtmobile.length < 10) {
            errmessage = 'अपना सही मोबाईल न. दर्ज करें';
            success = false;
        }
        else if (state.txtmessage.length < 10) {
            errmessage = 'अपना सही मैसेज दर्ज करें';
            success = false;
        }

        if (!success) {
            setData(prevState => (
                {
                    txtname: prevState.txtname,
                    txtemail: prevState.txtemail,
                    txtmobile: prevState.txtmobile,
                    txtmessage: prevState.txtmessage,
                    errorshow: true,
                    successshow: false,
                    message: errmessage
                }));

            return;
        }

        const name=state.txtname;
        const email=state.txtemail;
        const mobile=state.txtmobile;
        const message=state.txtmessage;                
        const application_id=config.application_id;
        const client_ip="192.168.1.1";        
        const contactObj = { name, email,mobile,message,contact_type, application_id, client_ip };

        fetchServerData('/', config.CONTACTUS_SUBMIT, contactObj)
            .then((obj) => {       
                if(obj==="OK")
                {
                    setData(prevState => (
                        {
                            txtname: '',
                            txtemail: '',
                            txtmobile: '',
                            txtmessage: '',
                            errorshow: false,
                            successshow: true,
                            message: ''
                        }));                        
                }
                else{
                    setData(prevState => (
                        {
                            txtname: prevState.txtname,
                            txtemail: prevState.txtemail,
                            txtmobile: prevState.txtmobile,
                            txtmessage: prevState.txtmessage,
                            errorshow: true,
                            successshow: false,
                            message: obj
                        }));
                }
            });

    }

    return (
        <div className="row">
            <div className="col-12 gedf-main p-2">
                <div className="card gedf-card bg-light">

                    <h5 className="card-header info-color white-text text-center py-4 pscolor">
                        <strong>{title}</strong>
                    </h5>

                    <div className="card-body p-4">
                        <div className="border_b">
                        </div>

                        <div className="text-muted">
                            <InputGroup className="mb-3 mt-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text >
                                        <FontAwesomeIcon icon={faUser} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="txtname"
                                    value={state.txtname}
                                    onChange={e => setData(prevState => (
                                        {
                                            txtname: e.target.value,
                                            txtemail: prevState.txtemail,
                                            txtmobile: prevState.txtmobile,
                                            txtmessage: prevState.txtmessage,
                                            errorshow: false,
                                            successshow: false,
                                            message: ''
                                        }))}
                                    placeholder="नाम"
                                    aria-label="नाम"
                                    aria-describedby="txtname"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3 mt-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="txtemail"
                                    value={state.txtemail}
                                    onChange={e => setData(prevState => (
                                        {
                                            txtname: prevState.txtname,
                                            txtemail: e.target.value,
                                            txtmobile: prevState.txtmobile,
                                            txtmessage: prevState.txtmessage,
                                            errorshow: false,
                                            successshow: false,
                                            message: ''
                                        }))}
                                    placeholder="ईमेल"
                                    aria-label="ईमेल"
                                    aria-describedby="txtemail"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3 mt-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="txtmobile"
                                    value={state.txtmobile}
                                    onChange={e => setData(prevState => (
                                        {
                                            txtname: prevState.txtname,
                                            txtemail: prevState.txtemail,
                                            txtmobile: e.target.value,
                                            txtmessage: prevState.txtmessage,
                                            errorshow: false,
                                            successshow: false,
                                            message: ''
                                        }))}
                                    placeholder="मोबाइल"
                                    aria-label="मोबाइल"
                                    aria-describedby="txtmobile"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3 mt-4">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    id="txtmessage"
                                    value={state.txtmessage}
                                    onChange={e => setData(prevState => (
                                        {
                                            txtname: prevState.txtname,
                                            txtemail: prevState.txtemail,
                                            txtmobile: prevState.txtmobile,
                                            txtmessage: e.target.value,
                                            errorshow: false,
                                            successshow: false,
                                            message: ''
                                        }))}

                                    as="textarea"
                                    placeholder="संदेश"
                                    aria-label="संदेश"
                                    aria-describedby="txtmessage"
                                />
                            </InputGroup>

                            {
                                state.errorshow ?
                                    <Alert id="errormessage" key="1" variant='danger' className="mt-2 mb-2" >
                                        {state.message}
                                    </Alert>
                                    :
                                    ""
                            }
                            {
                                state.successshow ?
                                    <Alert id="successmessage" key="2" variant='success' className="mt-2 mb-2" >
                                        आपका संदेश हमे प्राप्त हो गया है।
                                    </Alert>
                                    :
                                    ""

                            }

                            <Button id="btnsubmit" className="mt-4 btn-ps" size="lg" block onClick={() => Submit()}>
                                Submit
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactusForm;