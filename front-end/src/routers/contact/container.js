import { connect } from "react-redux";
import Contact from './index';
import { CONTACT_ONMOUNT_REQUEST } from "../../actions/contact-onmount";
import { CONTACT_FORM_REQUEST } from "../../actions/contact-form";

function mapStateToProps(state) {
    return {
        data: state.contact.data,
    };
}

function matchDispatchToProps(dispatch){
    return {
        onMount: () => dispatch(CONTACT_ONMOUNT_REQUEST()),
        contactSubmit: (payload) => dispatch(CONTACT_FORM_REQUEST(payload)),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);