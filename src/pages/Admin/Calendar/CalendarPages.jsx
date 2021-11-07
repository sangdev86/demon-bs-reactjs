import React, { Component } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import CustomToolBar from './CalendarCustom';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DateTimePicker } from '@material-ui/pickers';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../Components/customModal.css';


const DragAndDropCalendar = withDragAndDrop(Calendar)
const styles = theme => ({
    root: {
        '& .MuiDialog-paperWidthSm': {
            maxWidth: '444px',
            width: '100%'
        },
        '& .MuiDialogTitle-root': {
            background: '#185cb4',
            color: '#fff'
        },
        '& .delete.MuiIconButton-root': {
            color: '#343a40 !important',
            fontSize: '0.875rem',
            borderRadius: '3px',
            padding: '6px 16px'
        },
        '& .MuiDialogContent-root': {
            padding: '20px 24px'
        },
        '& .MuiButton-containedPrimary': {
            backgroundColor: '#185cb4'
        },
        '& .MuiDialogActions-root': {
            padding: '10px 20px'
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '45%',
    },

});
class CalendarPages extends Component {
    localizer = momentLocalizer(moment)
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {   id: 1,
                    title: 'All Day Event very long title',
                    allDay: false,
                    start: new Date(),
                    end: new Date(),
                    location:'',
                    note:''
                },
            ],
            addEvent: {
                id: '', 
                title: '',
                allDay: false,
                start: new Date(),
                end: new Date(),
                location:'',
                note:'',
            },
            addEventErr: {
                id: '',
                title: '',
                start: '',
                end: '',
                location:'',
                note:'',
            },
            isOpen: false,
            displayDragItemInCell: true,

        }
        this.moveEvent = this.moveEvent.bind(this)
    }
    handleDragStart = event => {
        this.setState({ draggedEvent: event })
    }

    dragFromOutsideItem = () => {
        return this.state.draggedEvent
    }

    onDropFromOutside = ({ start, end, allDay }) => {
        const { draggedEvent } = this.state

        const event = {
            id: draggedEvent.id,
            title: draggedEvent.title,
            start,
            end,
            allDay: allDay,
        }

        this.setState({ draggedEvent: null })
        this.moveEvent({ event, start, end })
    }

    moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
        const { events } = this.state
        let allDay = event.allDay
        if (!event.allDay && droppedOnAllDaySlot) {
            allDay = true
        } else if (event.allDay && !droppedOnAllDaySlot) {
            allDay = false
        }

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id == event.id
                ? { ...existingEvent, start, end, allDay }
                : existingEvent
        })

        this.setState({
            events: nextEvents,
        })
    }

    resizeEvent = ({ event, start, end }) => {
        const { events } = this.state

        const nextEvents = events.map(existingEvent => {
            return existingEvent.id == event.id
                ? { ...existingEvent, start, end }
                : existingEvent
        })

        this.setState({
            events: nextEvents,
        })
    }
    showModal = (e) => {
        let id = e.currentTarget.dataset.target.slice(1);
        let nameMod = e.currentTarget.dataset.name;
        this.setState({
            id,
            nameMod
        })
    }
    handleOpen = (e) => {
        this.setState({
            isOpen: true,
            addEvent: { ...this.state.addEvent, id: e.currentTarget.dataset.id ? e.currentTarget.dataset.id : "" }
        })
    }
    handleClose = () => {
        this.setState({
            isOpen: false,
            addEvent: {
                id: '',
                title: '',
                allDay: false,
                start: new Date(),
                end: new Date(),
                location:'',
                note:'',
            },
            addEventErr: {
                id: '',
                title: '',
                start: '',
                end: '',
                location:'',
                note:'',
            },
        })
    }
    handleSelect = ({ action, start, end, allDay }) => {
        let addEventUp = { ...this.state.addEvent, ['start']: start, ['end']: end, ['allDay']: allDay, ['id']: Date.now() };
        if (action === "doubleClick") {
            this.setState({
                isOpen: true,
                addEvent: addEventUp,
            })
        }
    }
    handleChange = (e) => {
        let { value, name } = e.target;
        let errMessage = "";
        if (value.trim() === '') {
            errMessage = "Không được để trống";
        }
        this.setState({
            ...this.state,
            addEvent: { ...this.state.addEvent, [name]: value },
            addEventErr: { ...this.state.addEventErr, [name]: errMessage },
        })
    }
    handleUpdate = (event) => {
        this.setState({
            addEvent: event,
            isOpen: true,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let eventsUpdate = [...this.state.events];
        let errMessage = { ...this.state.addEventErr };
        let id = this.state.addEvent.id;
        for (let key in this.state.addEvent) {
            if (this.state.addEvent[key] === '') {
                valid = false;
                errMessage = { ...errMessage, [key]: "Không được để trống" }
            }
        }
        for (let key in this.state.addEventErr) {
            if (this.state.addEventErr[key] !== '') {
                valid = false;
                errMessage = { ...errMessage, [key]: "Không được để trống" }
            }
        }
        if (valid) {
            let index = eventsUpdate.findIndex(event => event.id == id);
            if (index !== -1) {
                eventsUpdate[index] = this.state.addEvent;
            } else {
                eventsUpdate.push(this.state.addEvent);
            }
            this.setState({
                isOpen: false,
                events: eventsUpdate,
                addEvent: {
                    id: '',
                    title: '',
                    allDay: false,
                    start: new Date(),
                    end: new Date(),
                    location:'',
                note:'',
                }
            })
        } else {
            this.setState({
                addEventErr: errMessage
            })
        }
    }
    removeEvent = (id) => {
        let eventsUpdate = [...this.state.events];
        eventsUpdate = eventsUpdate.filter(event => event.id != id);
        this.setState({
            isOpen: false,
            events: eventsUpdate,
            addEvent: {
                id: '',
                title: '',
                allDay: false,
                start: new Date(),
                end: new Date(),
                location:'',
                note:'',
            },
            addEventErr: {
                id: '',
                title: '',
                start: '',
                end: '',
                location:'',
                note:'',
            },
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="content container-fluid">
                <Dialog open={this.state.isOpen} onClose={this.handleClose} className={classes.root} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" color="primary">Add Events</DialogTitle>
                    <form onSubmit={this.handleSubmit}>
                        <DialogContent>
                            <TextField
                                error={this.state.addEventErr.title !== ''}
                                onChange={this.handleChange}
                                margin="dense"
                                id="title"
                                defaultValue={this.state.addEvent.title.trim() !== '' ? this.state.addEvent.title : ''}
                                label="Title"
                                helperText={this.state.addEventErr.title}
                                fullWidth
                                name="title"
                            />
                            <div style={{ paddingTop: '5px' }} className='d-flex justify-content-between'>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <DateTimePicker
                                        error={false}
                                        autoOk
                                        disableFuture
                                        ampm={true}
                                        helperText=""
                                        name="Start date"
                                        value={this.state.addEvent.start === '' ? new Date() : this.state.addEvent.start}
                                        onChange={(date) => { this.setState({ addEvent: { ...this.state.addEvent, ['start']: date._d } }) }}
                                        label="Start date"
                                    />
                                    <DateTimePicker
                                        error={false}
                                        autoOk
                                        disableFuture
                                        helperText=""
                                        ampm={true}
                                        name="End date"
                                        value={this.state.addEvent.end === '' ? new Date() : this.state.addEvent.end}
                                        onChange={(date) => { this.setState({ addEvent: { ...this.state.addEvent, ['end']: date._d } }) }}
                                        label="End date"
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            <TextField
                                onChange={this.handleChange}
                                error={this.state.addEventErr.location !== ''}
                                margin="dense"
                                id="location"
                                defaultValue={this.state.addEvent.location.trim() !== '' ? this.state.addEvent.location : ''}
                                label="Location"
                                helperText={this.state.addEventErr.location}
                                fullWidth
                                name="location"
                            />
                            <TextField
                                onChange={this.handleChange}
                                error={this.state.addEventErr.note !== ''}
                                margin="dense"
                                id="note"
                                defaultValue={this.state.addEvent.note.trim() !== '' ? this.state.addEvent.note : ''}
                                label="Note"
                                helperText={this.state.addEventErr.note}
                                fullWidth
                                name="note"
                            />
                        </DialogContent>
                        <DialogActions className='d-flex justify-content-between'>
                            <Button type="submit" variant="contained" color="primary">
                                Save
                            </Button>
                            <IconButton onClick={() => this.removeEvent(this.state.addEvent.id)} className="delete" aria-label="delete">
                                <DeleteIcon />
                                Delete
                            </IconButton>
                        </DialogActions>
                    </form>
                </Dialog>
                {/* chuyển sang modal chuẩn đã convert nhưng không được */}
                {/* <div id="add_event" className="modal custom-modal fade" role="dialog">
                    <div className="modal-dialog">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                        <div className="modal-content modal-md">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Event</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Event Name <span className="text-danger">*</span></label>
                                        <input className="form-control" onChange={this.handleChange} name='title' required type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label>Event Date <span className="text-danger">*</span></label>
                                        <div className="cal-icon">
                                        <DatePicker
                                               className="form-control floating"
                                               onChange={(date) => { this.setState({ addEvent: { ...this.state.addEvent, ['start']: date } }) }}
                                               onFocus={() => { this.setState({ addEvent: { ...this.state.addEvent, ['start']: new Date() } },()=>console.log(this.state.addEvent)) }}
                                               selected={this.state.addEvent.start === '' ? new Date() : this.state.addEvent.start}
                                               disabledKeyboardNavigation
                                               dateFormat="dd/MM/yyyy" />
                                        </div>
                                    </div>
                                    <div className="m-t-20 text-center">
                                        <button type='submit' className="btn btn-primary btn-lg">Create Event</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-sm-8 col-4">
                        <h4 className="page-title">Calendar</h4>
                    </div>
                    <div className="col-sm-4 col-8 text-right m-b-30">
                        {/* <a href="#" data-id={Date.now()} onClick={this.handleOpen} className="btn btn-primary btn-rounded" data-toggle="modal" data-target="#add_event"><i className="fa fa-plus" /> Add Event</a> */}

                        <a href="#" data-id={Date.now()} onClick={this.handleOpen} className="btn btn-primary btn-rounded"><i className="fa fa-plus" /> Add Event</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box m-b-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <DragAndDropCalendar
                                        selectable
                                        components={{ toolbar: CustomToolBar }}
                                        localizer={this.localizer}
                                        events={this.state.events}
                                        onEventDrop={this.moveEvent}
                                        startAccessor="start"
                                        endAccessor="end"
                                        style={{ height: '100vh' }}
                                        resizable
                                        onEventResize={this.resizeEvent}
                                        onSelectSlot={this.handleSelect}
                                        defaultView={Views.MONTH}
                                        defaultDate={new Date()}
                                        popup={true}
                                        onDoubleClickEvent={(event) => this.handleUpdate(event)}
                                        dragFromOutsideItem={
                                            this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
                                        }
                                        onDropFromOutside={this.onDropFromOutside}
                                        handleDragStart={this.handleDragStart}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default withStyles(styles, { withTheme: true })(CalendarPages);