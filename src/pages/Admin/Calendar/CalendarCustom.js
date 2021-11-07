import Toolbar from '@material-ui/core/Toolbar';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { IconButton, Tooltip } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ViewArrayIcon from '@material-ui/icons/ViewArray';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ViewDayIcon from '@material-ui/icons/ViewDay';


const CustomToolBar = (toolbar) => {
    const label = () => {
        return (
            <span><b>{toolbar.label}</b></span>
        );
    };
    const goToDayView = () => {
        toolbar.onView('day');
    }
    const goToWeekView = () => {
        toolbar.onView('week');
    }
    const goToMonthView = () => {
        toolbar.onView('month');
    }
    const goToAgendaView = () => {
        toolbar.onView('agenda');
    }
    const goToBack = () => {
        switch (toolbar.view) {
            case 'agenda':
                toolbar.date.setMonth(toolbar.date.getMonth() - 1);
                toolbar.onNavigate('prev');
            break;
            case 'day':
                toolbar.date.setDate(toolbar.date.getDate() - 1);
                toolbar.onNavigate('prev');
            break;
            case 'week':
                toolbar.date.setDate(toolbar.date.getDate() - 7);
                toolbar.onNavigate('prev');
            break;
            case 'month':
                toolbar.date.setMonth(toolbar.date.getMonth() - 1);
                toolbar.onNavigate('prev');
            break;
        
            default:
                break;
        }
    };

    const goToNext = () => {
        switch (toolbar.view) {
            case 'agenda':
                toolbar.date.setMonth(toolbar.date.getMonth() + 1);
                toolbar.onNavigate('next');
            break;
            case 'day':
                toolbar.date.setDate(toolbar.date.getDate() + 1);
                toolbar.onNavigate('next');
            break;
            case 'week':
                toolbar.date.setDate(toolbar.date.getDate() + 7);
                toolbar.onNavigate('next');
            break;
            case 'month':
                toolbar.date.setMonth(toolbar.date.getMonth() + 1);
                toolbar.onNavigate('next');
            break;
        
            default:
                break;
        }
        
    };

    const goToCurrent = () => {
        const now = new Date();
            toolbar.date.setDate(now.getDate());
            toolbar.date.setMonth(now.getMonth());
            toolbar.date.setYear(now.getFullYear());
            toolbar.onNavigate('current');
    };
    return (
        <Toolbar className="d-flex justify-content-between align-item-center">
            <div className="d-flex justify-content-center">
                <Tooltip title="Previous">
                    <IconButton onClick={goToBack} aria-label="prev">
                        <ChevronLeftIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Today">
                    <IconButton onClick={goToCurrent} aria-label="calendar">
                        <InsertInvitationIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Next">
                    <IconButton onClick={goToNext} aria-label="next">
                        <ChevronRightIcon />
                    </IconButton>
                </Tooltip>
            </div>
            <div style={{color:' #fff', fontSize:'16px'}}>{label()}</div>
            <div className="d-flex justify-content-center">
                <Tooltip title="Month">
                    <IconButton onClick={goToMonthView} aria-label="month">
                        <ViewModuleIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Week">
                    <IconButton onClick={goToWeekView} aria-label="week">
                        <ViewWeekIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Work Week">
                    <IconButton onClick={()=>alert('Không có Work Week')} aria-label="work week">
                        <ViewArrayIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Day">
                    <IconButton onClick={goToDayView} aria-label="day">
                        <ViewDayIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Agenda">
                    <IconButton onClick={goToAgendaView} aria-label="agenda">
                        <ViewAgendaIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </Toolbar>
    )
}
export default CustomToolBar;