import React from 'react'
import './AccountInfo.css'
import { FaRegEdit } from "react-icons/fa"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table.jsx"

const AccountInfo = () => {
  return (
    <div className='account-info container'>
        <div className='buffer' />
        <div className='account-info-wrapper'>
            <div className='account-info-wrapper-left'>
                <div className='account-header'>
                    <h1>kudos</h1>
                    <button><FaRegEdit className='edit-icon' /></button>
                </div>
                <div className='account-section'>
                    <h2>My Tournaments</h2>
                    <div className='account-table'>
                        <Table className='table-text'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='smaller-text'>Title</TableHead>
                                    <TableHead className='smaller-text'>Start</TableHead>
                                    <TableHead className="text-center"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='smaller-text'>Exciting tournament</TableCell>
                                    <TableCell className='smaller-text'>21/03 15:00</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className='account-section'>
                    <h2>Upcoming Tournaments</h2>
                    <div className='account-table'>
                        <Table className='table-text'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='smaller-text'>Title</TableHead>
                                    <TableHead className='smaller-text'>Organizer</TableHead>
                                    <TableHead className="text-center"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='smaller-text'>Battle puff</TableCell>
                                    <TableCell className='smaller-text'>frankyyy</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className='smaller-text'>gathering v2</TableCell>
                                    <TableCell className='smaller-text'>h0llyberr</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className='smaller-text'>gathering v1</TableCell>
                                    <TableCell className='smaller-text'>h0llyberr</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
            <div className='account-info-wrapper-right'>
                <div className='account-section'>
                    <h2>Invitations</h2>
                    <div className='account-table'>
                        <Table className='table-text'>
                            <TableHeader>
                                <TableRow>
                                <TableHead className='smaller-text'>Organizer</TableHead>
                                    <TableHead className='smaller-text'>Type</TableHead>
                                    <TableHead className="text-center"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='smaller-text'>incelbit01</TableCell>
                                    <TableCell className='smaller-text'>Single game</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Join</button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className='account-section'>
                    <h2>History</h2>
                    <div className='account-table'>
                        <Table className='table-text'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='smaller-text'>Player</TableHead>
                                    <TableHead className='smaller-text'>Date</TableHead>
                                    <TableHead className='smaller-text'>Color</TableHead>
                                    <TableHead className="text-center"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className='smaller-text'>frankyyy</TableCell>
                                    <TableCell className='smaller-text'>10/03</TableCell>
                                    <TableCell className='smaller-text'>White</TableCell>
                                    <TableCell className="text-center"><button className='btn small-btn dark-btn'>Details</button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
        <div className='buffer' />
    </div>
  )
}

export default AccountInfo