import React, { useState } from 'react'
import Title from '../Title/Title'
import './TournamentsPage.css'
import DataTable from 'react-data-table-component'
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import moment from 'moment';

const formatDateTime = (datetime) => {
    const date = moment(datetime);
    const formattedDate = date.format('LL'); // e.g., June 24, 2024
    const formattedTime = date.format('LT'); // e.g., 3:30 PM
    return `${formattedDate} ${formattedTime}`;
};

const columns = [
    {
        id: 'title',
        name: 'Title',
        selector: row => row.title,
        sortable: true
    },
    {
        id: 'organizer_username',
        name: 'Organizer',
        selector: row => row.organizer_username,
        sortable: true
    },
    {
        id: 'type',
        name: 'Type',
        selector: row => row.type,
        sortable: true
    },
    {
        id: 'start',
        name: 'Start',
        selector: row => formatDateTime(row.start),
        sortable: true
    },
    {
        id: 'time_per_player',
        name: 'Time Per Player',
        selector: row => row.time_per_player,
        sortable: true
    },
    {
        id: 'time_per_move',
        name: 'Time Per Move',
        selector: row => row.time_per_move,
        sortable: true
    },
    {
        id: 'break',
        name: 'Break',
        selector: row => row.break_time,
        sortable: true
    },
    {
        id: 'min_rating',
        name: 'Min Rating',
        selector: row => row.min_rating,
        sortable: true 
    },
    {
        id: 'max_rating',
        name: 'Max Rating',
        selector: row => row.max_rating,
        sortable: true 
    },
    {
        id: 'rated',
        name: 'Rated',
        selector: row => row.rated ? 'Yes' : 'No',
        sortable: true 
    },
    {
        id: 'participants',
        name: 'Participants',
        selector: row => row.participants,
        sortable: true
    },
    {
        id: 'participants_limit',
        name: 'Participants Limit',
        selector: row => row.max_players,
        sortable: true
    }
];
const data = [
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "2024-06-24T15:30:00Z",
        time_per_player: 10,
        time_per_move: "Unlimited",
        break_time: 10,
        min_rating: 1200,
        max_rating: 1600,
        min_players: 5,
        max_players: 50,
        participants: 6,
        rated: true
    },
    {
        id: 1, 
        title: "Filleee",
        organizer_username: "frankyyy",
        type: "Standard",
        start: "2024-06-24T15:30:00Z",
        time_per_player: "Unlimited",
        time_per_move: 1,
        break_time: 30,
        min_rating: 1500,
        max_rating: 2000,
        min_players: 16,
        max_players: 16,
        participants: 0,
        rated: true
    },
    {
        id: 1, 
        title: "homies only",
        organizer_username: "andre",
        type: "Marseillais",
        start: "2024-06-24T15:30:00Z",
        time_per_player: 10,
        time_per_move: "Unlimited",
        break_time: 10,
        min_rating: 1200,
        max_rating: 1600,
        min_players: 10,
        max_players: 50,
        participants: 11,
        rated: false
    },
    {
        id: 1, 
        title: "Different one",
        organizer_username: "kudos",
        type: "Standard",
        start: "2024-06-24T15:30:00Z",
        time_per_player: 10,
        time_per_move: "Unlimited",
        break_time: 15,
        min_rating: 1200,
        max_rating: 1600,
        min_players: 8,
        max_players: 20,
        participants: 0,
        rated: true
    },
    {
        id: 1, 
        title: "May celebration",
        organizer_username: "an00x",
        type: "Fisher Random",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "15 min",
        time_per_move: "-",
        break_time: "1 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32,
        participants: 6,
        rated: true
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 5,
        max_players: 50,
        participants: 7,
        rated: false
    },
    {
        id: 1, 
        title: "Demonzzz",
        organizer_username: "frankyyy",
        type: "Standard",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "-",
        time_per_move: "1 min",
        break_time: "30 min",
        min_rating: 1500,
        max_rating: 2000,
        min_players: 16,
        max_players: 16,
        participants: 6,
        rated: true
    },
    {
        id: 1, 
        title: "Filleee 2.0",
        organizer_username: "frankyyy",
        type: "Standard",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "-",
        time_per_move: "1 min",
        break_time: "30 min",
        min_rating: 1500,
        max_rating: 2000,
        min_players: 16,
        max_players: 36,
        participants: 23,
        rated: true
    },
    {
        id: 1, 
        title: "foes_only",
        organizer_username: "kudos",
        type: "Marseillais",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 10,
        max_players: 50,
        participants: 6,
        rated: true
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Fisher Random",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32,
        participants: 6,
        rated: false
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "2024-06-30T15:30:00Z",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32,
        participants: 10,
        rated: true
    }
];

const TournamentsPage = () => {

    const paginationComponentOptions = {
        noRowsPerPage: true
    };
    const customStyles = {
        header: {
            style: {
                'height': '1560px',
            },
        },
        headRow: {
            style: {
                'height': '64px',
                'font-size': '14px',
                'color': '#4f4f4f',
                'background': '#f5f5f5'
            }
        },
        rows: {
            style: {
                'height': '64px',
                'font-size': '14px',
                'background': '#f5f5f5'
            },
            highlightOnHoverStyle: {
                backgroundColor: '#dedede',
                border: 'none'
            }
        },
        pagination: {
            style: {
                'background': '#f5f5f5',
                'position': 'relative'
            }
        }
    }

    const [searchQueries, setSearchQueries] = useState({
        title: '',
        organizer_username: '',
        type: '',
        start: '',
        time_per_player: '',
        time_per_move: '',
        break_time: '',
        rating: '',
        // min_rating: '',
        // max_rating: '',
        min_players: '',
        max_players: '',
        rated: ''
    });
    
    const handleSearchChange = (field, value) => {
        setSearchQueries(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const filteredData = data.filter(item => 
        Object.keys(searchQueries).every(key => {
            if (key.startsWith('rating')) {
                if (searchQueries['rating'] == '' || parseInt(searchQueries['rating']) == 0) { return true} 
                return item['max_rating'] >= parseInt(searchQueries['rating']) && item['min_rating'] <= parseInt(searchQueries['rating']);
            }
            if (key.startsWith('time_per_player_min')) {
                if (searchQueries['time_per_player_min'] == '' || parseInt(searchQueries['time_per_player_min']) == 0) { return true} 
                return item['time_per_player'] == "Unlimited" || item['time_per_player'] >= parseInt(searchQueries['time_per_player_min']);
            }
            if (key.startsWith('time_per_player_max')) {
                if (searchQueries['time_per_player_max'] == '' || parseInt(searchQueries['time_per_player_max']) == 0) { return true} 
                return item['time_per_player'] <= parseInt(searchQueries['time_per_player_max']);
            }
            if (key.startsWith('time_per_move_min')) {
                if (searchQueries['time_per_move_min'] == '' || parseInt(searchQueries['time_per_move_min']) == 0) { return true} 
                return item['time_per_move'] == "Unlimited" || item['time_per_move'] >= parseInt(searchQueries['time_per_move_min']);
            }
            if (key.startsWith('time_per_move_max')) {
                if (searchQueries['time_per_move_max'] == '' || parseInt(searchQueries['time_per_move_max']) == 0) { return true} 
                return item['time_per_move'] <= parseInt(searchQueries['time_per_move_max']);
            }
            if (key.startsWith('participants_min')) {
                if (searchQueries['participants_min'] == '' || parseInt(searchQueries['participants_min']) == 0) { return true} 
                return item['participants'] >= parseInt(searchQueries['participants_min']);
            }
            if (key.startsWith('participants_max')) {
                if (searchQueries['participants_max'] == '') { return true} 
                return item['participants'] <= parseInt(searchQueries['participants_max']);
            }
            return item[key].toString().toLowerCase().includes(searchQueries[key].toLowerCase())
        })
    );

    const [selectedType, setSelectedType] = useState('');

    const handleTypeChange = (value) => {
        setSelectedType(value);
        handleSearchChange('type', value); 
    };

    const isPlaceholder = selectedType === '';

    const [visibleColumns, setVisibleColumns] = useState(columns.reduce((acc, col) => ({ ...acc, [col.id]: true }), {}));

    const handleColumnToggle = (columnId) => {
        setVisibleColumns(prevState => ({
            ...prevState,
            [columnId]: !prevState[columnId]
        }));
    };

    const visibleColumnsArray = columns.filter(column => visibleColumns[column.id]);

    const [toggleColumns, setToggleColumns] = useState(false);

    

    // const { datetime } = data.start;
    // const formattedDateTime = formatDateTime(datetime);

      

    return (
        <div className='tournaments-page container'>
            <Title title="Upcoming Tournaments" />
            <div className='tournaments-page-content'>
                <div className='tournaments-page-table'>
                    <DataTable
                        columns={visibleColumnsArray}
                        data={filteredData}
                        pagination 
                        paginationPerPage={8}
                        paginationComponentOptions={paginationComponentOptions}
                        customStyles={customStyles} 
                        highlightOnHover
                        pointerOnHover
                        // onRowClicked={}
                    ></DataTable>
                </div>
                <div className='tournaments-page-filter-area'>
                    <div className="tournaments-page-column-toggle">
                        <button className="toggle-btn" onClick={() => setToggleColumns(!toggleColumns)}>
                            {toggleColumns ? 'Hide Columns Filter' : 'Filter Columns'}
                        </button>
                        {toggleColumns && (
                            <div className="column-list">
                                {columns.map(column => (
                                    <div key={column.id}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={visibleColumns[column.id]}
                                                onChange={() => handleColumnToggle(column.id)}
                                            />
                                            {column.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='tournaments-page-input'>
                        <input type='text' onChange={e => handleSearchChange('title', e.target.value)} placeholder="Title" />
                    </div>
                    <div className='tournaments-page-input'>
                        <input type='text' onChange={e => handleSearchChange('organizer_username', e.target.value)} placeholder="Organizer" />
                    </div>
                    <div className='tournaments-page-input'>
                        <input type='number' onChange={e => handleSearchChange('rating', e.target.value)} placeholder="Rating" />
                    </div>
                    <div className='tournaments-page-select'>
                        <Select.Root className='SelectRoot' onValueChange={(value) => handleTypeChange(value)} >
                            <Select.Trigger className={`SelectTrigger ${isPlaceholder ? 'placeholder' : 'selected'}`} aria-label="Type">
                                <Select.Value className='SelectValue' placeholder="Type" />
                                <Select.Icon className="SelectIcon">
                                    <ChevronDownIcon />
                                </Select.Icon>
                            </Select.Trigger>
                            <Select.Portal>
                                <Select.Content className="SelectContent">
                                    <Select.Viewport className="SelectViewport">
                                        <Select.Group>
                                            <SelectItem value="Standard" select>Standard</SelectItem>
                                            <SelectItem value="Marseillais">Marseillais</SelectItem>
                                            <SelectItem value="Fisher Random">Fisher Random</SelectItem>
                                        </Select.Group>    
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    </div>
                    {/* <div className='tournaments-page-input'>
                        <h1>START</h1>
                        <div className='tournaments-page-range'>
                            <input type='date' onChange={e => handleSearchChange('start_date_min', e.target.value)} />
                            <input type='date' onChange={e => handleSearchChange('start_date_max', e.target.value)} />
                        </div>
                    </div> */}
                    <div className='tournaments-page-input'>
                        <h1>TIME PER PLAYER</h1>
                        <div className='tournaments-page-range'>
                            <input type='number' onChange={e => handleSearchChange('time_per_player_min', e.target.value)} placeholder='Min' />
                            <input type='number' onChange={e => handleSearchChange('time_per_player_max', e.target.value)} placeholder='Max' />
                        </div>
                    </div>
                    <div className='tournaments-page-input'>
                        <h1>TIME PER MOVE</h1>
                        <div className='tournaments-page-range'>
                            <input type='number' onChange={e => handleSearchChange('time_per_move_min', e.target.value)} placeholder='Min' />
                            <input type='number' onChange={e => handleSearchChange('time_per_move_max', e.target.value)} placeholder='Max' />
                        </div>
                    </div>
                    <div className='tournaments-page-input'>
                        <h1>PARTICIPANTS</h1>
                        <div className='tournaments-page-range'>
                            <input type='number' onChange={e => handleSearchChange('participants_min', e.target.value)} placeholder='Min' />
                            <input type='number' onChange={e => handleSearchChange('participants_max', e.target.value)} placeholder='Max' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item className='SelectItem' {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
            <CheckIcon />
        </Select.ItemIndicator>
        </Select.Item>
    );
});

export default TournamentsPage