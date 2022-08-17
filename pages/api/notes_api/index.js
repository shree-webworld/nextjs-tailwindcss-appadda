import nc from "next-connect";
import {save_notes, get_notes} from "../../../server/controllers/notes_controller";
import connectDB from "../../../server/utils/connectDB";

const handler = nc();
connectDB();

handler.post( save_notes );
handler.get( get_notes );


export default handler;
