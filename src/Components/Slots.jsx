import { useEffect, useState } from "react";
import { Typography, Box, Table, TableHead, Modal, TableBody, TableCell, TableContainer, TableRow, Grid } from '@mui/material'
import BookNew from "./BookNew";
import Badge from './UI/Badge'
import Axios from 'axios'
// import { slotArray } from "../Utils/slotsArray";
// const slotsArray = slotArray  //check utils file
function Slots() {

    const [slotState, setSlotState] = useState([])
    const [selected, setSelected] = useState({
        isOpen: false,
        day: "",
        slot: "",
        key: -1
    })
    let callingSlotArray = async () => {
        try {
            let data = await Axios.get("/Json/slotsArray.json")
            setSlotState(data.data)
        }
        catch (e) {
            if (e.response)
                console.log(e.response.data.message);
            else {
                console.log(e.message);
            }
        }
    }
    useEffect(() => {
        if (localStorage.getItem("slots")) {
            setSlotState(JSON.parse(localStorage.getItem("slots")))
        }
        else {
            callingSlotArray()
        }
    }, [])
    let activateForm = (ele, active) => {
        if (active)
            return
        setSelected({ isOpen: true, day: ele.day, slot: ele.slot, key: ele.key })

    }
    let setBookSlot = (obj) => {

        let slotCopy = JSON.stringify(slotState)
        slotCopy = JSON.parse(slotCopy)
        slotCopy[obj.day][obj.key] = {
            slot: obj.slot,
            active: true,
            username: obj.username,
            email: obj.email,
            phone: obj.phone
        }
        setSelected({
            isOpen: false,
            day: "",
            element: {},
            key: -1
        })
        setSlotState(slotCopy)
        localStorage.setItem("slots", JSON.stringify(slotCopy))
    }
    let handleClose = () => {
        setSelected({
            isOpen: false,
            day: "",
            element: {},
            key: -1
        })
    }
    return <div className="slots_container">
        <Typography variant="h2" className="text-center" sx={{ marginBottom: "40px" }}>
            Book Your Slot
        </Typography>
        <br/> <br/> <br/>
        <TableContainer
        >
            <Table sx={{ border: "1px solid #ccc" }}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Day
                        </TableCell>
                        <TableCell>
                            Slot 1
                        </TableCell>
                        <TableCell>
                            Slot 2
                        </TableCell>
                        <TableCell>
                            Slot 3
                        </TableCell>
                        <TableCell>
                            Slot 4
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Today
                        </TableCell>
                        {slotState && slotState.today && slotState.today.map((element, key) => {
                            return <TableCell key={key}>
                                <span
                                    onClick={activateForm.bind(this, { day: 'today', slot: element.slot, key }, element.active)}
                                    className={element.active === true ? "slot_slab active" : "slot_slab"}>
                                    {element.slot}
                                </span >
                                <Badge booked={element.active}>{element.active === true ? "Booked " + element.username : "Available"}</Badge>
                            </TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Tomorrow
                        </TableCell>
                        {slotState && slotState.tomorrow && slotState.tomorrow.map((element, key) => {
                            return <TableCell key={key}>
                                <span
                                    onClick={activateForm.bind(this, { day: 'tomorrow', slot: element.slot, key }, element.active)}
                                    className={element.active === true ? "slot_slab active" : "slot_slab"}>
                                    {element.slot}
                                </span>
                                <Badge booked={element.active}>{element.active === true ? "Booked " + element.username : "Available"}</Badge>

                            </TableCell>
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Day After Tomorrow
                        </TableCell>
                        {slotState && slotState.dayAfterTomorrow && slotState.dayAfterTomorrow.map((element, key) => {
                            return <TableCell key={key}>
                                <span
                                    onClick={activateForm.bind(this, { day: 'dayAfterTomorrow', slot: element.slot, key }, element.active)}
                                    className={element.active === true ? "slot_slab active" : "slot_slab"}>
                                    {element.slot}
                                </span>
                                <Badge booked={element.active}>{element.active === true ? "Booked " + element.username : "Available"}</Badge>
                                
                            </TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <Modal
            sx={{ border: "none" }}
            open={selected.isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    backgroundColor: "white",
                    border: '1px solid #ccc',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <BookNew selected={selected} book={setBookSlot} />
            </Box>
        </Modal>
    </div>
}

export default Slots;