import nc from "next-connect";
import {get_single_note, update_note, delete_note} from "../../../server/controllers/notes_controller";
import connectDB from "../../../server/utils/connectDB";

const handler = nc();
connectDB();

//to get_single_note by id
handler.get( get_single_note );

handler.put( update_note );

handler.delete( delete_note );


export default handler;
