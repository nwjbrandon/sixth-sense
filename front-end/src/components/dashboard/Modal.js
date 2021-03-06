import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    Card,
    CardContent,
    CardActions,
    Typography
} from "@material-ui/core";
import dateFnsFormat from "date-fns/format";

const Modal = ({
    firstName,
    lastName,
    email,
    country,
    dateFrom,
    dateTo,
    breakfast,
    lunch,
    dinner,
    males,
    females,
    cars,
    van,
    motorbikes,
    checkedIn,
    uuid,
    onCloseModal,
    confirmedCheckIn,
    deleteCheckIn,
    cash,
    updateTransactionState,
    openModal = false,
    carsAirport,
    airportLocation,
}) => (
        <Dialog
            open={openModal}
            onClose={onCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            scroll="paper"
        >
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Transaction ID: {uuid}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        Customer Name: {lastName}, {firstName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        FirstName: {firstName} LastName: {lastName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Email: {email}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Country: {country}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Date From: {dateFnsFormat(dateFrom, 'YYYY/MM/DD')} Date To: {dateFnsFormat(dateTo, 'YYYY/MM/DD')}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Males: {males} Female: {females}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Breakfast: {breakfast ? "Yes" : "No"}&nbsp;
                  Lunch: {lunch ? "Yes" : "No"}&nbsp;
                  Dinner: {dinner ? "Yes" : "No"}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Cars: {cars} Vans: {van} Motorbikes: {motorbikes}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {
                        carsAirport === '0' ?
                            <div>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Number of Vehicles for Airport Pickup: NIL
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Location for Airport Pickup: NIL
                                </Typography>
                            </div>
                            :
                            <div>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Number of Vehicles for Airport Pickup: { carsAirport }
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Location for Airport Pickup: { airportLocation }
                                </Typography>
                            </div>
                        }
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Payment Mode: {cash === 0 ? "Pay by Cash" : "Paid through Midtrans"}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Transaction State: {cash === 1 ? "Pending" : "Successfully Captured"}
                    </Typography>
                </CardContent>
                <CardActions>
                    {
                        checkedIn ?
                            <Button value={uuid} onClick={deleteCheckIn} color="secondary">
                                Delete
                      </Button>
                            :
                            <Button value={uuid} onClick={confirmedCheckIn} color="primary">
                                Checked In
                      </Button>
                    }
                    <Button onClick={onCloseModal} color="primary">
                        Close
              </Button>
                    {
                        cash === 1 ?
                            <Button onClick={updateTransactionState} disabled={true} color="primary">
                                Update Transaction State
                            </Button>
                            : ""
                    }

                </CardActions>
            </Card>
        </Dialog>
    );

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
