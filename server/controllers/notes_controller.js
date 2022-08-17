import NotesModel from "../models/NoteSchema";


const save_notes = async (req,res) =>{
                                                try
                                                {
                                                   const {notes_title, notes_description} = req.body;
                                                    const notes_details = new NotesModel({notes_title, notes_description});
                                                    await notes_details.save();

                                                    console.log(`notes saved successfully`);
                                                    res.status(201).send({message:"notes saved  successfully"});

                                                }catch (error)
                                                  {
                                                      console.log(error);
                                                      res.status(400).json({success: false, error:"notes not saved" });
                                                  }
                                             };

const get_notes = async (req, res) =>{
                                           try
                                           {
                                               const get_notes_details = await NotesModel.find();
                                                res.status(200).json(get_notes_details);
                                           }catch(e)
                                            {
                                                console.error(e);
                                                res.status(400).json({success: false, error:"Didn't get notes data" });
                                            }
                                        }


const get_single_note = async (req, res) =>{
                                                try
                                                {
                                                  const single_note = await NotesModel.findById(req.query.id);
                                                  if (!single_note)
                                                  {
                                                      res.status(404).json({success:false ,error:"Note not found."})
                                                  }
                                                  res.status(200).json(single_note);

                                                }catch (e)
                                                 {
                                                   res.status(404).json({success:false ,error:"Note not found." })
                                                 }
                                            }

const update_note = async (req, res) =>{
                                         try
                                         {
                                            //its update so convert const single_note -> let single_note. as const value don't change
                                            let single_note = await NotesModel.findById(req.query.id);
                                            if (!single_note)
                                            {
                                                res.status(404).json({success:false ,error:"Note not found."})
                                            }
                                            single_note = await NotesModel.findByIdAndUpdate(req.query.id, req.body);
                                            res.status(201).json({message:"Note updated successfully"});

                                          }catch (e)
                                            {
                                                res.status(404).json({success:false ,error:"Note not found." })
                                            }
                                        }



const delete_note = async (req, res) =>{
                                           try
                                           {
                                                const single_note = await NotesModel.findById(req.query.id);
                                                 if (!single_note)
                                                 {
                                                     res.status(404).json({success:false ,error:"Note not found."})
                                                  }
                                                 await NotesModel.findByIdAndDelete(req.query.id);
                                                 res.status(200).json({message:"Notes deleted successfully"});

                                            }catch (e)
                                             {
                                                  res.status(404).json({success:false ,error:"Note couldnot be deleted." })
                                              }
                                        }




export { save_notes, get_notes, get_single_note, delete_note, update_note };
