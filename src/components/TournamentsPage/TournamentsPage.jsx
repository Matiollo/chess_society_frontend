import React from 'react'
import Title from '../Title/Title'
import './TournamentsPage.css'
import DataTable from 'react-data-table-component'


const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true
    },
    {
        name: 'Organizer',
        selector: row => row.organizer_username,
        sortable: true
    },
    {
        name: 'Type',
        selector: row => row.type,
        sortable: true
    },
    {
        name: 'Start',
        selector: row => row.start,
        sortable: true
    },
    {
        name: 'Time Per Player',
        selector: row => row.time_per_player,
        sortable: true
    },
    {
        name: 'Time Per Move',
        selector: row => row.time_per_move,
        sortable: true
    },
    {
        name: 'Break',
        selector: row => row.break_time,
        sortable: true
    },
    {
        name: 'Min Rating',
        selector: row => row.min_rating,
        sortable: true 
    },
    {
        name: 'Max Rating',
        selector: row => row.max_rating,
        sortable: true 
    },
    {
        name: 'Min Players',
        selector: row => row.min_players,
        sortable: true
    },
    {
        name: 'Max Players',
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
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    },
    {
        id: 1, 
        title: "Exciting tournament",
        organizer_username: "kudos",
        type: "Standard",
        start: "21/06/2024",
        time_per_player: "10 min",
        time_per_move: "-",
        break_time: "10 min",
        min_rating: 1200,
        max_rating: 1600,
        min_players: 4,
        max_players: 32
    }
];

const TournamentsPage = () => {

    const paginationComponentOptions = {
        noRowsPerPage: true
    };
    const customStyles = {
        headRow: {
            style: {
                'background': '#f5f5f5'
            }
        },
        rows: {
            style: {
                'background': '#f5f5f5'
            },
            highlightOnHoverStyle: {
                backgroundColor: '#dedede',
                border: 'none'
            }
        },
        pagination: {
            style: {
                'margin-top': '230px',
                'border': 'none',
                'margin-left': '10%',
                'margin-right': '10%',
                'width': '80%',
                'background': '#f5f5f5'
            }
        }
    }

  return (
    <div className='tournaments-page container'>
        <Title title="Upcoming Tournaments" />
        <div className='tournaments-page-content'>
            <div className='tournaments-page-table'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination 
                    paginationPerPage={5}
                    paginationComponentOptions={paginationComponentOptions}
                    customStyles={customStyles} 
                    highlightOnHover
                    pointerOnHover
                    // onRowClicked={}
                ></DataTable>
            </div>
        </div>
    </div>
  )
}

export default TournamentsPage