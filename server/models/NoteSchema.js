import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
                                          notes_title:
                                          {
                                              type: String,
                                              required: [true, 'Please add a title'],
                                              unique: true,
                                              trim:true,
                                              maxlength: [40, 'Title cannot be more than 40 characters']
                                          },
                                          notes_description:
                                          {
                                              type: String,
                                              required: true,
                                              trim:true,
                                              maxlength: [300, 'Description cannot be more than 300 characters']
                                          }
                                      },{
                                           timestamps:true
                                        }
                                    )

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);
