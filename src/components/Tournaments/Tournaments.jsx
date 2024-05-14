import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table.jsx"
import './Tournaments.css'

const Tournaments = () => {
  return (
    <div className='tournaments'>
        <div className='tournaments-table'>
            <Table className='table-text'>
                <TableHeader>
                    <TableRow>
                        <TableHead className='title-cell smaller-text'>Title</TableHead>
                        <TableHead className='organizer-cell smaller-text'>Organizer</TableHead>
                        <TableHead className='type-cell'>Type</TableHead>
                        <TableHead className='start-cell smaller-text'>Start</TableHead>
                        <TableHead className='duration-cell'>Duration</TableHead>
                        <TableHead className='players-cell'>Players</TableHead>
                        <TableHead className="text-center"></TableHead>
                        {/* className="text-right" */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className='title-cell smaller-text'>Exciting tournament</TableCell>
                        <TableCell className='organizer-cell smaller-text'>kudos</TableCell>
                        <TableCell className='type-cell'>Swiss</TableCell>
                        <TableCell className='start-cell smaller-text'>21/03 15:00</TableCell>
                        <TableCell className='duration-cell'>2d</TableCell>
                        <TableCell className='players-cell'>9 / 10</TableCell>
                        <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='title-cell smaller-text'>Battle puff</TableCell>
                        <TableCell className='organizer-cell smaller-text'>frankyyy</TableCell>
                        <TableCell className='type-cell'>Regular</TableCell>
                        <TableCell className='start-cell smaller-text'>21/03 16:00</TableCell>
                        <TableCell className='duration-cell'>5d</TableCell>
                        <TableCell className='players-cell'>1 / 12</TableCell>
                        <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='title-cell smaller-text'>Friends only</TableCell>
                        <TableCell className='organizer-cell smaller-text'>incelbit01</TableCell>
                        <TableCell className='type-cell'>Regular</TableCell>
                        <TableCell className='start-cell smaller-text'>21/03 16:00</TableCell>
                        <TableCell className='duration-cell'>2d</TableCell>
                        <TableCell className='players-cell'>5 / 10</TableCell>
                        <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='title-cell smaller-text'>Join?</TableCell>
                        <TableCell className='organizer-cell smaller-text'>deadly_v</TableCell>
                        <TableCell className='type-cell'>Swiss</TableCell>
                        <TableCell className='start-cell smaller-text'>21/03 18:00</TableCell>
                        <TableCell className='duration-cell'>1d</TableCell>
                        <TableCell className='players-cell'>0 / 20</TableCell>
                        <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='title-cell smaller-text'>Super tournament</TableCell>
                        <TableCell className='organizer-cell smaller-text'>incelbit01</TableCell>
                        <TableCell className='type-cell'>Regular</TableCell>
                        <TableCell className='start-cell smaller-text'>21/03 18:30</TableCell>
                        <TableCell className='duration-cell'>2h</TableCell>
                        <TableCell className='players-cell'>2 / 16</TableCell>
                        <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <div className='tournaments-description'>
            <h2 className='description-text'>UPCOMING CHESS TOURNAMENTS</h2>
            <p className='description-text'>Explore upcoming events and register to showcase your skills against players from around the world!</p>
            <button className='btn'>See all</button>
        </div>
    </div>
  )
}

export default Tournaments